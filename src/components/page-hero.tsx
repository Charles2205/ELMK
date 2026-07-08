import { type ReactNode } from "react";

import { cn } from "@/lib/utils";
import { LineTag } from "@/components/line-tag";
import { PhotoFigure } from "@/components/photo-figure";
import type { LineDef } from "@/lib/lines";

export function PageHero({
  line,
  title,
  description,
  photo,
  children,
  className,
}: {
  line: Pick<LineDef, "code" | "name" | "colorVar">;
  title: string;
  description?: string;
  photo?: { src: string; alt: string; caption: string; figure: string };
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative border-b border-border", className)}>
      <div
        aria-hidden
        className="h-[3px] w-full"
        style={{
          background: Array.isArray(line.colorVar)
            ? `linear-gradient(to right, ${line.colorVar.join(", ")})`
            : line.colorVar,
        }}
      />
      <div
        className={cn(
          "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8",
          photo && "grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]",
        )}
      >
        <div>
          <LineTag line={line} />
          <h1 className="mt-5 text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-pretty text-lg text-muted-foreground">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
        {photo && (
          <PhotoFigure
            src={photo.src}
            alt={photo.alt}
            figure={photo.figure}
            caption={photo.caption}
            priority
          />
        )}
      </div>
    </section>
  );
}
