import {
  siAxios,
  siCplusplus,
  siCss,
  siDocker,
  siExpo,
  siFastapi,
  siFramer,
  siHibernate,
  siJavascript,
  siJsonwebtokens,
  siLucide,
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
  siSimpleicons,
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
  "C++": siCplusplus,
  "Custom CSS": siCss,
  Docker: siDocker,
  Expo: siExpo,
  FastAPI: siFastapi,
  "Framer Motion": siFramer,
  "JPA / Hibernate": siHibernate,
  JavaScript: siJavascript,
  JWT: siJsonwebtokens,
  "Lucide React": siLucide,
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
  "Simple Icons": siSimpleicons,
  "Socket.IO": siSocketdotio,
  "Spring Boot": siSpringboot,
  "Spring Security": siSpringsecurity,
  SQLite: siSqlite,
  Supabase: siSupabase,
  "Tailwind CSS": siTailwindcss,
  TypeScript: siTypescript,
  Vite: siVite,
};

export function TechIcon({ tag, size = 12 }: { tag: string; size?: number }) {
  const icon = iconByTag[tag];

  if (tag === "Java") {
    return <span className="tech-icon tech-icon-java" aria-hidden="true" style={{ width: size, height: size }} />;
  }

  return (
    <span className="tech-icon" aria-hidden="true" style={icon ? { color: `#${icon.hex}` } : undefined}>
      {icon ? (
        <svg viewBox="0 0 24 24" role="presentation" style={{ width: size, height: size }}>
          <path d={icon.path} />
        </svg>
      ) : (
        <Code2 size={size} strokeWidth={1.8} />
      )}
    </span>
  );
}

export function TechBadge({ tag, active = false, onClick }: { tag: string; active?: boolean; onClick?: () => void }) {
  const className = `tag tech-badge ${active ? "active" : ""}`;
  const content = <><TechIcon tag={tag} /><span>{tag}</span></>;

  return onClick ? (
    <button className={className} type="button" aria-pressed={active} onClick={onClick}>
      {content}
    </button>
  ) : (
    <span className={className}>{content}</span>
  );
}
