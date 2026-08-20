import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import ContactForm from "./ContactForm";

const channels = [
  { label: "Mobile", value: "0766008527", icon: FiPhone, href: "tel:0766008527" },
  {
    label: "Email",
    value: "isurubandara318@gmail.com",
    icon: FiMail,
    href: "mailto:isurubandara318@gmail.com",
  },
  { label: "Location", value: "Colombo, Sri Lanka", icon: FiMapPin, href: null },
];

const socials = [
  { name: "GitHub", href: "https://github.com/razorisuru", icon: FiGithub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/razor-isuru/",
    icon: FiLinkedin,
  },
  { name: "Twitter", href: "https://twitter.com/razorisuru", icon: FiTwitter },
];

/**
 * The closing band — the page's one heavy move, carried by the deepest
 * neutral step and a 2px ink rule top and bottom rather than by a flood of
 * accent. The form is the primary action, so it takes the wider column.
 */
const ContactSection = ({ theme, id }) => {
  return (
    <section id={id} className="hm-band hm-band--normal hm-close">
      <div className="hm-shell">
        <div className="hm-head">
          <h2 className="hm-head__title">Contact Me</h2>
          <p className="hm-label">Get In Touch</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] lg:gap-16">
          <div>
            <h3 className="mb-4 text-xl">Let&rsquo;s Talk About Your Project</h3>
            <p className="mb-10 max-w-[52ch] text-sm text-muted">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out using the contact form or through my social
              media profiles.
            </p>

            <dl className="hm-spec mb-8">
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <div className="hm-spec__row" key={channel.label}>
                    <dt className="hm-spec__key hm-label flex items-center gap-2">
                      <Icon size={13} aria-hidden="true" />
                      {channel.label}
                    </dt>
                    <dd className="hm-spec__val">
                      {channel.href ? (
                        <a href={channel.href} className="hm-tlink">
                          {channel.value}
                        </a>
                      ) : (
                        channel.value
                      )}
                    </dd>
                  </div>
                );
              })}
            </dl>

            <ul className="flex flex-wrap gap-6 list-none m-0 p-0">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      className="hm-act"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={14} aria-hidden="true" />
                      {social.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="border-t border-rule pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16">
            <ContactForm theme={theme} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
