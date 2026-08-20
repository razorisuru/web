import { FiDownload, FiArrowUpRight } from "react-icons/fi";

const ResumeSection = ({ id }) => {
  const workExperience = [
    {
      title: "Software Engineer",
      organization: "360 Productions Group (pvt) Ltd.",
      url: "https://360productionsgroup.co.uk/",
      period: "Feb 2026 – Present",
      description:
        "Develop and enhance full-stack web and mobile applications using modern frameworks. Contribute to system enhancements, API development, and database integration while collaborating with cross-functional teams to deliver scalable, production-ready solutions.",
      status: "current",
    },
    {
      title: "Associate Software Engineer",
      organization: "Cybernetic Technologies (Pvt) Ltd",
      url: "https://cybernetic.lk",
      period: "Dec 2025 – Feb 2026",
      description:
        "Develop and enhance full-stack web and mobile applications using modern frameworks. Contribute to system enhancements, API development, and database integration while collaborating with cross-functional teams to deliver scalable, production-ready solutions.",
      status: "completed",
    },
    {
      title: "Intern Software Engineer",
      organization: "Cybernetic Technologies (Pvt) Ltd",
      url: "https://cybernetic.lk",
      period: "Jun 2025 – Dec 2025",
      description:
        "Built and maintained client-based web applications using PHP, JavaScript, HTML, CSS, and MySQL. Assisted in debugging, testing, and performance optimization while participating in code reviews, technical discussions, and system demonstrations, leading to promotion upon completion.",
      status: "completed",
    },
    {
      title: "Peer Tutor",
      organization: "SIBA Campus (Sri Lanka International Buddhist Academy)",
      url: "https://siba.edu.lk",
      period: "Oct 2024 - 2025",
      description:
        "Started my internship as a peer tutor at my campus, where I assist lecturers with teaching and guide students to achieve a deeper understanding of their subjects.",
      status: "completed",
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
              Work Experience
            </h3>
            {workExperience.map((job) => (
              <article className="hm-entry" key={`${job.title}-${job.period}`}>
                <div className="hm-entry__meta">
                  <span className="hm-num text-xs uppercase tracking-[0.09em] text-muted">
                    {job.period}
                  </span>
                  {job.status === "current" && (
                    <span className="hm-label flex items-center gap-2 text-accent">
                      <span className="hm-sq" aria-hidden="true" />
                      Current
                    </span>
                  )}
                </div>

                <h4 className="hm-entry__title">{job.title}</h4>

                <a
                  href={job.url}
                  className="hm-entry__org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {job.organization}
                  <FiArrowUpRight size={13} aria-hidden="true" />
                </a>

                <p className="hm-entry__body">{job.description}</p>
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
