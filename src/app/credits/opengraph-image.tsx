import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Cloud Credits - base261";
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
        <div style={{ color: "#999", fontSize: 20, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>
          Cloud Credits
        </div>
        <div style={{ color: "white", fontSize: 64, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 24, maxWidth: 800 }}>
          Starting $10,000 in free cloud credits
        </div>
        <div style={{ color: "#999", fontSize: 24 }}>
          base261
        </div>
      </div>
    ),
    { ...size }
  );
}
