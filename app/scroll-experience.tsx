"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp, Pause, Play } from "lucide-react";

const chapters = [
  ["hero", "Introduction"], ["about", "About me"],
  ["what-i-do", "What I do"], ["projects", "Selected work"],
  ["skills", "The toolkit"], ["certifications", "Certifications"],
  ["experience", "The journey"], ["contact", "Let’s build"],
];

export default function ScrollExperience() {
  const [reduced, setReduced] = useState(true);
  const [paused, setPaused] = useState(false);
  const [chapter, setChapter] = useState(0);
  const motionOff = paused || reduced;
  const next = chapters[(chapter + 1) % chapters.length];

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.scrollMotion = motionOff ? "off" : "on";
    return () => { delete document.documentElement.dataset.scrollMotion; };
  }, [motionOff]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) setChapter(chapters.findIndex(([id]) => id === entry.target.id));
      }
    }, { rootMargin: "-20% 0px -65% 0px" });
    for (const [id] of chapters) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  return <aside className="scroll-controls" aria-label="Reading controls">
      <span className="chapter-count" aria-hidden="true">{String(chapter + 1).padStart(2, "0")}<span> / 08</span></span>
      <span className="chapter-name">{chapters[chapter][1]}</span>
      <a href={`#${next[0]}`} aria-label={chapter === 7 ? "Back to introduction" : `Next: ${next[1]}`}>
        {chapter === 7 ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
      </a>
      <button type="button" onClick={() => setPaused(value => !value)} disabled={reduced === true}
        aria-pressed={motionOff} aria-label={reduced ? "Motion disabled by your device preference" : "Disable animations"}
        title={reduced ? "Reduced motion follows your device setting" : motionOff ? "Enable animations" : "Disable animations"}>
        {motionOff ? <Play size={14} /> : <Pause size={14} />}
      </button>
    </aside>;
}
