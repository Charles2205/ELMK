import { cn } from "@/lib/utils";
import { LineTag } from "@/components/line-tag";
import type { LineDef } from "@/lib/lines";

export function SectionHeading({
  eyebrow,
  line,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  line?: Pick<LineDef, "code" | "name" | "colorVar">;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {line && (
        <div className={cn("mb-3 flex", align === "center" && "justify-center")}>
          <LineTag line={line} />
        </div>
      )}
      {eyebrow && !line && (
        <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
