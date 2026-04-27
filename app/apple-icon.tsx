import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "4px",
        }}
      >
        <span
          style={{
            color: "#FAF9F6",
            fontSize: 80,
            fontWeight: 700,
            letterSpacing: "-0.5px",
          }}
        >
          SB
        </span>
      </div>
    ),
    { ...size }
  );
}
