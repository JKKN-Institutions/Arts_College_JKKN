import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "JKKN College of Arts and Science — Autonomous Institution near Erode, Tamil Nadu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0b6d41 0%, #074a2e 60%, #002309 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(255, 222, 89, 0.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.05)",
          }}
        />

        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "rgba(255, 255, 255, 0.15)",
            borderRadius: "40px",
            padding: "10px 24px",
            marginBottom: "32px",
            border: "1px solid rgba(255, 255, 255, 0.25)",
          }}
        >
          <span style={{ color: "#ffde59", fontSize: "18px", fontWeight: 700 }}>
            NAAC Accredited
          </span>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "18px" }}>|</span>
          <span style={{ color: "#ffde59", fontSize: "18px", fontWeight: 700 }}>
            UGC Autonomous
          </span>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "18px" }}>|</span>
          <span style={{ color: "#ffde59", fontSize: "18px", fontWeight: 700 }}>
            Est. 1952
          </span>
        </div>

        {/* College name */}
        <h1
          style={{
            color: "white",
            fontSize: "56px",
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.15,
            margin: "0 60px 16px",
            letterSpacing: "-1px",
          }}
        >
          JKKN College of Arts and Science
        </h1>

        {/* Tagline */}
        <p
          style={{
            color: "rgba(255, 255, 255, 0.85)",
            fontSize: "24px",
            fontWeight: 400,
            textAlign: "center",
            margin: "0 80px 32px",
            lineHeight: 1.4,
          }}
        >
          27+ Programmes in Arts, Science & Commerce | Highest Package ₹18 LPA
        </p>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ color: "#ffde59", fontSize: "36px", fontWeight: 800 }}>
              95%
            </span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", fontWeight: 500 }}>
              Placement Rate
            </span>
          </div>
          <div
            style={{
              width: "1px",
              height: "48px",
              background: "rgba(255,255,255,0.2)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ color: "#ffde59", fontSize: "36px", fontWeight: 800 }}>
              50+
            </span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", fontWeight: 500 }}>
              Recruiters
            </span>
          </div>
          <div
            style={{
              width: "1px",
              height: "48px",
              background: "rgba(255,255,255,0.2)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ color: "#ffde59", fontSize: "36px", fontWeight: 800 }}>
              150+
            </span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", fontWeight: 500 }}>
              Faculty
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "48px",
            background: "#ffde59",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <span style={{ color: "#002309", fontSize: "16px", fontWeight: 700 }}>
            cas.jkkn.ac.in
          </span>
          <span style={{ color: "#0b6d41", fontSize: "14px" }}>|</span>
          <span style={{ color: "#002309", fontSize: "16px", fontWeight: 600 }}>
            Near Erode, Tamil Nadu
          </span>
          <span style={{ color: "#0b6d41", fontSize: "14px" }}>|</span>
          <span style={{ color: "#002309", fontSize: "16px", fontWeight: 600 }}>
            +91 93458 55001
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
