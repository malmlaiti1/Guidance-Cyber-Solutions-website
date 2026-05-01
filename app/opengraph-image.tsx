import { ImageResponse } from "next/og";

import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const NAVY = "#0A1F44";
  const ACCENT = "#2C6BED";
  const SOFT = "rgba(255,255,255,0.7)";
  const grid =
    "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px)," +
    "linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: NAVY,
          backgroundImage: grid,
          backgroundSize: "80px 80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width={64} height={64} viewBox="0 0 40 40" fill="none">
            <path
              d="M6 22 L20 6 L34 22 L34 30 L20 18 L6 30 Z"
              stroke="#FFFFFF"
              strokeWidth={2.4}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path
              d="M20 14 L26 26 L20 24"
              stroke="#FFFFFF"
              strokeWidth={2.4}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}
          >
            <span>Guidance</span>
            <span style={{ color: "#FFFFFF" }}>&nbsp;Cyber</span>
            <span style={{ color: SOFT, fontSize: 22, fontWeight: 500, marginLeft: 10, alignSelf: "center" }}>
              Solutions
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: ACCENT,
              textTransform: "uppercase",
            }}
          >
            AI security analyst for healthcare
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "#FFFFFF",
              maxWidth: 980,
            }}
          >
            Continuous, AI-powered HIPAA compliance for multi-location practices.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: SOFT,
            fontSize: 18,
          }}
        >
          <span>{SITE.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
          <span>HIPAA-aligned · BAA available</span>
        </div>
      </div>
    ),
    size,
  );
}
