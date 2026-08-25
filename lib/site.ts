const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const vercelSiteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const rawSiteUrl = configuredSiteUrl ?? (vercelSiteUrl ? `https://${vercelSiteUrl}` : "http://localhost:3000");

export const siteUrl = new URL(/^https?:\/\//i.test(rawSiteUrl) ? rawSiteUrl : `https://${rawSiteUrl}`);
