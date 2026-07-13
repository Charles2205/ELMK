import type { Metadata } from "next";
import { Handshake, GraduationCap, Building2 } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { TestimonialCard } from "@/components/testimonial-card";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { getLine } from "@/lib/lines";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Get Involved / Collaborate",
  description:
    "Youth, educators, and partners can connect, collaborate, and support emerging leaders in Berryville, Virginia.",
  path: "/collaborate",
});

const audiences = [
  {
    icon: GraduationCap,
    title: "Youth",
    description: "Express interest in a research placement or mobility program.",
  },
  {
    icon: Building2,
    title: "Educators & Schools",
    description: "Co-lead studies, host placements, or bring a program to your students.",
  },
  {
    icon: Handshake,
    title: "Partners & Sponsors",
    description: "Support evidence-based projects that grow young leaders.",
  },
];

const testimonials = [
  {
    quote:
      "The research placement gave me real responsibility from day one — the mentorship turned a class project into something I'm genuinely proud of.",
    name: "Hope D.",
    role: "Research Placement Participant",
  },
  {
    quote:
      "Partnering with this program brought our students structured, credible research experience we couldn't have built on our own.",
    name: "Marcus T.",
    role: "School Partner",
  },
  {
    quote:
      "The mobility program pushed me outside Berryville and outside my comfort zone — I came back with skills and confidence I still use.",
    name: "Ava R.",
    role: "Mobility Program Alum",
  },
  {
    quote:
      "Collaborating on a project with their student researchers was seamless, professional, and genuinely useful to our work.",
    name: "Daniel K.",
    role: "Project Collaborator",
  },
];

export default function CollaboratePage() {
  const interchange = getLine("interchange");

  return (
    <>
      <PageHero
        line={interchange}
        title="Connect, collaborate, and support emerging leaders"
        description="Youth, educators, and partners all have a role to play in growing the next generation of research-driven leaders in Berryville — this is the interchange where every line meets."
        photo={{
          src: "/images/get-connected.jpg",
          alt: "Event flyer for the Loco Motion Foundation's Eco-Social Work Practices research visit to Vienna, Austria",
          figure: "05",
          caption: "Upcoming research visit, Vienna",
        }}
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ways to get involved"
          title="Find your path"
          align="center"
          className="mx-auto"
        />
        <Reveal className="mt-10 grid gap-6 sm:grid-cols-3">
          {audiences.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardContent className="flex flex-col items-center gap-3 pt-6 text-center">
                <div className="flex size-11 items-center justify-center rounded-sm bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-heading text-lg font-semibold">{title}</h3>
                <p className="text-pretty text-sm text-muted-foreground">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </Reveal>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="What people are saying"
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
          eyebrow="Contact"
          title="Request a partnership, volunteer, or express interest"
          description="Fill out the form below and we'll be in touch soon."
          align="center"
          className="mx-auto"
        />
        <div className="mt-10">
          <ContactForm context="collaborate" submitLabel="Send" />
        </div>
      </section>
    </>
  );
}
