import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

const routes = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/research-projects", priority: 0.8 },
  { path: "/mobility-programs", priority: 0.8 },
  { path: "/collaborate", priority: 0.7 },
  { path: "/sponsors", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
