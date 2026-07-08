import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { TeamMemberCard } from "@/components/team-member-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/site";
import { getLine } from "@/lib/lines";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Loco Motion Foundation is a youth development research and public policy institute in Berryville, Virginia, founded in 2015, advancing youth leadership through hands-on research, mobility programs, and policy insight.",
  path: "/about",
});

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

const faqs = [
  {
    question: "What is Loco Motion Foundation?",
    answer:
      "Loco Motion Foundation is a youth development research and public policy institute based in Berryville, Virginia, founded in 2015. We place young people in structured research positions and mobility programs that build leadership skills, professional confidence, and community impact.",
  },
  {
    question: "Where is Loco Motion Foundation located?",
    answer:
      "Loco Motion Foundation is based in Berryville, Virginia, with research placements and mobility programs that extend across the surrounding region and internationally.",
  },
  {
    question: "When was Loco Motion Foundation founded?",
    answer: "Loco Motion Foundation was founded in 2015.",
  },
  {
    question: "Who can participate in Loco Motion Foundation's programs?",
    answer:
      "Youth researchers, educators and schools, and community partners or sponsors can all get involved — through research placements, mobility programs, or partnership and sponsorship opportunities.",
  },
  {
    question:
      "What's the difference between Research Projects and Mobility Programs?",
    answer:
      "Research Projects are mentored, placement-based studies in youth development, education policy, community health, and civic leadership. Mobility Programs pair those placements with local, regional, and international mobility experiences.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function AboutPage() {
  const depot = getLine("depot");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageHero
        line={depot}
        title="Advancing youth leadership through hands-on research"
        description="Research, mobility programs, and policy insight rooted in Berryville, Virginia communities."
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
              mobility programs, and policy insight rooted in Berryville, Virginia
              communities.&rdquo;
            </p>
          </CardContent>
        </Card>

        <div className="mt-12 space-y-4 text-pretty text-center text-muted-foreground">
          <p>
            Loco Motion Foundation is a youth development research and public
            policy institute based in Berryville, Virginia, founded in 2015.
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

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          align="center"
          className="mx-auto"
        />
        <Accordion className="mt-10">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mx-auto max-w-6xl border-t border-border px-4 py-20 sm:px-6 lg:px-8">
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
