"use client";

import { useEffect, useRef } from "react";

interface RetroGridProps {
  position?: "center" | "mouse";
  blur?: number;
  speed?: number;
  lines?: number;
  cellSize?: number;
  lineWidth?: number;
  lineColor?: string;
  animate?: boolean;
}

export default function RetroGrid({
  position = "mouse",
  blur = 0.5,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  speed = 1,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  lines = 20,
  cellSize = 40,
  lineWidth = 1,
  lineColor = "rgba(127, 255, 0, 0.2)",
  animate = true
}: RetroGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (position === "mouse") {
      const container = containerRef.current;
      if (!container) return;

      const updateMousePosition = (ev: MouseEvent) => {
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const x = ev.clientX - rect.left;
        const y = ev.clientY - rect.top;
        container.style.setProperty("--x", `${x}px`);
        container.style.setProperty("--y", `${y}px`);
      };

      container.addEventListener("mousemove", updateMousePosition);

      return () => {
        container.removeEventListener("mousemove", updateMousePosition);
      };
    }
  }, [position]);

  return (
    <div ref={containerRef} className="relative h-full w-full">
      <div className="absolute inset-0">
        <div
          className={animate ? "absolute inset-0 animate-[grid-scroll_4s_linear_infinite]" : "absolute inset-0"}
          style={{
            backgroundImage: `
              ${position === "mouse" ? 
                `radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(127, 255, 0, ${blur}) 0%, transparent 25%),` 
                : 
                `radial-gradient(circle at center, rgba(127, 255, 0, ${blur}) 0%, transparent 25%),`
              }
              linear-gradient(${lineColor} ${lineWidth}px, transparent ${lineWidth}px),
              linear-gradient(90deg, ${lineColor} ${lineWidth}px, transparent ${lineWidth}px)
            `,
            backgroundSize: `100px 100px, ${cellSize}px ${cellSize}px, ${cellSize}px ${cellSize}px`,
            transform: `perspective(1000px) rotateX(60deg) translateY(-${cellSize}px)`,
            transformOrigin: "center top",
            backgroundPosition: "0 0",
            animationTimingFunction: "linear",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>
    </div>
  );
} 