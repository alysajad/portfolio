"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export default function Reveal({ children, className = "", kind = "title" }: { children: ReactNode; className?: string; kind?: "title" | "card" }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={false}
    whileInView={reduced ? undefined : { opacity: [0.65, 1], y: kind === "card" ? [20, 0] : [0, 0] }}
    viewport={{ once: true, amount: 0.08 }} transition={{ duration: kind === "card" ? 0.5 : 0.4, ease: "easeOut" }}>
    {children}
  </motion.div>;
}
