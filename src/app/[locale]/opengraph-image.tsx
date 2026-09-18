import { ImageResponse } from "next/og";
import { getContent } from "@/content";
import { profile } from "@/content/profile";
import { defaultLocale, isLocale } from "@/i18n/config";

export const alt = `${profile.name} — Backend Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { hero } = getContent(isLocale(locale) ? locale : defaultLocale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "radial-gradient(60% 70% at 50% 0%, #1b2a4a 0%, #0b0d11 70%)",
          color: "#f3f4f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#8fb2ff", letterSpacing: 1 }}>/ {profile.shortName}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>{hero.title}</div>
          <div style={{ marginTop: 20, fontSize: 34, color: "#8fb2ff" }}>{hero.stackLine}</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#a7adbb" }}>
          {profile.name} · github.com/{profile.githubUser}
        </div>
      </div>
    ),
    size,
  );
}
