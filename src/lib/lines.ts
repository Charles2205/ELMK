export type LineId = "depot" | "research" | "mobility" | "interchange" | "partner";

export type LineDef = {
  id: LineId;
  /** Route code shown in mono, like a transit line number. */
  code: string;
  name: string;
  href: string;
  /** CSS color token(s) — "interchange" carries all three since every line meets there. */
  colorVar: string | [string, string, string];
};

export const lines: LineDef[] = [
  { id: "depot", code: "HQ", name: "About Us", href: "/about", colorVar: "var(--depot)" },
  {
    id: "research",
    code: "R1",
    name: "Research Projects",
    href: "/research-projects",
    colorVar: "var(--line-research)",
  },
  {
    id: "mobility",
    code: "M1",
    name: "Mobility Programs",
    href: "/mobility-programs",
    colorVar: "var(--line-mobility)",
  },
  {
    id: "interchange",
    code: "IX",
    name: "Get Involved",
    href: "/collaborate",
    colorVar: ["var(--line-research)", "var(--line-mobility)", "var(--line-partner)"],
  },
  {
    id: "partner",
    code: "P1",
    name: "Sponsors",
    href: "/sponsors",
    colorVar: "var(--line-partner)",
  },
];

export const getLine = (id: LineId) => lines.find((line) => line.id === id)!;
