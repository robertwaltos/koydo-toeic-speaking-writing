import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://toeic-speaking-writing.koydo.app/sitemap.xml",
    host: "https://toeic-speaking-writing.koydo.app",
  };
}
