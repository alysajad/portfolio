function MarioLeg({ swing, jumping, back = false }: { swing: number; jumping: boolean; back?: boolean }) {
  const lift = Math.max(0, swing / 24);
  const kneeX = jumping ? (back ? -10 : 13) : swing * .3 + 3;
  const kneeY = jumping ? (back ? -15 : -22) : -14 - lift * 5;
  const footX = jumping ? (back ? -19 : 10) : swing * .65;
  const footY = jumping ? (back ? -15 : -10) : -6 - lift * 9;

  return <g className={back ? "mario-leg-back" : "mario-leg-front"}>
    <path d={`M-5-25H4L${kneeX + 4} ${kneeY} ${footX + 4} ${footY} ${footX - 4} ${footY} ${kneeX - 4} ${kneeY + 1}Z`} />
    <path d={`m${kneeX - 2} ${kneeY} 4-1m${footX - 4} ${footY - 2}h8`} fill="none" strokeWidth=".7" strokeOpacity=".5" />
    {/* Both boots stay in profile, toes pointing along the direction of travel. */}
    <g transform={`translate(${footX} ${footY})`}>
      <path d="M-4-2Q1-4 5-1L12 1Q15 3 12 5H-5Q-6 1-4-2Z" />
      <path d="M-4 4H12" strokeWidth="1.5" />
      <path d="m4 0 3 1" fill="none" strokeWidth=".7" />
    </g>
  </g>;
}

export default function MarioSprite({ stride, jumping }: { stride: number; jumping: boolean }) {
  return <g fill="var(--color-bg)" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
    <MarioLeg swing={-stride} jumping={jumping} back />
    <g transform={`rotate(${jumping ? 35 : stride} -8 -39)`}>
      <path d="M-8-43Q-18-44-19-30L-14-25-8-31Z" fill="var(--color-bg)" />
      <path d="M-20-29Q-25-27-23-22L-18-19Q-12-20-13-25L-15-29Z" fill="var(--color-bg)" />
    </g>
    <path d="M-11-43Q0-48 10-40L13-26Q9-18-7-21L-14-28Z" fill="var(--color-bg)" />
    <path d="m-9-43 5-1 2 14h9l-1-12 4 2 3 18q-9 9-23 1Z" fill="var(--color-bg)" />
    <path d="M-5-28q5 3 12 0v7H-3Z" fill="var(--color-bg)" stroke="currentColor" strokeWidth=".8" />
    <circle cx="-3" cy="-30" r="1.9" fill="var(--color-amber)" /><circle cx="8" cy="-30" r="1.9" fill="var(--color-amber)" />
    <MarioLeg swing={stride} jumping={jumping} />
    <g transform={`rotate(${jumping ? -65 : -stride} 8 -38)`}>
      <path d="M7-42Q14-45 17-34L19-28 11-26 6-34" fill="var(--color-bg)" />
      <path d="m11-29 8-2 2 4-8 3Z" fill="var(--color-bg)" />
      <path d="M14-26q-3 5 1 7 5 3 8-1 3-3-1-7l-4 1q-2-4-4 0Z" fill="var(--color-bg)" />
      <path d="m18-23 2 2m-5-1 2 2" fill="none" stroke="currentColor" />
    </g>
    <path d="M-11-58q-6 10 1 17l9-3 2-15Z" fill="currentColor" />
    <path d="M-7-59Q6-66 14-56L15-45Q10-37 0-41L-8-47Z" fill="var(--color-bg)" />
    <ellipse cx="-7" cy="-50" rx="5" ry="6" fill="var(--color-bg)" />
    <path d="M-9-51q4-3 4 2" stroke="currentColor" fill="none" />
    <path d="m-4-58 3 1-1 9-3-1Z" fill="currentColor" />
    <ellipse cx="10" cy="-54" rx="3.5" ry="5" fill="var(--color-bg)" />
    <ellipse cx="11.5" cy="-53.5" rx="1.7" ry="3.2" fill="currentColor" stroke="currentColor" />
    <ellipse cx="12" cy="-53" rx=".8" ry="2" fill="currentColor" /><circle cx="12" cy="-55" r=".7" fill="var(--color-bg)" stroke="none" />
    <path d="M6-60q4-3 8 0" stroke="currentColor" strokeWidth="2.2" fill="none" />
    <path d="M1-47q2-5 5-2 3-4 5-1 5-2 7 0-1 6-6 5-3 3-5 0-4 2-6-2Z" fill="currentColor" />
    <ellipse cx="17" cy="-49" rx="6.5" ry="5" fill="var(--color-bg)" />
    <path d="M-13-59Q-16-70-3-71 10-73 15-62L10-59Z" fill="var(--color-bg)" />
    <path d="M-12-59q15-7 29-3 6 2 1 4L4-57Z" fill="var(--color-bg)" />
    <ellipse cx="3" cy="-65" rx="5" ry="4.5" fill="var(--color-bg)" stroke="none" />
    <path d="m0-63 .4-4 2.4 2.4 2.3-2.4.6 4" stroke="currentColor" strokeWidth="1.4" fill="none" />
    <path d="M-11-65q2-4 7-4m-7 7 3-1m-7 25 3-2m-2 5 3-2" stroke="currentColor" strokeWidth=".7" strokeOpacity=".5" fill="none" />
  </g>;
}
