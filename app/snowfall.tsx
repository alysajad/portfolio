import type { CSSProperties } from "react";

const flakes = [
  [4, 18, 4, 16, -2, -16], [9, 54, 2, 22, -11, 12], [15, 30, 5, 19, -7, -22], [21, 72, 3, 26, -16, 18],
  [27, 12, 6, 18, -5, -14], [34, 62, 2, 24, -13, 20], [40, 24, 4, 17, -9, -18], [46, 84, 3, 28, -18, 15],
  [53, 39, 5, 20, -3, -24], [59, 8, 2, 25, -15, 18], [65, 58, 4, 18, -8, -12], [72, 22, 3, 27, -20, 20],
  [78, 76, 6, 21, -6, -16], [84, 44, 2, 24, -14, 14], [90, 15, 5, 19, -10, -22], [96, 66, 3, 29, -21, 16],
  [2, 88, 2, 30, -19, 20], [18, 46, 3, 23, -12, 14], [31, 94, 4, 32, -25, -18], [50, 68, 2, 27, -17, 16],
  [69, 36, 3, 31, -23, -20], [88, 92, 4, 26, -15, 18],
] as const;

export default function Snowfall() {
  return <div className="winter-snow" aria-hidden="true">
    {flakes.map(([x, y, size, duration, delay, drift], index) => (
      <span
        key={index}
        style={{
          "--flake-x": `${x}%`,
          "--flake-y": `${y}vh`,
          "--flake-size": `${size}px`,
          "--flake-duration": `${duration}s`,
          "--flake-delay": `${delay}s`,
          "--flake-drift": `${drift}px`,
        } as CSSProperties}
      />
    ))}
  </div>;
}
