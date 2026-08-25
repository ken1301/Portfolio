const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const rawSiteUrl = configuredSiteUrl ?? "https://portfolio-ken1301s-projects.vercel.app";

export const siteUrl = new URL(/^https?:\/\//i.test(rawSiteUrl) ? rawSiteUrl : `https://${rawSiteUrl}`);
