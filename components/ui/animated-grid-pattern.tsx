"use client"

import {
  useEffect,
  useId,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react"

import { cn } from "@/lib/utils"

export interface AnimatedGridPatternProps extends ComponentPropsWithoutRef<"svg"> {
  width?: number
  height?: number
  x?: number
  y?: number
  strokeDasharray?: number
  numSquares?: number
  maxOpacity?: number
  duration?: number
  repeatDelay?: number
}

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 30,
  className,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId()
  const containerRef = useRef<SVGSVGElement | null>(null)
  const rectsRef = useRef<(SVGRectElement | null)[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Measure container dimensions with ResizeObserver
  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect
        setDimensions((prev) =>
          prev.width === w && prev.height === h ? prev : { width: w, height: h }
        )
      }
    })

    ro.observe(element)
    return () => ro.disconnect()
  }, [])

  // Animate squares directly via Web Animations API (runs on compositor thread, 0 React re-renders)
  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return

    const element = containerRef.current
    if (!element) return

    const cols = Math.max(1, Math.floor(dimensions.width / width))
    const rows = Math.max(1, Math.floor(dimensions.height / height))

    let isVisible = true
    const activeAnimations: Animation[] = []
    let isDisposed = false

    // Check intersection with the nearest scroll container or viewport
    const scrollViewport = document.querySelector<HTMLElement>(
      "[data-slot='scroll-area-viewport']"
    )
    const io = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
        if (!isVisible) {
          activeAnimations.forEach((anim) => {
            try {
              if (anim.playState === "running") anim.pause()
            } catch {}
          })
        } else {
          activeAnimations.forEach((anim) => {
            try {
              if (anim.playState === "paused") anim.play()
            } catch {}
          })
        }
      },
      {
        root: scrollViewport ?? null,
        rootMargin: "100px",
      }
    )
    io.observe(element)

    const getRandomPos = (): [number, number] => [
      Math.floor(Math.random() * cols) * width + 1,
      Math.floor(Math.random() * rows) * height + 1,
    ]

    const animateSquare = (rect: SVGRectElement, initialDelayMs: number) => {
      if (isDisposed) return

      const [posX, posY] = getRandomPos()
      rect.setAttribute("x", String(posX))
      rect.setAttribute("y", String(posY))

      const anim = rect.animate(
        [
          { opacity: 0 },
          { opacity: maxOpacity, offset: 0.5 },
          { opacity: 0 },
        ],
        {
          duration: duration * 1000,
          delay: initialDelayMs,
          easing: "ease-in-out",
          fill: "forwards",
        }
      )

      activeAnimations.push(anim)

      anim.onfinish = () => {
        const idx = activeAnimations.indexOf(anim)
        if (idx !== -1) activeAnimations.splice(idx, 1)

        if (!isDisposed) {
          const nextDelay = Math.random() * (repeatDelay * 1000)
          if (isVisible) {
            animateSquare(rect, nextDelay)
          } else {
            // Queue when visible again
            const checkResume = () => {
              if (isDisposed) return
              if (isVisible) {
                animateSquare(rect, 0)
              } else {
                setTimeout(checkResume, 500)
              }
            }
            setTimeout(checkResume, 500)
          }
        }
      }
    }

    rectsRef.current.forEach((rect, i) => {
      if (!rect) return
      const initialDelay = (i * 0.12 + Math.random() * 0.4) * 1000
      animateSquare(rect, initialDelay)
    })

    return () => {
      isDisposed = true
      io.disconnect()
      activeAnimations.forEach((anim) => {
        try {
          anim.cancel()
        } catch {}
      })
    }
  }, [
    dimensions.width,
    dimensions.height,
    width,
    height,
    numSquares,
    maxOpacity,
    duration,
    repeatDelay,
  ])

  const squaresCount = dimensions.width && dimensions.height ? numSquares : 0

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {Array.from({ length: squaresCount }).map((_, i) => (
          <rect
            key={i}
            ref={(el) => {
              rectsRef.current[i] = el
            }}
            width={width - 1}
            height={height - 1}
            x={-9999}
            y={-9999}
            fill="currentColor"
            strokeWidth="0"
            opacity={0}
            className="transition-none pointer-events-none"
          />
        ))}
      </svg>
    </svg>
  )
}
