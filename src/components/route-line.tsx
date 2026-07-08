"use client";

import { useSyncExternalStore } from "react";

export type RouteStop = {
  code: string;
  label: string;
};

function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Assume reduced motion until the client confirms otherwise, so SSR markup stays static.
function getReducedMotionServerSnapshot() {
  return true;
}

export function RouteLine({
  stops,
  color = "var(--primary)",
  className,
}: {
  stops: RouteStop[];
  color?: string;
  className?: string;
}) {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const width = 1000;
  const height = 140;
  const margin = 60;
  const trackY = 64;
  const step = (width - margin * 2) / (stops.length - 1);
  const points = stops.map((stop, i) => ({ ...stop, x: margin + step * i, y: trackY }));
  const pathD = `M ${points[0].x} ${trackY} L ${points[points.length - 1].x} ${trackY}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label={`Route diagram: ${stops.map((s) => s.label).join(" to ")}`}
    >
      {/* Base track */}
      <path
        d={pathD}
        fill="none"
        stroke="var(--border)"
        strokeWidth={3}
        strokeLinecap="round"
      />

      {/* Drawn line */}
      <path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth={3}
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray={100}
        strokeDashoffset={reducedMotion ? 0 : 100}
        className={reducedMotion ? undefined : "animate-[route-draw_1.6s_ease-out_forwards]"}
      />

      {points.map((point, i) => (
        <g key={point.code}>
          <circle
            cx={point.x}
            cy={point.y}
            r={9}
            fill="var(--card)"
            stroke={color}
            strokeWidth={3}
            className={reducedMotion ? undefined : "opacity-0 animate-[route-stop-in_0.4s_ease-out_forwards]"}
            style={reducedMotion ? undefined : { animationDelay: `${(i / (points.length - 1)) * 1.5}s` }}
          />
          <text
            x={point.x}
            y={point.y - 24}
            textAnchor="middle"
            className="fill-muted-foreground font-mono"
            style={{ fontSize: 13, letterSpacing: "0.08em" }}
          >
            {point.code}
          </text>
          <text
            x={point.x}
            y={point.y + 34}
            textAnchor="middle"
            className="fill-foreground font-heading font-semibold"
            style={{ fontSize: 16 }}
          >
            {point.label}
          </text>
        </g>
      ))}

      {/* Traveling marker, drawn last so it stays on top of every stop it passes */}
      {!reducedMotion && (
        <circle r={5} fill={color}>
          <animateMotion path={pathD} dur="1.7s" fill="freeze" />
        </circle>
      )}
    </svg>
  );
}
