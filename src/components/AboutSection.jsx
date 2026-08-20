import { FiDownload } from "react-icons/fi";

const facts = [
  { key: "Full Name", value: "Isuru Bandara Weerakoon" },
  { key: "Email", value: "isurubandara318@gmail.com", href: "mailto:isurubandara318@gmail.com" },
  { key: "Work", value: "SE 360 Productions Group (pvt) Ltd." },
  { key: "Location", value: "Colombo, Sri Lanka" },
];

const figures = [
  { num: "50+", name: "Projects Completed", note: "Websites, apps, and designs" },
  { num: "15+", name: "Happy Clients", note: "Worldwide satisfaction" },
  { num: "5+", name: "Years Experience", note: "Building digital products" },
];

/**
 * Section head pattern used on every band: the 2px ink rule, then the heading,
 * then the section label underneath as a caption. Heading-first is deliberate —
 * an uppercase kicker above a heading is the eyebrow tic, and a tag-left /
 * heading-right split is worse. Single column at every width.
 */
const AboutSection = ({ id }) => {
  return (
    <section id={id} className="hm-band hm-band--normal">
      <div className="hm-shell">
        <div className="hm-head">
          <h2 className="hm-head__title">My Journey</h2>
          <p className="hm-label">About Me</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-16">
          <div>
            <h3 className="text-xl mb-4">Who I Am</h3>

            <p className="max-w-[65ch] text-ink-2 mb-4">
              I am a Software Engineer with a BSc in Information Technology,
              graduating with a GPA of 3.76. I focus on developing efficient,
              scalable, and user-friendly software solutions, backed by strong
              problem-solving skills and practical experience across multiple
              technologies. My work spans web development, mobile apps, UI/UX
              design, and AI-integrated systems. I am passionate about
              continuous improvement and delivering meaningful digital
              experiences.
            </p>
            <p className="max-w-[65ch] text-ink-2 mb-8">
              My journey began in university where I discovered my love for
              coding and design. Since then, I&rsquo;ve worked with startups and
              established companies to build digital products that users love.
            </p>

            <dl className="hm-spec mb-8">
              {facts.map((fact) => (
                <div className="hm-spec__row" key={fact.key}>
                  <dt className="hm-spec__key hm-label">{fact.key}</dt>
                  <dd className="hm-spec__val">
                    {fact.href ? (
                      <a href={fact.href} className="hm-tlink">
                        {fact.value}
                      </a>
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href="/isuru-bandara-cv.pdf"
              className="hm-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
              <FiDownload size={16} aria-hidden="true" />
            </a>
          </div>

          <div>
            {figures.map((figure) => (
              <div className="hm-stat" key={figure.name}>
                <span className="hm-stat__num">{figure.num}</span>
                <h4 className="hm-stat__name">{figure.name}</h4>
                <p className="hm-stat__note">{figure.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
