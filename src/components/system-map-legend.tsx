import Link from "next/link";

import { lines } from "@/lib/lines";
import { RouteDot } from "@/components/route-dot";

export function SystemMapLegend() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute inset-x-4 top-[7px] h-px bg-border sm:inset-x-6" />
      <div className="relative flex items-start justify-between gap-2 overflow-x-auto pb-1">
        {lines.map((line) => (
          <Link
            key={line.id}
            href={line.href}
            className="group flex min-w-[4.5rem] flex-col items-center gap-2 text-center"
          >
            <RouteDot color={line.colorVar} className="ring-4 ring-card transition-transform group-hover:scale-125" />
            <span className="font-mono text-[0.65rem] tracking-wider text-muted-foreground uppercase">
              {line.code}
            </span>
            <span className="text-xs text-muted-foreground transition-colors group-hover:text-foreground">
              {line.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
