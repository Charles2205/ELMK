import { cn } from "@/lib/utils";
import type { LineDef } from "@/lib/lines";

export function RouteDot({ color, className }: { color: LineDef["colorVar"]; className?: string }) {
  if (Array.isArray(color)) {
    return (
      <span className={cn("flex items-center -space-x-1", className)} aria-hidden>
        {color.map((c, i) => (
          <span
            key={i}
            className="size-2 rounded-full ring-2 ring-background"
            style={{ backgroundColor: c }}
          />
        ))}
      </span>
    );
  }

  return (
    <span
      aria-hidden
      className={cn("size-2 shrink-0 rounded-full", className)}
      style={{ backgroundColor: color }}
    />
  );
}
