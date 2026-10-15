"use client"

import { motion, type MotionStyle, type Transition } from "motion/react"

import { cn } from "@/lib/utils"

interface BorderBeamProps {
  /**
   * The size of the border beam.
   */
  size?: number
  /**
   * The duration of the border beam.
   */
  duration?: number
  /**
   * The delay of the border beam.
   */
  delay?: number
  /**
   * The color of the border beam from.
   */
  colorFrom?: string
  /**
   * The color of the border beam to.
   */
  colorTo?: string
  /**
   * The motion transition of the border beam.
   */
  transition?: Transition
  /**
   * The class name of the border beam.
   */
  className?: string
  /**
   * The class name of the outer container.
   */
  containerClassName?: string
  /**
   * The style of the border beam.
   */
  style?: React.CSSProperties
  /**
   * Whether to reverse the animation direction.
   */
  reverse?: boolean
  /**
   * The initial offset position (0-100).
   */
  initialOffset?: number
  /**
   * The border width of the beam.
   */
  borderWidth?: number
  /**
   * The corner radius of the motion path.
   */
  pathCornerRadius?: number | string
}

export const BorderBeam = ({
  className,
  containerClassName,
  size = 100,
  delay = 0,
  duration = 8,
  colorFrom = "#38bdf8",
  colorTo = "#2563eb",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1.5,
  pathCornerRadius,
}: BorderBeamProps) => {
  const roundRadius =
    pathCornerRadius !== undefined
      ? typeof pathCornerRadius === "number"
        ? `${pathCornerRadius}px`
        : pathCornerRadius
      : `${size}px`
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 !m-0 rounded-[inherit]",
        containerClassName
      )}
      style={
        {
          borderWidth: `${borderWidth}px`,
          borderStyle: "solid",
          borderColor: "transparent",
          WebkitMaskImage:
            "linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",
          WebkitMaskClip: "padding-box, border-box",
          WebkitMaskComposite: "xor",
          maskImage: "linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",
          maskClip: "padding-box, border-box",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
    >
      <motion.div
        className={cn(
          "absolute aspect-square inset-auto rounded-full",
          className
        )}
        style={
          {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${roundRadius})`,
            background: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
            ...style,
          } as MotionStyle
        }
        animate={{
          offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
        }}
        transition={
          transition ?? {
            repeat: Infinity,
            ease: "linear",
            duration,
            delay: -delay,
          }
        }
      />
    </div>
  )
}
