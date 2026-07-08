import { cn } from "@/lib/utils";
import type { LineDef } from "@/lib/lines";
import { RouteDot } from "@/components/route-dot";

export function LineTag({
  line,
  className,
}: {
  line: Pick<LineDef, "code" | "name" | "colorVar">;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-sm border border-border bg-card px-2.5 py-1 font-mono text-xs tracking-wider uppercase text-muted-foreground",
        className,
      )}
    >
      <RouteDot color={line.colorVar} />
      Line {line.code} &middot; {line.name}
    </span>
  );
}
