import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nicholas Ward | Upgrade",
  description: "Modern upgrade of nicholaswardweb built with Next.js",
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
