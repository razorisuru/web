import { FiDownload, FiArrowUpRight } from "react-icons/fi";

const ResumeSection = ({ id }) => {
  const workExperience = [
    {
      title: "Software Engineer",
      organization: "360 Productions Group Pvt Ltd",
      url: "https://360productionsgroup.co.uk/",
      period: "Feb 2026 – Present",
      location: "Colombo, Sri Lanka",
      status: "current",
      responsibilities: [
        "Design, develop, and maintain scalable web and mobile applications for enterprise clients using React.js, Next.js, Laravel, Node.js, and TypeScript, improving sprint delivery velocity by 25%.",
        "Architect secure, high-performance RESTful APIs and data models with MySQL, MongoDB, and Drizzle ORM; containerize services with Docker, cutting deployment time by 40%.",
        "Conduct code reviews and mentor junior developers, reducing production defects by 30% while owning delivery across the full SDLC from requirements to performance optimization.",
      ],
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Laravel",
        "Node.js",
        "Docker",
        "MySQL",
        "MongoDB",
        "Drizzle ORM",
      ],
    },
    {
      title: "Associate Software Engineer",
      subtitle: "Promoted from Intern",
      organization: "Cybernetic Technologies (Pvt) Ltd",
      url: "https://cybernetic.lk",
      period: "Jun 2025 – Feb 2026",
      location: "Battaramulla, Sri Lanka",
      status: "completed",
      responsibilities: [
        "Built and maintained production web and mobile applications using React.js, Laravel, Node.js, and TypeScript, including secure RESTful APIs and MySQL/MongoDB data models with Prisma ORM.",
        "Led a small development team on backend (Laravel) and frontend (React.js/Next.js) delivery for production-level projects, reducing feature turnaround time by 20%.",
        "Performed software testing and debugging in production environments, cutting critical post-release bugs by 35%.",
        "Promoted from Software Engineer Intern to Associate Software Engineer within 6 months in recognition of exceptional technical performance and leadership.",
      ],
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Laravel",
        "Node.js",
        "Prisma ORM",
        "MySQL",
        "MongoDB",
      ],
    },
    {
      title: "Junior Software Developer",
      subtitle: "Intern",
      organization: "SIBA Dynamics – SIBA Campus",
      url: "https://siba.edu.lk",
      period: "Jan 2024 – Mar 2025",
      location: "Sri Lanka",
      status: "completed",
      responsibilities: [
        "Started the internship as a Peer Tutor, assisting lecturers with teaching and guiding students to a deeper understanding of their subjects.",
        "Developed and maintained web applications using PHP, JavaScript, HTML, CSS, and MySQL, participating in code reviews and client system demonstrations for on-time delivery.",
        "Collaborated with a small team using Git-based version control and Agile workflows to ship features within academic project deadlines.",
      ],
      skills: [
        "PHP",
        "JavaScript",
        "HTML",
        "CSS",
        "MySQL",
        "Git",
        "Agile",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "SIBA CAMPUS (Sri Lanka International Buddhist Academy)",
      period: "2022 – 2025",
      description:
        "Graduated with a First Class Honors degree, achieving a GPA of 3.76, and developed strong skills across modern information technology disciplines.",
      achievement: "First Class Honors | GPA: 3.76",
    },
    {
      degree: "Ordinary Level & Advanced Level",
      institution: "Kurunduwaththa Royal College",
      period: "2015 – 2019",
      description:
        "A multicultural institution that promotes the free exchange of ideas and diversity. Known for its rich traditions and innovative approach to excellence in education.",
      achievement: "Completed Successfully",
    },
  ];

  return (
    <section id={id} className="hm-band hm-band--open">
      <div className="hm-shell">
        <div className="hm-head">
          <h2 className="hm-head__title">Resume</h2>
          <p className="hm-label">My Credentials</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-16">
          {/* Work — the longer column */}
          <div>
            <h3 className="hm-label mb-0 pb-2 border-b border-ink text-ink">
              Professional Experience
            </h3>
            {workExperience.map((job) => (
              <article className="hm-entry" key={`${job.title}-${job.period}`}>
                <div className="hm-entry__meta">
                  <span className="hm-num text-xs uppercase tracking-[0.09em] text-muted">
                    {job.period}
                  </span>
                  {job.location && (
                    <>
                      <span className="text-muted/40 select-none" aria-hidden="true">
                        /
                      </span>
                      <span className="hm-num text-xs uppercase tracking-[0.09em] text-muted">
                        {job.location}
                      </span>
                    </>
                  )}
                  {job.status === "current" && (
                    <span className="hm-label flex items-center gap-2 text-accent">
                      <span className="hm-sq" aria-hidden="true" />
                      Current
                    </span>
                  )}
                </div>

                <h4 className="hm-entry__title flex flex-wrap items-baseline gap-x-2">
                  <span>{job.title}</span>
                  {job.subtitle && (
                    <span className="text-xs font-normal text-muted tracking-normal">
                      ({job.subtitle})
                    </span>
                  )}
                </h4>

                <a
                  href={job.url}
                  className="hm-entry__org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {job.organization}
                  <FiArrowUpRight size={13} aria-hidden="true" />
                </a>

                {job.description && (
                  <p className="hm-entry__body">{job.description}</p>
                )}

                {job.responsibilities && (
                  <ul className="space-y-1.5 list-none p-0 m-0">
                    {job.responsibilities.map((item, idx) => (
                      <li
                        key={idx}
                        className="relative pl-3.5 text-sm text-muted leading-relaxed before:content-['–'] before:absolute before:left-0 before:text-ink-2/60"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {job.skills && job.skills.length > 0 && (
                  <ul className="hm-project__tags pt-1">
                    {job.skills.map((skill) => (
                      <li key={skill} className="hm-tag">
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          {/* Education — the narrower column */}
          <div>
            <h3 className="hm-label mb-0 pb-2 border-b border-ink text-ink">
              Education
            </h3>
            {education.map((edu) => (
              <article className="hm-entry" key={edu.degree}>
                <div className="hm-entry__meta">
                  <span className="hm-num text-xs uppercase tracking-[0.09em] text-muted">
                    {edu.period}
                  </span>
                  <span className="hm-label">{edu.achievement}</span>
                </div>

                <h4 className="hm-entry__title">{edu.degree}</h4>

                <p className="text-sm font-semibold text-ink-2">
                  {edu.institution}
                </p>

                <p className="hm-entry__body">{edu.description}</p>
              </article>
            ))}

            <div className="mt-8">
              <a
                href="/isuru-bandara-cv.pdf"
                className="hm-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Full Resume
                <FiDownload size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
