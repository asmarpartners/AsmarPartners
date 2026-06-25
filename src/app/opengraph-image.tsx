import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = "Asmar Partners safe AI adoption for professional services businesses";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f7f8f9",
          color: "#11181f",
          fontFamily: "Arial, Helvetica, sans-serif",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            borderLeft: "12px solid #075985",
            paddingLeft: 48,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#075985" }}>
              {siteConfig.businessName}
            </div>
            <div style={{ display: "flex", maxWidth: 900, marginTop: 42, fontSize: 72, lineHeight: 1.03, fontWeight: 700 }}>
              Safe AI adoption for professional services businesses
            </div>
          </div>
          <div style={{ display: "flex", maxWidth: 920, fontSize: 30, lineHeight: 1.35, color: "#5e6874" }}>
            Practical workflows, governance guardrails, client-owned tools, human review, and measurable time savings.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
