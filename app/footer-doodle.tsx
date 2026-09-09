"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, Pause, Play } from "lucide-react";
import MarioSprite from "./mario-sprite";
import { BLOCK_HIT, COINS, LAP_SECONDS, LEVEL_WIDTH, coinTime, gameFrame } from "./footer-game.mjs";

export default function FooterDoodle() {
  const [paused, setPaused] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const elapsed = useRef(0);
  const footer = useRef<HTMLElement>(null);
  const frame = gameFrame(seconds);

  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let request = 0;
    let previous = 0;
    const tick = (now: number) => {
      if (previous) elapsed.current += Math.min((now - previous) / 1000, .05);
      previous = now;
      setSeconds(elapsed.current);
      request = requestAnimationFrame(tick);
    };
    const sync = () => {
      cancelAnimationFrame(request);
      previous = 0;
      if (visible && !paused && !preference.matches && !document.hidden) request = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    observer.observe(footer.current!);
    preference.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      cancelAnimationFrame(request);
      observer.disconnect();
      preference.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [paused]);

  const powerFlash = seconds >= BLOCK_HIT && seconds < BLOCK_HIT + 1.2;
  return <footer ref={footer} className="doodle-footer" data-paused={paused} data-powered={frame.powered} aria-label="Endless Mario animation">
    <div className="doodle-footer-caption">
      <span>One more level<span className="amber">...</span></span>
      <div className="doodle-scoreboard" role="group" aria-label="Game score">
        <span>SCORE <strong data-score={frame.score}>{String(frame.score).padStart(6, "0")}</strong></span>
        <span className="doodle-coin-count"><span aria-hidden="true">●</span><span className="sr-only">Coins collected: </span><strong>{String(frame.coins).padStart(2, "0")}</strong></span>
      </div>
      <div className="doodle-footer-actions">
        <button className="doodle-pause" type="button" onClick={() => setPaused(!paused)} aria-label={paused ? "Resume footer animation" : "Pause footer animation"}>
          {paused ? <Play size={14} /> : <Pause size={14} />}
        </button>
        <a href="#hero" aria-label="Back to top"><ArrowUp size={16} /></a>
      </div>
    </div>
    <svg className="doodle-level" viewBox="0 0 1200 260" preserveAspectRatio="xMinYMax slice" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <defs>
        <linearGradient id="level-pipe" x2="1" y2="0"><stop stopColor="#357e3c" /><stop offset=".3" stopColor="#93cc62" /><stop offset=".6" stopColor="#61a849" /><stop offset="1" stopColor="#276333" /></linearGradient>
        <linearGradient id="level-gold" x2="1" y2="1"><stop stopColor="#fff1a1" /><stop offset=".45" stopColor="#ffc342" /><stop offset="1" stopColor="#df851a" /></linearGradient>
        <g id="level-landscape">
          <g opacity=".2">
            <path d="M170 219q54-95 111 0m-94-3 20-32m107 35q34-54 71 0M710 220q65-110 133 0" />
            <path d="M205 64c-13-2-16-15-4-19 1-15 25-16 29-3 17-7 28 7 21 19l-46 3Z" />
            <path d="M653 86c-12-3-12-15 1-17 3-12 21-12 25-1 15-4 22 10 12 16Z" />
          </g>
          <path d="M0 221h960m-960 10h960" strokeOpacity=".5" />
          <path d="m25 224-5 4m100-4-5 4m100-4-5 4m100-4-5 4m100-4-5 4m100-4-5 4m100-4-5 4m100-4-5 4m100-4-5 4m100-4-5 4" opacity=".2" />
          <path d="M545 182v38h40v-38m-44-12h48v14h-48Z" fill="url(#level-pipe)" stroke="#326039" />
          <path d="M549 190v23m-3-38h36" stroke="#c5e995" strokeOpacity=".7" />
          <path d="m850 219 3-8 4 8 5-5m-841 5 3-6 4 6" opacity=".35" />
        </g>
      </defs>
      <g className="doodle-world" style={{ transform: `translateX(${-frame.offset}px)` }}>
        {[0, 1, 2].map(index => {
          const lap = frame.lap + index;
          const blockUsed = lap > 0 || frame.powered;
          const bump = lap === 0 && seconds >= BLOCK_HIT && seconds < BLOCK_HIT + .3 ? Math.sin((seconds - BLOCK_HIT) / .3 * Math.PI) * 8 : 0;
          return <g key={lap} transform={`translate(${index * LEVEL_WIDTH} 0)`}>
            <use href="#level-landscape" />
            <g className="doodle-question-block" data-used={blockUsed} transform={`translate(324 ${72 - bump})`}>
              <rect width="32" height="32" rx="3" fill={blockUsed ? "#b29b79" : "url(#level-gold)"} stroke={blockUsed ? "#897558" : "#bb7a18"} />
              <path d="M4 26V4h23" stroke={blockUsed ? "#cdbb9f" : "#fff0af"} />
              {blockUsed ? <circle cx="16" cy="16" r="2" fill="#897558" stroke="none" /> : <path d="M11 11q0-6 6-5 8 2 2 8l-3 2v3m0 5h.1" stroke="#8f4f12" strokeWidth="3" />}
              <path d="M4 28h.1M28 28h.1M28 4h.1" stroke="#8f6d41" strokeWidth="2" />
            </g>
            {COINS.map((coin, coinIndex) => {
              const collectedAt = lap * LAP_SECONDS + coinTime(coin.x);
              const age = seconds - collectedAt;
              if (age > .5) return null;
              return <g className="doodle-coin" data-collected={age >= 0} key={coinIndex} transform={`translate(${coin.x} ${coin.y})`}>
                {age < 0 ? <g transform={`scale(${.65 + .35 * Math.abs(Math.cos(seconds * 5 + coinIndex))} 1)`}>
                  <ellipse rx="8" ry="11" fill="url(#level-gold)" stroke="#d89524" />
                  <ellipse rx="5" ry="8" stroke="#fff1a1" /><path d="M0-5v10" stroke="#b77913" strokeWidth="2" />
                </g> : <g opacity={1 - age * 2} transform={`translate(0 ${-age * 45})`}>
                  <path d="M-10 0h-4m28 0h-4M0-10v-4m0 28v-4m-8-18-3-3m22 22-3-3" stroke="#e5a526" />
                  <text y="-15" textAnchor="middle" stroke="none" fill="#946011" fontSize="12" fontFamily="monospace">+100</text>
                </g>}
              </g>;
            })}
          </g>;
        })}
      </g>
      <ellipse cx="100" cy="222" rx={22 * frame.scale} ry="3" fill="#372819" stroke="none" opacity={.13 - frame.jump / 1000} />
      <g className="doodle-runner" transform={`translate(100 ${220 - frame.jump})`} data-scale={frame.scale}>
        <g transform={`scale(${frame.scale})`}><MarioSprite stride={frame.stride} jumping={frame.jump > 4} /></g>
      </g>
      {powerFlash && <g transform={`translate(100 ${90 - (seconds - BLOCK_HIT) * 24})`} opacity={Math.min(1, (BLOCK_HIT + 1.2 - seconds) * 3)} fill="#a2630e" stroke="none" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
        <text fontSize="13">SUPER!</text><text y="16" fontSize="11">+1000</text>
      </g>}
    </svg>
  </footer>;
}
