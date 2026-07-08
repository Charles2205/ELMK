import type { Metadata } from "next";
import { Check } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { TestimonialCard } from "@/components/testimonial-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getLine } from "@/lib/lines";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Fuel research placements and mobility programs that turn curious young people into confident community leaders.",
};

const tiers = [
  {
    name: "Community Partner",
    price: "$1,000+",
    highlighted: false,
    benefits: ["Name listing", "Logo display", "Event invitations", "Impact updates"],
  },
  {
    name: "Impact Partner",
    price: "$5,000+",
    highlighted: true,
    benefits: [
      "Program briefings",
      "Student stories",
      "Research previews",
      "Site recognition",
    ],
  },
  {
    name: "Visionary Circle",
    price: "$10,000+",
    highlighted: false,
    benefits: [
      "Quarterly reports",
      "Local visibility",
      "Custom activations",
      "Annual reception",
    ],
  },
];

const testimonials = [
  {
    quote:
      "Sponsoring this program is one of the clearest, most direct ways we've found to invest in local policy research talent.",
    name: "Hope D.",
    role: "Community Partner",
    rating: 5,
  },
  {
    quote:
      "Our stipend sponsorship removed the financial barrier that would have kept several students from joining — the impact updates make that visible every quarter.",
    name: "Hope D.",
    role: "Impact Partner",
    rating: 5,
  },
  {
    quote:
      "The mentorship layer around the research placements is what sets this apart from a typical internship program.",
    name: "Hope D.",
    role: "Visionary Circle Sponsor",
    rating: 4,
  },
  {
    quote:
      "Straightforward reporting, real student stories, and a team that's genuinely easy to work with.",
    name: "Hope D.",
    role: "Community Partner",
    rating: 5,
  },
];

export default function SponsorsPage() {
  const partner = getLine("partner");

  return (
    <>
      <PageHero
        line={partner}
        title="Fuel research placements and mobility programs"
        description="Turn curious young people into confident community leaders. Sponsorships expand access to paid research placements and safe mobility — funding stipends, mentorship, travel, and data tools for developing youth policy solutions."
        photo={{
          src: "/images/sponsors-boardroom-daylight.png",
          alt: "A sunlit boardroom table with two laptops showing program dashboards and printed route maps",
          figure: "06",
          caption: "Funding review, Line P1",
        }}
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sponsorship tiers"
          title="Choose your level of impact"
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={cn("relative h-full border-t-[3px]", tier.highlighted && "ring-2 ring-primary")}
              style={{ borderTopColor: partner.colorVar as string }}
            >
              <div className="flex h-6 items-center justify-center">
                {tier.highlighted && <Badge>Most impact</Badge>}
              </div>
              <CardHeader className="pt-0 text-center">
                <h3 className="font-heading text-lg font-semibold">{tier.name}</h3>
                <p className="font-heading text-2xl font-bold text-primary">{tier.price}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Sponsor & student voices"
            title="What our community says"
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Become a sponsor"
          title="Let's talk about your sponsorship"
          description="Tell us about your organization and how you'd like to support emerging leaders."
          align="center"
          className="mx-auto"
        />
        <div className="mt-10">
          <ContactForm
            context="sponsors"
            submitLabel="Become a sponsor"
            messagePlaceholder="Tell us about your organization and which tier interests you..."
          />
        </div>
      </section>
    </>
  );
}
