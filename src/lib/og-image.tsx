import fs from "node:fs";
import path from "node:path";

import { siteConfig } from "@/lib/site";

export const ogImageSize = { width: 1200, height: 630 };

const iconDataUri = `data:image/png;base64,${fs
  .readFileSync(path.join(process.cwd(), "public/images/loco-icon.png"))
  .toString("base64")}`;

export function OgImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#1f5d53",
        color: "#eaf3f0",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 44 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={iconDataUri} width={104} height={72} alt="" />
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 3, textTransform: "uppercase", opacity: 0.75 }}>
          Berryville, Virginia
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 66, fontWeight: 700, lineHeight: 1.15, maxWidth: 980 }}>
        {siteConfig.name}
      </div>
      <div style={{ display: "flex", fontSize: 30, marginTop: 28, maxWidth: 920, opacity: 0.9 }}>
        {siteConfig.tagline}
      </div>
    </div>
  );
}
