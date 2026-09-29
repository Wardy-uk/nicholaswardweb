import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://www.nickward.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/contact"].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "" ? 1 : .7 }));
}
