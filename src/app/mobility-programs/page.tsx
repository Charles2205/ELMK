import type { Metadata } from "next";
import { MapPin, Globe2, Check } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getLine } from "@/lib/lines";

export const metadata: Metadata = {
  title: "Mobility Programs",
  description:
    "Research-focused exchange opportunities connecting young people with research sites, mentors, and communities beyond Kent.",
};

const tracks = [
  {
    icon: MapPin,
    badge: "Local Track",
    title: "Kent-area placements",
    description:
      "Kent-area youth participate in part-time research positions paired with weekly leadership seminars and mentoring support.",
    features: [
      "Part-time research placements",
      "Weekly leadership seminars",
      "Ongoing mentoring support",
    ],
  },
  {
    icon: Globe2,
    badge: "Regional & International Track",
    title: "Beyond Kent",
    description:
      "Short-term research residencies, cross-cultural workshops, and virtual collaboration with partner organizations.",
    features: [
      "Short-term research residencies",
      "Cross-cultural workshops",
      "Virtual partner collaboration",
    ],
  },
];

export default function MobilityProgramsPage() {
  const mobility = getLine("mobility");

  return (
    <>
      <PageHero
        line={mobility}
        title="Research experiences that go beyond Kent"
        description="We connect young people with research sites, mentors, and communities beyond Kent — combining structured placements, cultural immersion, and leadership coaching."
        photo={{
          src: "/images/mobility-dashboard-transit.png",
          alt: "A laptop showing a transit route dashboard, with a real bus stop visible through the window behind it",
          figure: "04",
          caption: "Route dashboard, Line M1",
        }}
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Program tracks"
          title="Choose your track"
          description="Two structured pathways, both built around mentorship and real research responsibility."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {tracks.map(({ icon: Icon, badge, title, description, features }) => (
            <Card
              key={title}
              className="h-full border-t-[3px]"
              style={{ borderTopColor: mobility.colorVar as string }}
            >
              <CardContent className="flex h-full flex-col gap-4 pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-sm bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <Badge variant="secondary">{badge}</Badge>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-pretty text-sm text-muted-foreground">
                    {description}
                  </p>
                </div>
                <ul className="mt-auto space-y-2 border-t border-border pt-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Apply or inquire"
            title="Ready to go further?"
            description="Submit your name, email, and message to apply for a youth placement or request partnership information for schools, nonprofits, and sponsors."
            align="center"
            className="mx-auto"
          />
          <div className="mt-10">
            <ContactForm
              context="mobility-programs"
              submitLabel="Submit inquiry"
              messagePlaceholder="Tell us which track interests you and a bit about your background..."
            />
          </div>
        </div>
      </section>
    </>
  );
}
