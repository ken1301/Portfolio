import { ImageResponse } from "next/og";

export const alt = "Tuấn Kiệt Đỗ Lê — Full-stack Developer Intern";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "64px 72px",
        color: "#f4f1f1",
        background: "linear-gradient(135deg, #0b0b0d 0%, #171016 55%, #0b0b0d 100%)",
        fontFamily: "Arial",
      }}>
        <div style={{ display: "flex", color: "#ff2b61", fontSize: 24, letterSpacing: 4 }}>
          TUAN.KIET / PORTFOLIO
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 700, letterSpacing: -3 }}>
            Building scalable systems.
          </div>
          <div style={{ display: "flex", color: "#b1a8ad", fontSize: 28 }}>
            Full-stack Developer Intern | Web, Mobile &amp; AI Systems
          </div>
        </div>
        <div style={{ display: "flex", color: "#ff2b61", fontSize: 20, letterSpacing: 3 }}>
          NEXT.JS / REACT / TYPESCRIPT / PRODUCT ENGINEERING
        </div>
      </div>
    ),
    { ...size },
  );
}
