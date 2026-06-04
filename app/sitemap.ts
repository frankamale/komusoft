import type { MetadataRoute } from "next";

const siteUrl = "https://www.komusoft.com";

const staticPaths = [
  "",
  "/about",
  "/services",
  "/portfolio",
  "/contact",
  "/products",
  "/products/pricing",
  "/products/business-manager",
  "/products/business-assistant",
  "/products/hybrid-solution",
];

const businessManagerDocs = [
  "",
  "/installation",
  "/requirements",
  "/quickstart",
  "/creditors",
  "/goods-receipt",
  "/stock-adjustment",
  "/pos-operation",
  "/cashier-returns",
  "/inventory",
  "/invoices",
  "/credit-notes",
  "/journal-entries",
  "/staff",
  "/payroll",
  "/configuration",
  "/network",
  "/reporting",
  "/financial-reports",
  "/admin-reports",
  "/pos-hardware",
  "/backup",
  "/troubleshooting",
].map((p) => `/products/docs/business-manager${p}`);

const businessAssistantDocs = [
  "",
  "/setup",
  "/quickstart",
  "/requirements",
  "/modules",
  "/analytics",
  "/collaboration",
  "/api",
  "/payments",
  "/security",
  "/privacy",
  "/troubleshooting",
].map((p) => `/products/docs/business-assistant${p}`);

const hybridDocs = [
  "",
  "/troubleshooting",
].map((p) => `/products/docs/hybrid-solution${p}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const all = [...staticPaths, ...businessManagerDocs, ...businessAssistantDocs, ...hybridDocs];

  return all.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/products") && !path.includes("/docs") ? 0.8 : 0.6,
  }));
}
