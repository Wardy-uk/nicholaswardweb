import type { Metadata } from "next";
import "./globals.css";
import "./header.css";
import "./site-colour.css";
import "./integration.css";
import "./showcase.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nickward.co.uk"),
  title: {
    default: "Nicholas Ward",
    template: "%s | Nicholas Ward",
  },
  description: "Nicholas Ward — technical, operational and digital delivery leadership.",
  openGraph: { title: "Nicholas Ward — Technical & operational leadership", description: "Clear thinking and dependable delivery across technical, operational and digital work.", url: "/", siteName: "Nicholas Ward", locale: "en_GB", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
