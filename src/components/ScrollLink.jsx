import React from "react";

const ScrollLink = ({
  to,
  children,
  className,
  onClick,
  theme,
  ...props
}) => {
  const handleClick = (e) => {
    e.preventDefault();

    // Execute any passed onClick handler first (like closing mobile menu)
    if (onClick) onClick(e);

    // Wait a brief moment for any UI changes (like menu closing) to complete
    setTimeout(() => {
      const targetElement = document.querySelector(to);
      if (targetElement) {
        const navbar = document.querySelector("nav");
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }, 100); // Small delay to allow menu to close
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};

export default ScrollLink;
