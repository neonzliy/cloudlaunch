import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "base261 - Digital Innovation Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1a1a1a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div style={{ color: "white", fontSize: 72, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 24 }}>
          base261
        </div>
        <div style={{ color: "#999", fontSize: 28, maxWidth: 600 }}>
          A digital innovation studio that incubates ideas, secures cloud infrastructure, and prepares startups for growth.
        </div>
      </div>
    ),
    { ...size }
  );
}
