import Image from "next/image";

import { partners } from "@/lib/partners";

export function PartnersLogos() {
  const euPrograms = partners.filter((partner) => partner.category === "eu-program");
  const sponsors = partners.filter((partner) => partner.category === "sponsor");
  const track = [...sponsors, ...sponsors];

  return (
    <div className="space-y-14">
      <div>
        <p className="text-center font-mono text-xs tracking-wider text-muted-foreground uppercase">
          Co-funded programs
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {euPrograms.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-14 w-40 shrink-0 transition-opacity hover:opacity-80 sm:h-16 sm:w-48"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                sizes="192px"
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-[partners-marquee_45s_linear_infinite] items-center gap-16 hover:[animation-play-state:paused] motion-reduce:animate-none">
          {track.map((partner, i) => (
            <a
              key={`${partner.name}-${i}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-10 w-28 shrink-0 grayscale transition-all duration-300 hover:grayscale-0"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                sizes="112px"
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
