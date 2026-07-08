import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { TeamMemberCard } from "@/components/team-member-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";
import { getLine } from "@/lib/lines";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Advancing youth leadership through hands-on research, mobility programs, and policy insight rooted in Kent, Washington communities.",
};

const team = [
  {
    name: "Aarav Sharma",
    role: "CEO",
    description:
      "Directs youth research placements, building real-world skills and confidence.",
  },
  {
    name: "Mateo García",
    role: "CTO",
    description:
      "Guides mobility programs connecting local youth with regional, national, and global learning opportunities.",
  },
  {
    name: "Zuri Ndlovu",
    role: "Engineer",
    description:
      "Leads policy analysis, translating data into insights for schools, cities, and partners.",
  },
  {
    name: "Leila Haddad",
    role: "Designer",
    description:
      "Mentors student researchers, modeling inclusive leadership and ethical inquiry practices.",
  },
];

export default function AboutPage() {
  const depot = getLine("depot");

  return (
    <>
      <PageHero
        line={depot}
        title="Advancing youth leadership through hands-on research"
        description="Research, mobility programs, and policy insight rooted in Kent, Washington communities."
        photo={{
          src: "/images/about-research-archive.png",
          alt: "A research archive room with labeled boxes, binders, and a route map on the table",
          figure: "02",
          caption: "Program archive, HQ",
        }}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Card className="border-l-4 border-l-primary bg-card">
          <CardContent className="pt-6">
            <p className="text-pretty text-center font-heading text-xl leading-relaxed text-foreground sm:text-2xl">
              &ldquo;Advancing youth leadership through hands-on research,
              mobility programs, and policy insight rooted in Kent, Washington
              communities.&rdquo;
            </p>
          </CardContent>
        </Card>

        <div className="mt-12 space-y-4 text-pretty text-center text-muted-foreground">
          <p>
            We connect young people with structured research placements and
            mobility experiences that grow leadership, curiosity, and civic
            responsibility. By partnering with educators and sponsors, we
            transform local questions into actionable data and insights — and
            turn curious students into confident, research-driven leaders.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="Meet the team"
            description="A small, hands-on team dedicated to mentoring the next generation of researchers and leaders."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Follow along and get involved
          </h2>
          <p className="max-w-lg text-pretty text-muted-foreground">
            Whether you want program details, a partnership, or a sponsorship,
            we&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" render={<Link href="/collaborate" />}>
              Contact us <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Instagram"
              className="text-xs font-semibold"
              render={<a href={siteConfig.social.instagram} />}
            >
              IG
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Facebook"
              className="text-xs font-semibold"
              render={<a href={siteConfig.social.facebook} />}
            >
              FB
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
