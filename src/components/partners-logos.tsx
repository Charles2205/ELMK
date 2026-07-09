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
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          {euPrograms.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-20 w-44 shrink-0 items-center justify-center rounded-md border border-border bg-white p-3 shadow-sm transition-opacity hover:opacity-80 sm:h-24 sm:w-52"
            >
              <div className="relative h-full w-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="208px"
                  className="object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-[partners-marquee_60s_linear_infinite] items-center gap-6 hover:[animation-play-state:paused] motion-reduce:animate-none">
          {track.map((partner, i) => (
            <a
              key={`${partner.name}-${i}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-16 w-36 shrink-0 items-center justify-center rounded-md border border-border bg-white p-2.5 grayscale transition-all duration-300 hover:grayscale-0"
            >
              <div className="relative h-full w-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="144px"
                  className="object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
