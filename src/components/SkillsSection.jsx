import { skills } from "../data/skills";

/**
 * F3 · Tabular spec sheet. Twelve rows on hairlines, two columns from 48rem.
 * The level is a bar on the rule track plus a tabular figure — no gradient,
 * no shimmer sweep, and no scroll reveal: the numbers are data, so they are
 * simply there when you arrive.
 *
 * `theme` is still consumed here — the data file hands some icons back as a
 * function of the current band (see src/data/skills.jsx).
 */
const SkillsSection = ({ theme, id }) => {
  return (
    <section id={id} className="hm-band hm-band--tight bg-paper-2">
      <div className="hm-shell">
        <div className="hm-head">
          <h2 className="hm-head__title">Technical Expertise</h2>
          <p className="hm-label">My Skills</p>
        </div>

        <div className="hm-skills">
          {skills.map((skill) => (
            <div className="hm-skill" key={skill.name}>
              <span className="hm-skill__icon" aria-hidden="true">
                {skill.needsTheme ? skill.icon(theme) : skill.icon}
              </span>
              <h3 className="hm-skill__name">{skill.name}</h3>
              <span className="hm-skill__pct">♾️</span>
              {/* <div
                className="hm-meter hm-skill__meter"
                role="meter"
                aria-label={`${skill.name} proficiency`}
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="hm-meter__fill"
                  style={{ width: `${skill.level}%` }}
                />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
