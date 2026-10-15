"use client"

import React, { useContext, useEffect, useRef, useState } from "react"
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react"
import type { MotionValue } from "motion/react"

import { cn } from "@/lib/utils"

interface ScrollVelocityRowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  baseVelocity?: number
  direction?: 1 | -1
  scrollReactivity?: boolean
  pauseOnHover?: boolean
  draggable?: boolean
  wheelScrollable?: boolean
}

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

const ScrollVelocityContext = React.createContext<MotionValue<number> | null>(
  null
)

export function ScrollVelocityContainer({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [scrollContainer, setScrollContainer] = useState<HTMLElement | undefined>(undefined)

  useEffect(() => {
    const el = document.querySelector<HTMLElement>("[data-slot='scroll-area-viewport']")
    if (el) {
      setScrollContainer(el)
    }
  }, [])

  const { scrollY } = useScroll(
    scrollContainer ? { container: { current: scrollContainer } } : undefined
  )
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, (v) => {
    const sign = v < 0 ? -1 : 1
    const magnitude = Math.min(5, (Math.abs(v) / 1000) * 5)
    return sign * magnitude
  })

  return (
    <ScrollVelocityContext.Provider value={velocityFactor}>
      <div className={cn("relative w-full", className)} {...props}>
        {children}
      </div>
    </ScrollVelocityContext.Provider>
  )
}

export function ScrollVelocityRow(props: ScrollVelocityRowProps) {
  const sharedVelocityFactor = useContext(ScrollVelocityContext)
  if (sharedVelocityFactor) {
    return (
      <ScrollVelocityRowImpl {...props} velocityFactor={sharedVelocityFactor} />
    )
  }
  return <ScrollVelocityRowLocal {...props} />
}

interface ScrollVelocityRowImplProps extends ScrollVelocityRowProps {
  velocityFactor: MotionValue<number>
}

