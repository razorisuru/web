import { services } from "../data/services";

/**
 * Services as index rows, not a three-up icon-tile grid. The icon sits
 * inline with the heading rather than stacked above it, the rows are
 * hairline-separated, and the figures below run as one ruled strip of cells
 * with tabular numerals — a single object, not six floating counters.
 */
const ServicesSection = ({ id }) => {
  const stats = [
    { value: 50, label: "PROJECTS COMPLETED", suffix: "+" },
    { value: 15, label: "HAPPY CLIENTS", suffix: "+" },
    { value: 5, label: "AWARDS RECEIVED", suffix: "+" },
    { value: 2500, label: "COFFEE CUPS", suffix: "" },
    { value: 7200, label: "HOURS WORKED", suffix: "+" },
    { value: 99, label: "CRAZY IDEAS", suffix: "%" },
  ];

  return (
    <section id={id} className="hm-band hm-band--tight bg-paper-2">
      <div className="hm-shell">
        <div className="hm-head">
          <h2 className="hm-head__title">My Services</h2>
          <p className="hm-label">What I Do</p>
        </div>

        <ul className="hm-rows mb-16">
          {services.map((service) => (
            <li className="hm-row" key={service.title}>
              <div className="hm-row__inner md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
                <h3 className="flex items-center gap-3 text-xl">
                  <span className="hm-service__icon" aria-hidden="true">
                    {service.icon}
                  </span>
                  {service.title}
                </h3>
                <p className="m-0 max-w-[68ch] text-sm text-muted">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="hm-strip">
          {stats.map((stat) => (
            <div className="hm-strip__cell" key={stat.label}>
              <span className="hm-stat__num">
                {stat.value}
                {stat.suffix}
              </span>
              <span className="hm-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
