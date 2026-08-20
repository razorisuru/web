import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { allProjects } from "../data/projects";

/**
 * The index proper. Twelve numbered rows on hairlines — no cards, no
 * gradient borders, no orbs. The thumbnail is always visible rather than
 * revealed on hover, so touch users get the same page mouse users do.
 */
const ProjectsSection = ({ id, visibleProjects, loadMoreProjects }) => {
  const projectsToShow = allProjects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < allProjects.length;

  return (
    <section id={id} className="hm-band hm-band--normal">
      <div className="hm-shell">
        <div className="hm-head">
          <h2 className="hm-head__title">Featured Projects</h2>
          <p className="hm-label">My Work</p>
        </div>

        <ul className="hm-rows">
          {projectsToShow.map((project, index) => (
            <li className="hm-row" key={project.title}>
              <div className="hm-row__inner hm-project">
                <span className="hm-project__num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <figure className="hm-project__thumb">
                  <img
                    src={project.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width="320"
                    height="200"
                  />
                </figure>

                <div className="min-w-0">
                  <h3 className="hm-project__title">{project.title}</h3>
                  <p className="hm-project__desc">{project.description}</p>
                  <ul className="hm-project__tags">
                    {project.tags.map((tag) => (
                      <li className="hm-tag" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="hm-project__acts">
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      className="hm-act"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Preview
                      <FiArrowUpRight size={13} aria-hidden="true" />
                    </a>
                  )}
                  {project.source && project.source !== "#" && (
                    <a
                      href={project.source}
                      className="hm-act"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source
                      <FiGithub size={13} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {hasMoreProjects && (
          <div className="mt-10">
            <button type="button" onClick={loadMoreProjects} className="hm-chip">
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
