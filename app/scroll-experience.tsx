"use client";

import { useEffect, useState } from "react";

export default function ScrollExperience() {
  const [reduced, setReduced] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.scrollMotion = reduced ? "off" : "on";
    return () => { delete document.documentElement.dataset.scrollMotion; };
  }, [reduced]);

  return null;
}
