import {
  siAxios,
  siDocker,
  siExpo,
  siFastapi,
  siHibernate,
  siJsonwebtokens,
  siMongodb,
  siNestjs,
  siNextdotjs,
  siOpenrouter,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siReactrouter,
  siRedis,
  siSocketdotio,
  siSpringboot,
  siSpringsecurity,
  siSqlite,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVite,
  type SimpleIcon,
} from "simple-icons";
import { Code2 } from "lucide-react";

const iconByTag: Record<string, SimpleIcon> = {
  Axios: siAxios,
  Docker: siDocker,
  Expo: siExpo,
  FastAPI: siFastapi,
  "JPA / Hibernate": siHibernate,
  JWT: siJsonwebtokens,
  MongoDB: siMongodb,
  NestJS: siNestjs,
  "Next.js": siNextdotjs,
  OpenRouter: siOpenrouter,
  PostgreSQL: siPostgresql,
  "PostgreSQL / Supabase": siPostgresql,
  Prisma: siPrisma,
  "Python 3.11+": siPython,
  React: siReact,
  "React Native": siReact,
  "React Router": siReactrouter,
  Redis: siRedis,
  "Socket.IO": siSocketdotio,
  "Spring Boot": siSpringboot,
  "Spring Security": siSpringsecurity,
  SQLite: siSqlite,
  Supabase: siSupabase,
  "Tailwind CSS": siTailwindcss,
  TypeScript: siTypescript,
  Vite: siVite,
};

export function TechBadge({ tag }: { tag: string }) {
  const icon = iconByTag[tag];

  return (
    <span className="tag tech-badge">
      <span className="tech-icon" aria-hidden="true" style={icon ? { color: `#${icon.hex}` } : undefined}>
        {icon ? (
          <svg viewBox="0 0 24 24" role="presentation">
            <path d={icon.path} />
          </svg>
        ) : (
          <Code2 size={12} strokeWidth={1.8} />
        )}
      </span>
      <span>{tag}</span>
    </span>
  );
}
