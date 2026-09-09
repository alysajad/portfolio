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
      </g> : kind === "football" ? <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M64 122Q83 120 99 122M83 129L112 129M243 127L278 127" opacity=".22" />
        <g className="sketch-ball-roll">
          <circle cx="180" cy="91" r="31" />
          <path d="M180 77L194 87 188 103 172 103 166 87Z" fill="var(--color-amber)" fillOpacity=".3" />
          <path d="M180 77V64M194 87L208 81M188 103L198 116M172 103L162 116M166 87L152 81M168 63L180 67 192 63M207 77L205 89 210 99M202 113L190 114 183 122M177 122L170 114 158 113M150 99L155 89 153 77" />
        </g>
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
