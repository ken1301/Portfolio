import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tuấn Kiệt Đỗ Lê — Full-stack Developer Intern",
    short_name: "Tuấn Kiệt",
    description: "Selected product systems, interfaces and engineering work by Tuấn Kiệt Đỗ Lê.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0b0d",
    theme_color: "#0b0b0d",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
