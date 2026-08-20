import ScrollLink from "./ScrollLink";

const socials = [
  { name: "GitHub", href: "https://github.com/razorisuru" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/razor-isuru/" },
  { name: "Twitter", href: "https://twitter.com/razorisuru" },
  { name: "YouTube", href: "https://www.youtube.com/@razor_dev" },
  { name: "Facebook", href: "https://www.facebook.com/razor.isuru" },
  { name: "Instagram", href: "https://www.instagram.com/razor_isuru" },
];

/**
 * Ft4 · Dense typographic colophon. One small mono block closing the page —
 * mark, the six profiles set as a ruled run-on list, then the copyright.
 * No four-column sitemap, no icon row: the page has no absent sitemap to
 * catalogue, so the footer signs off instead of pretending to navigate.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="hm-band hm-band--tight border-t-2 border-ink">
      <div className="hm-shell hm-colophon">
        <ScrollLink to="#hero" aria-label="Back to top" className="shrink-0">
          <img
            src="/RAZOR2.png"
            alt=""
            width="32"
            height="32"
            className="hm-colophon__mark"
          />
        </ScrollLink>

        <ul className="hm-colophon__list">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                className="hm-colophon__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </a>
            </li>
          ))}
        </ul>

        <p className="hm-colophon__legal">
          © {currentYear} Isuru Bandara. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
