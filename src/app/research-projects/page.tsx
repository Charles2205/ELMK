import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  HeartPulse,
  Landmark,
  Users2,
  FileBarChart,
  Microscope,
  FileText,
} from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getLine } from "@/lib/lines";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Research Projects",
  description:
    "Browse current and past youth-led studies, with clear pathways to apply or request collaboration.",
  path: "/research-projects",
});

const focusAreas = [
  { icon: Users2, label: "Youth development" },
  { icon: Landmark, label: "Education policy" },
  { icon: HeartPulse, label: "Community health" },
  { icon: GraduationCap, label: "Civic leadership" },
];

const placementLengths = [
  {
    title: "Semester-long",
    description:
      "A full academic term of mentored research, from question design through final presentation.",
  },
  {
    title: "Summer placement",
    description:
      "An intensive summer track for students who want deep, focused research experience.",
  },
  {
    title: "Micro-project",
    description:
      "A short-term assignment for students contributing to a specific data-gathering or analysis task.",
  },
];

const resources = [
  {
    icon: FileBarChart,
    title: "Impact summaries",
    description: "Concise write-ups of outcomes and takeaways from each project.",
  },
  {
    icon: Microscope,
    title: "Methods overviews",
    description: "How each study was designed, run, and evaluated.",
  },
  {
    icon: FileText,
    title: "Policy notes & data snapshots",
    description: "Findings formatted for classroom, community, or funding use.",
  },
];

export default function ResearchProjectsPage() {
  const research = getLine("research");

  return (
    <>
      <PageHero
        line={research}
        title="Browse current and past youth-led studies"
        description="Clear pathways to apply or request collaboration — every project is mentored, structured, and built to grow real research skills."
        photo={{
          src: "/images/research-whiteboard-methods.png",
          alt: "A glass whiteboard covered in hand-drawn research diagrams, arrows, and bar charts",
          figure: "03",
          caption: "Methods board, Line R1",
        }}
      >
        <div className="flex flex-wrap items-center gap-2">
          {focusAreas.map(({ icon: Icon, label }) => (
            <Badge key={label} variant="outline" className="h-auto gap-1.5 px-2.5 py-1.5">
              <Icon className="size-3.5" />
              {label}
            </Badge>
          ))}
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Placements"
          title="Mentored research placements"
          description="Contribute to data gathering and presentation activities alongside colleagues and academic partners — choose the format that fits your schedule."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {placementLengths.map((item) => (
            <Card key={item.title} className="border-t-[3px]" style={{ borderTopColor: research.colorVar as string }}>
              <CardContent className="pt-6">
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-pretty text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Project impact & resources"
            title="Review outcomes, then go deeper"
            description="Review concise impact summaries, methods overviews, and key findings for each project — then request the full brief for classroom, community, or funding use."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {resources.map(({ icon: Icon, title, description }) => (
              <Card key={title}>
                <CardContent className="pt-6">
                  <div className="mb-3 flex size-10 items-center justify-center rounded-sm bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-pretty text-sm text-muted-foreground">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to apply or collaborate?
          </h2>
          <p className="max-w-lg text-pretty text-muted-foreground">
            Tell us about your background and the kind of research you want to
            do — we&apos;ll follow up with next steps.
          </p>
          <Button size="lg" render={<Link href="/collaborate" />}>
            Apply or request a brief <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>
    </>
  );
}
