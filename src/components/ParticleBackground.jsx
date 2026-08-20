/**
 * The page's ground: an exposed 12-column hairline grid (6 columns below
 * 60rem), capped to the shell width and painted behind every band.
 *
 * This replaces the drifting-particle canvas. The rails are structure, not
 * decoration — the index rows, section rules and the contact plate all align
 * to them, and the plate redraws them across itself so the grid is never
 * interrupted. Pure CSS: no canvas, no requestAnimationFrame, nothing to
 * pause for `prefers-reduced-motion`.
 *
 * Props signature is unchanged so App.jsx keeps passing the resolved theme;
 * the colour itself comes from `--hm-rule-2`, which follows `[data-theme]`.
 */
const ParticleBackground = ({ theme }) => (
  <div className="hm-rails" data-band={theme} aria-hidden="true" />
);

export default ParticleBackground;
