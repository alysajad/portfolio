// Six hand-drawn poses: ready, plant, wind-up, contact, follow-through, finish.
const kickFrames = [
  { head: [116, 38], shirt: "M108 52L124 55 120 84 104 82Z", arms: "M108 57L96 72 85 75M124 59L135 74 146 71", legs: "M109 88L108 115 102 143 115 143M118 88L133 111 144 140 155 140", ball: [180, 132, 0] },
  { head: [120, 40], shirt: "M112 54L126 57 117 87 102 82Z", arms: "M112 59L99 69 88 65M125 61L138 73 147 67", legs: "M109 90L113 115 109 143 122 143M116 91L102 112 81 108 78 112", ball: [180, 132, 0] },
  { head: [123, 39], shirt: "M116 53L129 58 119 88 104 83Z", arms: "M115 58L101 65 91 55M128 62L138 80 153 79", legs: "M111 91L119 117 113 143 126 143M119 91L104 108 88 100 81 103", ball: [180, 132, 0] },
  { head: [120, 36], shirt: "M110 50L125 54 126 85 108 84Z", arms: "M111 55L95 65 83 59M125 58L138 68 150 57", legs: "M114 91L114 115 108 143 121 143M123 90L141 108 156 129 168 130", ball: [180, 132, 0] },
  { head: [111, 34], shirt: "M102 49L118 51 125 82 108 85Z", arms: "M104 53L90 65 79 59M118 55L133 60 143 49", legs: "M111 90L114 115 111 143 124 143M123 87L148 91 169 86 174 91", ball: [231, 104, 65] },
  { head: [111, 36], shirt: "M102 51L119 53 122 83 107 85Z", arms: "M104 56L92 72 82 68M120 58L136 65 148 57", legs: "M111 90L108 116 111 143 124 143M122 89L146 101 165 96 170 101", ball: [304, 75, 150] },
];

