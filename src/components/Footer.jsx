import React from "react";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";
import ScrollLink from "./ScrollLink";

const Footer = ({ ScrollLink: PropScrollLink }) => {
  const currentYear = new Date().getFullYear();
  // Use passed ScrollLink or import it if not passed (though here we import it to be safe, but App passes it too)
  // Actually App passes ScrollLink to Footer, but we can also use the imported one if we want to be self-contained.
  // However, to match the original code structure where it was passed, I'll keep it as prop or use local.
  // The original code passed ScrollLink to Footer.
  // But since we have ScrollLink as a separate component now, we can just use it directly if we want.
  // Let's use the imported ScrollLink to avoid prop drilling if possible, but for compatibility let's accept the prop or fallback.
  // Actually, in the original code, ScrollLink was defined in App and passed down.
  // Now ScrollLink is a standalone component. So we can just import it.
  // I will use the imported ScrollLink and ignore the prop if I can, or just use the prop.
  // Let's use the imported one for better modularity.

  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-xl font-bold mb-2">
              <ScrollLink to="#hero" className="cursor-pointer">
                <img
                  src="/RAZOR2.png"
                  alt="Hero background"
                  className="w-10 h-10 object-cover"
                />
              </ScrollLink>
            </div>
            <p className="text-sm text-gray-500">
              © {currentYear} Isuru Bandara. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/razorisuru"
              target="_blank"
              className="text-gray-500 hover:text-indigo-500"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/razor-isuru/"
              target="_blank"
              className="text-gray-500 hover:text-indigo-500"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com/razorisuru"
              target="_blank"
              className="text-gray-500 hover:text-indigo-500"
            >
              <FiTwitter size={20} />
            </a>
            <a
              href="https://www.youtube.com/@razor_dev"
              target="_blank"
              className="text-gray-500 hover:text-indigo-500"
            >
              <FiYoutube size={20} />
            </a>
            <a
              href="https://www.facebook.com/razor.isuru"
              target="_blank"
              className="text-gray-500 hover:text-indigo-500"
            >
              <FiFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/razor_isuru"
              target="_blank"
              className="text-gray-500 hover:text-indigo-500"
            >
              <FiInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
