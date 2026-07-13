import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { TestimonialCard } from "@/components/testimonial-card";
import { PartnersLogos } from "@/components/partners-logos";
import { Reveal } from "@/components/reveal";
import { getLine } from "@/lib/lines";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Sponsors",
  description:
    "Fuel research placements and mobility programs that turn curious young people into confident community leaders.",
  path: "/sponsors",
});

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
    name: "Nathan P.",
    role: "Impact Partner",
    rating: 5,
  },
  {
    quote:
      "The mentorship layer around the research placements is what sets this apart from a typical internship program.",
    name: "Elena V.",
    role: "Visionary Circle Sponsor",
    rating: 4,
  },
  {
    quote:
      "Straightforward reporting, real student stories, and a team that's genuinely easy to work with.",
    name: "Priya S.",
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
          src: "/images/sponsors.jpg",
          alt: "A group of young participants in conversation with a program staff member during an outdoor event",
          figure: "06",
          caption: "Sponsor meet-and-greet, Line P1",
        }}
      />

      <section className="border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our partners"
            title="Partners & sponsors"
            description="Loco Motion Foundation's mobility tracks and programs are supported by these partner organizations."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12">
            <PartnersLogos />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Sponsor & student voices"
            title="What our community says"
            align="center"
            className="mx-auto"
          />
          <Reveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}
          </Reveal>
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
