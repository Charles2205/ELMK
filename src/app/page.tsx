import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FlaskConical, Route, Users, Landmark, CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { RouteLine } from "@/components/route-line";
import { Reveal } from "@/components/reveal";
import { getLine } from "@/lib/lines";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  description: siteConfig.description,
  path: "/",
});

export default function Home() {
  const research = getLine("research");
  const mobility = getLine("mobility");

  return (
    <>
      {/* Hero */}
      <section className="grid lg:grid-cols-2">
        <Reveal className="flex flex-col justify-center bg-[var(--line-research)] px-6 py-16 text-[var(--line-research-foreground)] sm:px-10 sm:py-20 lg:px-16 lg:py-0">
          <p className="font-mono text-xs tracking-wider text-[var(--line-research-foreground)]/70 uppercase">
            Berryville, Virginia
          </p>
          <h1 className="mt-4 text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Research and mobility experiences for emerging youth leaders
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-lg text-[var(--line-research-foreground)]/85">
            We connect young people with real research placements and mobility
            programs that build skills, confidence, and civic impact across
            Berryville, Virginia, and the surrounding region.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" render={<Link href="/collaborate" />}>
              Get connected <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[var(--line-research-foreground)]/40 bg-transparent text-[var(--line-research-foreground)] hover:bg-[var(--line-research-foreground)]/10 hover:text-[var(--line-research-foreground)]"
              render={<Link href="/about" />}
            >
              About programs
            </Button>
          </div>
        </Reveal>
        <Reveal delay={150} className="relative min-h-[320px] lg:min-h-[640px]">
          <Image
            src="/images/home-transit-corridor.png"
            alt="A bus and bike racks along a transit corridor, with field research clipboards in the foreground"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
      </section>

      {/* Signature: the throughline */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-center font-mono text-xs tracking-wider text-muted-foreground uppercase sm:text-left">
            The throughline
          </p>
          <div className="mt-8 overflow-x-auto">
            <RouteLine
              className="mx-auto w-full max-w-3xl min-w-[560px]"
              color="var(--primary)"
              stops={[
                { code: "01", label: "Curiosity" },
                { code: "02", label: "Placement" },
                { code: "03", label: "Mentorship" },
                { code: "04", label: "Impact" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="About"
            title="Advancing youth leadership through hands-on research"
            description="We design structured youth research placements, leadership labs, and regional mobility experiences that align with school goals and community priorities — turning curiosity into confidence and civic impact."
          />
          <Reveal delay={150} className="grid grid-cols-2 gap-4">
            {[
              { icon: FlaskConical, label: "Research placements" },
              { icon: Route, label: "Mobility programs" },
              { icon: Landmark, label: "Policy insight" },
              { icon: Users, label: "Community impact" },
            ].map(({ icon: Icon, label }) => (
              <Card key={label} className="justify-center">
                <CardContent className="flex flex-col items-center gap-2 pt-6 text-center">
                  <div className="flex size-10 items-center justify-center rounded-sm bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <p className="text-sm font-medium">{label}</p>
                </CardContent>
              </Card>
            ))}
          </Reveal>
        </div>
        <div className="mt-8">
          <Button variant="link" className="px-0" render={<Link href="/about" />}>
            Meet our leadership team <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>

      {/* Programs */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Programs"
            title="Structured placements. Real mobility. Lasting impact."
            description="Every program is designed around one goal: giving emerging leaders real responsibility, real mentorship, and real results."
            align="center"
            className="mx-auto"
          />
          <Reveal className="mt-12 grid gap-6 sm:grid-cols-2">
            <Card className="border-t-[3px]" style={{ borderTopColor: research.colorVar as string }}>
              <CardContent className="flex h-full flex-col gap-4 pt-6">
                <div className="flex size-11 items-center justify-center rounded-sm bg-primary/10 text-primary">
                  <FlaskConical className="size-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold">Research Projects</h3>
                  <p className="mt-2 text-pretty text-sm text-muted-foreground">
                    Mentored placements in youth development, education policy,
                    community health, and civic leadership — with clear pathways to
                    apply or request collaboration.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-fit"
                  render={<Link href="/research-projects" />}
                >
                  Browse projects <ArrowRight className="size-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="border-t-[3px]" style={{ borderTopColor: mobility.colorVar as string }}>
              <CardContent className="flex h-full flex-col gap-4 pt-6">
                <div className="flex size-11 items-center justify-center rounded-sm bg-primary/10 text-primary">
                  <Route className="size-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold">Mobility Programs</h3>
                  <p className="mt-2 text-pretty text-sm text-muted-foreground">
                    Local, regional, and international tracks that pair research
                    placements with mentorship, cultural immersion, and leadership
                    coaching.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-fit"
                  render={<Link href="/mobility-programs" />}
                >
                  Explore tracks <ArrowRight className="size-4" />
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <Card className="overflow-hidden">
            <CardContent className="flex flex-col items-center gap-4 py-12 text-center">
              <div className="flex size-12 items-center justify-center rounded-sm bg-primary/10 text-primary">
                <CalendarDays className="size-6" />
              </div>
              <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                Upcoming Events
              </h2>
              <p className="max-w-xl text-pretty text-muted-foreground">
                Workshops, leadership labs, and info sessions are announced through
                our newsletter and social channels. Get connected to hear about the
                next opportunity to get involved.
              </p>
              <Button render={<Link href="/collaborate" />}>
                Get connected <ArrowRight className="size-4" />
              </Button>
            </CardContent>
          </Card>
        </Reveal>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to build tomorrow&apos;s leaders today?
          </h2>
          <p className="max-w-xl text-pretty text-primary-foreground/80">
            Whether you&apos;re a student, educator, or partner organization —
            there&apos;s a place for you at Loco Motion Foundation.
          </p>
          <Button size="lg" variant="secondary" render={<Link href="/collaborate" />}>
            Get involved <ArrowRight className="size-4" />
          </Button>
        </Reveal>
      </section>
    </>
  );
}