function ScrollVelocityRowImpl({
  children,
  baseVelocity = 5,
  direction = 1,
  className,
  velocityFactor,
  scrollReactivity = true,
  pauseOnHover = false,
  draggable = true,
  wheelScrollable = true,
  ...props
}: ScrollVelocityRowImplProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const blockRef = useRef<HTMLDivElement>(null)
  const [numCopies, setNumCopies] = useState(1)
  const [isHovered, setIsHovered] = useState(false)
  const isHoveredRef = useRef(false)

  // Drag-to-scroll interaction state
  const isDraggingRef = useRef(false)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartXRef = useRef(0)
  const dragLastXRef = useRef(0)
  const dragVelocityRef = useRef(0)
  const dragMomentumRef = useRef(0)

  const baseX = useMotionValue(0)
  const baseDirectionRef = useRef<number>(direction >= 0 ? 1 : -1)
  const currentDirectionRef = useRef<number>(direction >= 0 ? 1 : -1)
  const unitWidth = useMotionValue(0)

  const isInViewRef = useRef(true)
  const isPageVisibleRef = useRef(true)
  const prefersReducedMotionRef = useRef(false)

  useEffect(() => {
    baseDirectionRef.current = direction >= 0 ? 1 : -1
    currentDirectionRef.current = direction >= 0 ? 1 : -1
  }, [direction])

  // Wheel and trackpad horizontal scrolling
  useEffect(() => {
    if (!wheelScrollable) return
    const container = containerRef.current
    if (!container) return

    let lastScrollTime = 0
    const scrollViewport = document.querySelector<HTMLElement>(
      "[data-slot='scroll-area-viewport']"
    )

    const onScrollActivity = () => {
      lastScrollTime = performance.now()
    }

    scrollViewport?.addEventListener("scroll", onScrollActivity, { passive: true })
    window.addEventListener("scroll", onScrollActivity, { passive: true })

    const onWheel = (e: WheelEvent) => {
      // 1. Explicit horizontal scroll (trackpad 2-finger horizontal swipe)
      const isHorizontalTrackpad = Math.abs(e.deltaX) > Math.abs(e.deltaY)
      if (isHorizontalTrackpad && Math.abs(e.deltaX) > 0) {
        e.preventDefault()
        baseX.set(baseX.get() + e.deltaX)
        return
      }

      // 2. Shift + mouse wheel
      if (e.shiftKey && e.deltaY !== 0) {
        e.preventDefault()
        baseX.set(baseX.get() + e.deltaY)
        return
      }

      // 3. Vertical wheel while resting on this category:
      // If the page wasn't actively scrolling in the last 150ms and the mouse is hovering over this category,
      // allow the mouse wheel to scroll this category horizontally!
      const timeSincePageScroll = performance.now() - lastScrollTime
      if (isHoveredRef.current && timeSincePageScroll > 150) {
        e.preventDefault()
        baseX.set(baseX.get() + e.deltaY * 0.9)
      }
    }

    container.addEventListener("wheel", onWheel, { passive: false })

    return () => {
      container.removeEventListener("wheel", onWheel)
      scrollViewport?.removeEventListener("scroll", onScrollActivity)
      window.removeEventListener("scroll", onScrollActivity)
    }
  }, [wheelScrollable, baseX])

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggable) return
    if (e.button !== 0 && e.pointerType === "mouse") return
    isDraggingRef.current = true
    setIsDragging(true)
    dragStartXRef.current = e.clientX
    dragLastXRef.current = e.clientX
    dragVelocityRef.current = 0
    dragMomentumRef.current = 0
    try {
      e.currentTarget.setPointerCapture(e.pointerId)
    } catch {}
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return
    const currentX = e.clientX
    const deltaX = currentX - dragLastXRef.current
    dragVelocityRef.current = deltaX
    dragLastXRef.current = currentX
    baseX.set(baseX.get() - deltaX)
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    setIsDragging(false)
    // Transfer flick velocity into smooth coasting momentum
    dragMomentumRef.current = dragVelocityRef.current * 1.2
    try {
      e.currentTarget.releasePointerCapture(e.pointerId)
    } catch {}
  }

  useEffect(() => {
    const container = containerRef.current
    const block = blockRef.current
    let ro: ResizeObserver | null = null
    let io: IntersectionObserver | null = null
    let mq: MediaQueryList | null = null
    const handleVisibility = () => {
      isPageVisibleRef.current = document.visibilityState === "visible"
    }
    const handlePRM = () => {
      if (mq) {
        prefersReducedMotionRef.current = mq.matches
      }
    }

    if (container && block) {
      const updateSizes = () => {
        const cw = container.offsetWidth || 0
        const bw = block.scrollWidth || 0
        unitWidth.set(bw)
        const nextCopies = bw > 0 ? Math.max(3, Math.ceil(cw / bw) + 2) : 1
        setNumCopies((prev) => (prev === nextCopies ? prev : nextCopies))
      }

      updateSizes()

      ro = new ResizeObserver(updateSizes)
      ro.observe(container)
      ro.observe(block)

      const scrollViewport = document.querySelector<HTMLElement>(
        "[data-slot='scroll-area-viewport']"
      )
      io = new IntersectionObserver(
        ([entry]) => {
          isInViewRef.current = entry.isIntersecting
        },
        {
          root: scrollViewport ?? null,
          rootMargin: "150px",
        }
      )
      io.observe(container)

      document.addEventListener("visibilitychange", handleVisibility, {
        passive: true,
      })
      handleVisibility()

      mq = window.matchMedia("(prefers-reduced-motion: reduce)")
      mq.addEventListener("change", handlePRM)
      handlePRM()
    }

    return () => {
      if (ro) {
        ro.disconnect()
      }
      if (io) {
        io.disconnect()
      }
      document.removeEventListener("visibilitychange", handleVisibility)
      if (mq) {
        mq.removeEventListener("change", handlePRM)
      }
    }
  }, [children, unitWidth])

  const x = useTransform([baseX, unitWidth], ([v, bw]) => {
    const width = Number(bw) || 1
    const offset = Number(v) || 0
    return `${-wrap(0, width, offset)}px`
  })

  useAnimationFrame((_, delta) => {
    if (!isInViewRef.current || !isPageVisibleRef.current) return
    // Pause during theme view transitions so 100% of GPU/CPU resources go to the circular reveal
    if (document.documentElement.dataset.magicuiThemeVt === "active") return

    // If user is actively dragging with cursor/touch, skip auto-movement
    if (isDraggingRef.current) return

    // Apply smooth inertia friction decay after release
    if (Math.abs(dragMomentumRef.current) > 0.05) {
      baseX.set(baseX.get() - dragMomentumRef.current)
      dragMomentumRef.current *= 0.92
      return
    } else {
      dragMomentumRef.current = 0
    }

    if (pauseOnHover && isHovered) return

    const dt = delta / 1000
    const vf = scrollReactivity ? velocityFactor.get() : 0
    const absVf = Math.min(5, Math.abs(vf))
    const speedMultiplier = prefersReducedMotionRef.current ? 1 : 1 + absVf

    if (absVf > 0.1) {
      const scrollDirection = vf >= 0 ? 1 : -1
      currentDirectionRef.current = baseDirectionRef.current * scrollDirection
    }

    const bw = unitWidth.get() || 0
    if (bw <= 0) return
    const pixelsPerSecond = (bw * baseVelocity) / 100
    const moveBy =
      currentDirectionRef.current * pixelsPerSecond * speedMultiplier * dt
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full overflow-hidden whitespace-nowrap select-none touch-pan-y",
        draggable && (isDragging ? "cursor-grabbing" : "cursor-grab"),
        className
      )}
      onMouseEnter={() => {
        setIsHovered(true)
        isHoveredRef.current = true
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        isHoveredRef.current = false
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      {...props}
    >
      <motion.div
        className="inline-flex transform-gpu items-center will-change-transform select-none"
        style={{ x }}
      >
        {Array.from({ length: numCopies }).map((_, i) => (
          <div
            key={i}
            ref={i === 0 ? blockRef : null}
            aria-hidden={i !== 0}
            className="inline-flex shrink-0 items-center"
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

function ScrollVelocityRowLocal(props: ScrollVelocityRowProps) {
  const [scrollContainer, setScrollContainer] = useState<HTMLElement | undefined>(undefined)

  useEffect(() => {
    const el = document.querySelector<HTMLElement>("[data-slot='scroll-area-viewport']")
    if (el) {
      setScrollContainer(el)
    }
  }, [])

  const { scrollY } = useScroll(
    scrollContainer ? { container: { current: scrollContainer } } : undefined
  )
  const localVelocity = useVelocity(scrollY)
  const localSmoothVelocity = useSpring(localVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const localVelocityFactor = useTransform(localSmoothVelocity, (v) => {
    const sign = v < 0 ? -1 : 1
    const magnitude = Math.min(5, (Math.abs(v) / 1000) * 5)
    return sign * magnitude
  })
  return (
    <ScrollVelocityRowImpl {...props} velocityFactor={localVelocityFactor} />
  )
}
