
/**
 * Anchor that scrolls to a section, offset by the sticky rail so the section
 * head is never hidden underneath it. Honours `prefers-reduced-motion` by
 * jumping instead of gliding.
 */
const ScrollLink = ({ to, children, className, onClick, ...props }) => {
  const handleClick = (e) => {
    e.preventDefault();

    if (onClick) onClick(e);

    const targetElement = document.querySelector(to);
    if (!targetElement) return;

    // Offset by the sticky header so section heads are never hidden underneath
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 80;

    const targetPosition =
      targetElement.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight -
      8;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: reduced ? "auto" : "smooth",
    });
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};

export default ScrollLink;
