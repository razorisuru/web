import ScrollLink from "./ScrollLink";
import TypeWriter from "./TypeWriter";

/**
 * H2 · Split diptych, 7/5, divided by a hairline.
 *
 * The one deviation from the Index-First macrostructure: the page has to
 * convert to contact, so it opens with a statement rather than dropping
 * straight into the index. It is also the only place display type and the
 * page-load entrance appear — everything below this fold is just there.
 */
const HeroSection = ({ id }) => {
  return (
    <section id={id} className="hm-band hm-band--open-top">
      <div className="hm-shell hm-hero__grid">
        <div>
          <p className="hm-enter text-muted mb-2" style={{ "--i": 0 }}>
            Hello, I&rsquo;m
          </p>

          <h1 className="hm-enter hm-hero__title" style={{ "--i": 1 }}>
            Isuru Bandara
          </h1>

          <div className="hm-enter" style={{ "--i": 2 }}>
            <TypeWriter
              words={[
                "Full Stack Developer",
                "Laravel Expert",
                "React Engineer",
                "UI/UX Designer",
                "Node.js Developer",
              ]}
            />
          </div>

          <p className="hm-enter hm-hero__lede" style={{ "--i": 3 }}>
            I&rsquo;m a Full Stack Developer specializing in Laravel and
            Node.js, building robust, scalable web applications from front to
            back. I focus on clean architecture, API development, and seamless
            integration of modern frontend frameworks. Passionate about
            problem-solving, performance optimization, and delivering
            user-focused solutions.
          </p>

          <div
            className="hm-enter flex flex-wrap gap-3"
            style={{ "--i": 4 }}
          >
            <ScrollLink to="#contact" className="hm-btn">
              Get in Touch
            </ScrollLink>
            <ScrollLink to="#projects" className="hm-chip">
              View Projects
            </ScrollLink>
          </div>
        </div>

        <div className="hm-enter hm-hero__aside" style={{ "--i": 5 }}>
          <figure className="hm-figure">
            <img
              src="/ogimg.png"
              alt="Isuru Bandara — Full Stack Web Developer"
              width="1200"
              height="630"
              fetchPriority="high"
            />
          </figure>

          <p className="hm-status hm-label">
            <span className="hm-sq" aria-hidden="true" />
            Available
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
