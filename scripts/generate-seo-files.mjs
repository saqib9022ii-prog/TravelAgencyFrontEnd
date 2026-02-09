import fs from "node:fs/promises";
import path from "node:path";

const normalizeSiteUrl = (value) => {
  if (!value) return "";
  try {
    return new URL(value).origin;
  } catch {
    try {
      return new URL(`https://${value}`).origin;
    } catch {
      return "";
    }
  }
};

const rawSiteUrl =
  process.env.SITE_URL ||
  process.env.VITE_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");

const siteUrl = normalizeSiteUrl(rawSiteUrl) || "https://example.com";

const publicDir = path.join(process.cwd(), "public");
await fs.mkdir(publicDir, { recursive: true });

const routes = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/about", changefreq: "monthly", priority: 0.7 },
  { path: "/visa", changefreq: "weekly", priority: 0.8 },
  { path: "/contact", changefreq: "monthly", priority: 0.6 },
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${new URL(route.path, siteUrl).toString()}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap.xml", siteUrl).toString()}
`;

await fs.writeFile(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf8");
await fs.writeFile(path.join(publicDir, "robots.txt"), robotsTxt, "utf8");

if (siteUrl === "https://example.com") {
  console.warn(
    "[seo] SITE_URL/VITE_SITE_URL not set; generated robots.txt and sitemap.xml for https://example.com"
  );
} else {
  console.log(`[seo] Generated robots.txt and sitemap.xml for ${siteUrl}`);
}
