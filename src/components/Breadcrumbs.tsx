"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Crumb = { href: string; label: string };

const segmentLabel = (seg: string) => {
  // Map known slugs to nicer labels
  const map: Record<string, string> = {
    properties: "Properties",
    about: "About",
    "schedule-tour": "Schedule Tour",
    contact: "Contact",
    "oral-estate": "Oral Estate",
    "white-beach": "White Beach Estate",
    "royal-pine-estate": "Royal Pine Estate",
  };
  return (
    map[seg] || seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
  );
};

export default function Breadcrumbs({
  className = "",
}: {
  className?: string;
}) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const crumbs: Crumb[] = [{ href: "/", label: "Home" }];
  let path = "";
  segments.forEach((seg) => {
    path += `/${seg}`;
    crumbs.push({ href: path, label: segmentLabel(seg) });
  });

  if (crumbs.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1 text-sm">
        {crumbs.map((c, idx) => {
          const isLast = idx === crumbs.length - 1;
          return (
            <li key={c.href} className="flex items-center">
              {idx > 0 && <span className="mx-1 text-primary/50">/</span>}
              {isLast ? (
                <span className="text-primary/70" aria-current="page">
                  {c.label}
                </span>
              ) : (
                <Link href={c.href} className="text-primary hover:underline">
                  {c.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
