/**
 * The role index.
 *
 * Was a rotating typewriter with a blinking caret — one of the most
 * recognisable generated-portfolio tells, and an infinite animation loop that
 * pulls the eye and never lets go. It also hid four of the five roles at any
 * moment. It now sets all of them at once as a static, hairline-separated
 * index: same words, all readable, nothing moving.
 *
 * The `words` / `className` props are unchanged, so callers keep working.
 */
const TypeWriter = ({ words = [], className = "" }) => {
  if (words.length === 0) return null;

  return (
    <ul className={`hm-roles ${className}`.trim()}>
      {words.map((word) => (
        <li key={word}>{word}</li>
      ))}
    </ul>
  );
};

export default TypeWriter;
