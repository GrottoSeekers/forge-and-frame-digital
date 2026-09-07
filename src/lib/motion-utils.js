export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const SPRING_GENTLE = { type: "spring", stiffness: 300, damping: 20, mass: 1 };
export const SPRING_SNAPPY = { type: "spring", stiffness: 500, damping: 25, mass: 0.8 };
export const SPRING_BOUNCY = { type: "spring", stiffness: 400, damping: 12, mass: 1 };
