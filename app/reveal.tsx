import type { ReactNode } from "react";

export default function Reveal({ children, className = "", kind = "title" }: { children: ReactNode; className?: string; kind?: "title" | "card" }) {
  return <div className={`scroll-reveal reveal-${kind} ${className}`}>
    {children}
  </div>;
}