// Inline ink drawings stay visible without JavaScript; CSS ties their motion to each section.
export default function SkySketch({ kind = "flock" }: { kind?: "flock" | "breeze" | "orbit" | "plane" | "constellation" | "bug" | "football" }) {
  return <div className={`section-sketch sketch-${kind}`} aria-hidden="true">
    <svg viewBox="0 0 360 180" fill="none" focusable="false">
      {kind === "flock" ? <>
        <g className="sketch-far">
          {[[64, 75, .42, -12], [125, 45, .34, 8], [186, 55, .48, -8], [230, 28, .3, 12]].map(([x, y, size, angle], index) =>
            <g key={index} transform={`translate(${x} ${y}) rotate(${angle}) scale(${size})`}>
              <path className="crow-wings" d="M-22-9Q-10-15 0 0Q9-16 23-13L13-7 1 3-10-5Z" fill="currentColor" />
            </g>)}
        </g>
        <g className="sketch-near">
          {[[104, 113, .75, 8], [182, 86, 1, -9], [260, 67, .6, 14]].map(([x, y, size, angle], index) =>
            <g className="crow" key={index} transform={`translate(${x} ${y}) rotate(${angle}) scale(${size})`}>
              <path className="crow-wings" d="M0 1C-7-13-16-17-28-15L-21-10-24-11-17-6-19-6C-11-5-6-1-1 4L2 3C7-6 17-9 25-8L22-11 27-11C16-17 6-10 0 1Z" fill="currentColor" />
              <path d="M-2 0Q0-5 3-2L5-1 2 0 1 6-3 9-2 4Z" fill="currentColor" />
            </g>)}
        </g>
        <path className="sketch-trace" d="M22 142Q68 146 100 134M29 149L60 148" stroke="currentColor" strokeWidth=".7" strokeLinecap="round" />
      </> : kind === "breeze" ? <g className="sketch-drift" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path className="sketch-trace" d="M24 124C69 143 119 120 120 88S90 62 96 90C103 124 171 102 216 60" strokeWidth="1" strokeDasharray="3 7" />
        <g className="sketch-feather" transform="translate(220 58) rotate(25)">
          <path d="M-31 39C-26 6-7-29 20-34C28-8 10 22-31 39Z" strokeWidth="1.1" />
          <path d="M-37 49L17-28M-23 25L-22 10M-13 11L-12-6M-3-3L-2-17M-16 18L4 13M-6 4L14-1M4-10L20-16" strokeWidth=".8" />
        </g>
        <path d="M263 98Q290 92 316 96M275 104L298 101" strokeWidth=".7" opacity=".5" />
      </g> : kind === "plane" ? <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        <path className="sketch-trail" pathLength="1" d="M35 137C82 150 134 123 119 101C104 78 86 110 114 119C147 130 176 105 204 82" strokeDasharray=".015 .035" opacity=".55" />
        <g className="sketch-plane-glide" strokeWidth="1.6">
          <path d="M201 69L274 43 248 98 231 79 219 90 220 75Z" fill="var(--color-amber)" fillOpacity=".16" />
          <path d="M220 75L274 43 231 79 219 90Z" />
          <path d="M231 79L248 98 244 85" stroke="var(--color-amber)" />
        </g>
      </g> : kind === "constellation" ? <g className="sketch-constellation-drift" stroke="currentColor" strokeWidth=".9" strokeLinecap="round" strokeLinejoin="round">
        <path className="sketch-trail" pathLength="1" d="M70 119L129 78 194 104 244 50 292 76" strokeDasharray=".015 .035" opacity=".55" />
        <circle cx="70" cy="119" r="2" />
        <circle cx="194" cy="104" r="3" />
        <circle cx="292" cy="76" r="2" />
        <path d="M129 68L131 76 139 78 131 80 129 88 127 80 119 78 127 76Z" />
        <path d="M244 35L247 47 259 50 247 53 244 65 241 53 229 50 241 47Z" />
        <circle cx="244" cy="50" r="1.5" className="sketch-amber" />
        <path d="M94 49V55M91 52H97M273 119V125M270 122H276" opacity=".5" />
      </g> : kind === "bug" ? <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M73 136L95 134M109 134L117 134M243 134Q265 132 283 135" opacity=".22" />
        <g className="sketch-bug-crawl">
          <g className="sketch-bug-legs">
            <path d="M166 85L150 76 143 82M164 99L145 99 138 108M169 112L155 123 145 121M194 85L210 76 217 82M196 99L215 99 222 108M191 112L205 123 215 121" />
          </g>
          <path d="M172 68L167 56 160 52M188 68L193 56 200 52" />
          <path d="M168 80C165 61 195 61 192 80" />
          <ellipse cx="180" cy="99" rx="18" ry="25" fill="var(--color-bg)" />
          <path d="M180 77V122" />
          <path d="M168 89L173 93M192 104L187 108" stroke="var(--color-amber)" strokeWidth="2.5" />
          <circle cx="175" cy="71" r="1" fill="currentColor" /><circle cx="185" cy="71" r="1" fill="currentColor" />
        </g>
      </g> : kind === "football" ? <g className="sketch-kick-strip" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {kickFrames.map(({ head, shirt, arms, legs, ball }, index) => <g className="kick-frame" key={index} transform={`translate(${index * 360} 0)`}>
          <path d="M73 148Q126 145 197 147M213 147L232 147M263 147L288 147" opacity=".22" />
          <g className="kick-player">
            <circle cx={head[0]} cy={head[1]} r="9" />
            <path d={`M${head[0] - 8} ${head[1] - 3}q8-11 16 0M${head[0] + 3} ${head[1]}h1`} />
            <path d={arms} />
            <path d={shirt} fill="var(--color-amber)" fillOpacity=".22" />
            <path d={legs} strokeWidth="2.2" />
            <path d="M106 84L122 86 126 94 117 97 111 92 104 94Z" fill="var(--color-bg)" />
          </g>
          <g className="kick-ball" transform={`translate(${ball[0]} ${ball[1]}) rotate(${ball[2]})`} strokeWidth="1.2">
            <circle r="12" />
            <path d="M0-6L6-2 4 5H-4L-6-2ZM0-6V-12M6-2L11-5M4 5L7 10M-4 5L-7 10M-6-2L-11-5" />
          </g>
          {index === 3 && <path d="M191 119L196 114M196 132H204M191 145L196 150" stroke="var(--color-amber)" />}
          {index > 3 && <path d={`M${ball[0] - 33} ${ball[1] + 8}l14-5m-19 12 10-3`} opacity=".35" />}
        </g>)}
      </g> : <g className="sketch-orbit-turn" stroke="currentColor" strokeWidth=".85">
        <ellipse cx="180" cy="90" rx="94" ry="35" transform="rotate(-27 180 90)" />
        <ellipse cx="180" cy="90" rx="88" ry="38" transform="rotate(-32 180 90)" opacity=".35" />
        <path d="M174 71L178 86 193 91 177 94 172 109 170 94 156 89 170 86Z" strokeLinejoin="round" />
        <circle cx="254" cy="44" r="5" className="sketch-amber" />
        <path d="M102 43L102 55M96 49L108 49M268 124L268 132M264 128L272 128" strokeLinecap="round" />
      </g>}
    </svg>
  </div>;
}
