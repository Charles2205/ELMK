import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

/**
 * Builds per-page metadata with consistent canonical/OpenGraph/Twitter fields.
 * Omit `title` on a page that should fall back to the root layout's default title.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const resolvedTitle = title ?? siteConfig.name;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: resolvedTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
    },
  };
}
