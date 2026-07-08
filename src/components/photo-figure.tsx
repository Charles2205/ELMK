import Image from "next/image";

export function PhotoFigure({
  src,
  alt,
  figure,
  caption,
  priority,
  className,
  sizes,
}: {
  src: string;
  alt: string;
  figure: string;
  caption: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <figure className={className}>
      <div className="relative aspect-4/3 overflow-hidden rounded-md border border-border">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes ?? "(min-width: 1024px) 45vw, 90vw"}
          className="object-cover"
        />
      </div>
      <figcaption className="mt-2 font-mono text-xs text-muted-foreground">
        Fig. {figure} &mdash; {caption}
      </figcaption>
    </figure>
  );
}
