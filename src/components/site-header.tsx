"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { lines } from "@/lib/lines";
import { Button } from "@/components/ui/button";
import { RouteDot } from "@/components/route-dot";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur supports-backdrop-filter:bg-background/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 font-heading font-bold tracking-tight">
          <Image
            src="/images/loco-icon.png"
            alt="Loco Motion Foundation"
            width={46}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span className="hidden text-sm leading-tight sm:block">
            {siteConfig.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          {lines.map((line) => (
            <Link
              key={line.href}
              href={line.href}
              className={cn(
                "flex items-center gap-2 rounded-sm px-3 py-2 font-heading text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                pathname === line.href && "bg-muted text-foreground",
              )}
            >
              <RouteDot color={line.colorVar} />
              {line.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button render={<Link href="/collaborate" />}>Get connected</Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu" />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>{siteConfig.shortName}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {lines.map((line) => (
                <SheetClose
                  key={line.href}
                  render={
                    <Link
                      href={line.href}
                      className={cn(
                        "flex items-center gap-2.5 rounded-sm px-3 py-2.5 font-heading text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                        pathname === line.href && "bg-muted text-foreground",
                      )}
                    />
                  }
                >
                  <RouteDot color={line.colorVar} />
                  {line.name}
                </SheetClose>
              ))}
              <SheetClose render={<Button className="mt-3" render={<Link href="/collaborate" />} />}>
                Get connected
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
