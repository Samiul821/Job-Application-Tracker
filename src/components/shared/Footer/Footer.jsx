import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaArrowRight, FaEnvelope } from "react-icons/fa6";
import { MdAutoAwesome } from "react-icons/md";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email.trim()) {
      setSubscribed(true);
      setEmail("");

      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  const quickLinks = ["Home", "Features", "Dashboard", "Pricing", "Contact"];

  const resources = [
    "Blog",
    "Career Tips",
    "Resume Builder",
    "Interview Guide",
    "FAQ",
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "Github",
      link: "#",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      link: "#",
    },
    {
      icon: FaFacebook,
      label: "Facebook",
      link: "#",
    },
    {
      icon: FaTwitter,
      label: "Twitter",
      link: "#",
    },
  ];

  return (
    <footer className="relative bg-background text-text-primary">
      {/* Top Gradient Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            py-8
            sm:py-10
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >
          {/* Brand Section */}

          <div>
            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              className="
                flex
                items-center
                gap-2
                mb-4
                cursor-pointer
              "
            >
              <motion.div
                whileHover={{
                  rotate: 10,
                }}
                className="
                  w-9
                  h-9
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  bg-gradient-to-br
                  from-[#5B3DF5]
                  via-[#7C3AED]
                  to-[#00C2FF]
                  text-white
                  shadow-lg
                "
              >
                <MdAutoAwesome size={20} />
              </motion.div>

              <div className="leading-none">
                <h1
                  className="
                    text-lg
                    font-extrabold
                    bg-gradient-to-r
                    from-[#5B3DF5]
                    via-[#7C3AED]
                    to-[#00C2FF]
                    bg-clip-text
                    text-transparent
                  "
                >
                  JobTrack
                </h1>

                <span
                  className="
                    text-[9px]
                    text-gray-400
                    font-semibold
                    tracking-[3px]
                  "
                >
                  PRO
                </span>
              </div>
            </motion.div>

            <p
              className="
                text-text-secondary
                text-xs
                leading-relaxed
                max-w-xs
                mb-4
              "
            >
              Track every application, manage interviews, stay organized, and
              land your dream job faster.
            </p>

            {/* Social Icons */}

            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.link}
                    aria-label={social.label}
                    className="
                        w-9
                        h-9
                        rounded-lg
                        bg-surface-2
                        flex
                        items-center
                        justify-center
                        text-text-secondary
                        transition-all
                        duration-300
                        hover:bg-primary
                        hover:text-white
                        hover:-translate-y-1
                      "
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}

          <div
            className="
              lg:col-span-2
              grid
              grid-cols-2
              gap-6
            "
          >
            <div>
              <h4
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  mb-3
                "
              >
                Quick Links
              </h4>

              <ul className="space-y-2">
                {quickLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="
                          text-text-secondary
                          text-sm
                          hover:text-primary
                          transition
                          flex
                          items-center
                          gap-1
                          group
                        "
                    >
                      {item}

                      <FaArrowRight
                        size={10}
                        className="
                            opacity-0
                            group-hover:opacity-100
                            transition
                          "
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  mb-3
                "
              >
                Resources
              </h4>

              <ul className="space-y-2">
                {resources.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="
                          text-text-secondary
                          text-sm
                          hover:text-primary
                          transition
                          flex
                          items-center
                          gap-1
                          group
                        "
                    >
                      {item}

                      <FaArrowRight
                        size={10}
                        className="
                            opacity-0
                            group-hover:opacity-100
                            transition
                          "
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}

          <div>
            <div
              className="
                bg-surface
                rounded-xl
                p-4
                border
                border-border
                shadow-sm
                hover:shadow-md
                transition
              "
            >
              <h4
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  mb-2
                "
              >
                Stay Updated
              </h4>

              <p
                className="
                  text-text-secondary
                  text-xs
                  mb-3
                "
              >
                Get job tips and insights delivered to your inbox.
              </p>

              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <FaEnvelope
                    size={13}
                    className="
                      absolute
                      left-3
                      top-1/2
                      -translate-y-1/2
                      text-text-muted
                    "
                  />

                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="
                      w-full
                      pl-8
                      pr-3
                      py-2
                      bg-surface-2
                      border
                      border-border
                      rounded-lg
                      text-xs
                      focus:outline-none
                      focus:ring-2
                      focus:ring-primary
                    "
                  />
                </div>

                <button
                  className={`
                    w-full
                    py-2
                    rounded-lg
                    text-xs
                    font-semibold
                    transition
                    ${
                      subscribed
                        ? "bg-success text-white"
                        : "bg-gradient-to-r from-primary to-secondary text-white hover:scale-105"
                    }
                  `}
                >
                  {subscribed ? "✓ Subscribed!" : "Subscribe"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="h-px bg-border" />

        <div
          className="
            py-4
            flex
            flex-col
            sm:flex-row
            justify-between
            gap-3
          "
        >
          <div>
            <p
              className="
                text-text-muted
                text-xs
              "
            >
              © {new Date().getFullYear()} JobTrack Pro. All rights reserved.
            </p>

            <p className="text-text-muted text-xs">
              Developed with ❤️ by{" "}
              <a
                href="https://samiul-portfolio-599b19.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-primary font-semibold hover:underline cursor-pointer">
                  Samiul Islam
                </span>
              </a>
            </p>
          </div>

          <div
            className="
              flex
              flex-wrap
              gap-5
            "
          >
            {["Privacy Policy", "Terms & Conditions", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="
                    text-text-muted
                    text-xs
                    hover:text-primary
                    transition
                  "
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
