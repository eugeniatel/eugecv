/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { RESUME_DATA } from "../data/resume-data";

export const runtime = "edge";

export const alt = "Minimalist Resume";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: '"Inter"',
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <img
            src="https://eugeniacv.vercel.app/images/preview.png" // ✅ Updated Image URL
            alt="Eugenia Tellechea Resume Preview"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
