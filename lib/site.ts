const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const vercelSiteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = new URL(
  configuredSiteUrl ?? (vercelSiteUrl ? `https://${vercelSiteUrl}` : "http://localhost:3000"),
);
