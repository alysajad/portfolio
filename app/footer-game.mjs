export const LEVEL_WIDTH = 960;
export const SPEED = 120;
export const LAP_SECONDS = LEVEL_WIDTH / SPEED;
export const BLOCK_HIT = 2;
export const COINS = [
  { x: 530, y: 128 },
  { x: 566, y: 110 },
  { x: 602, y: 128 },
  { x: 780, y: 190 },
];

/** @param {number} x */
export function coinTime(x) { return (x - 100) / SPEED; }

/** @param {number} time @param {number} center @param {number} duration @param {number} height */
function jump(time, center, duration, height) {
  const progress = (time - center + duration / 2) / duration;
  return progress > 0 && progress < 1 ? Math.sin(progress * Math.PI) * height : 0;
}

// One shared clock drives contact, collection, growth, and the visible score.
/** @param {number} seconds */
export function gameFrame(seconds) {
  const lap = Math.floor(seconds / LAP_SECONDS);
  const local = seconds % LAP_SECONDS;
  const coins = lap * COINS.length + COINS.filter(coin => local >= coinTime(coin.x)).length;
  const powered = seconds >= BLOCK_HIT;
  const growth = Math.min(1, Math.max(0, (seconds - BLOCK_HIT - .12) / .55));
  return {
    lap, local, coins, powered,
    offset: local * SPEED,
    score: coins * 100 + (powered ? 1000 : 0),
    scale: 1 + .45 * growth,
    jump: Math.max(lap === 0 ? jump(local, BLOCK_HIT, .8, 44) : 0, jump(local, coinTime(565), 1.8, 82)),
    stride: Math.sin(seconds * 19) * 24,
  };
}
