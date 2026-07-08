import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { Separator } from "@/components/ui/separator";
import { SystemMapLegend } from "@/components/system-map-legend";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs space-y-3">
            <div className="flex items-center gap-2.5 font-heading font-bold tracking-tight">
              <span className="flex size-8 items-center justify-center rounded-sm bg-primary font-mono text-xs font-bold text-primary-foreground">
                EL
              </span>
              <span className="text-sm">{siteConfig.shortName}</span>
            </div>
            <p className="text-sm text-muted-foreground">{siteConfig.description}</p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-sm border border-border font-mono text-xs font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                IG
              </a>
              <a
                href={siteConfig.social.facebook}
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-sm border border-border font-mono text-xs font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                FB
              </a>
            </div>
          </div>

          <div className="w-full max-w-md">
            <h3 className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
              System map
            </h3>
            <div className="mt-5">
              <SystemMapLegend />
            </div>
          </div>

          <div className="shrink-0">
            <h3 className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
              Get in touch
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">{siteConfig.location}</p>
            <Link
              href="/collaborate"
              className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
            >
              Contact us &rarr;
            </Link>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center font-mono text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
