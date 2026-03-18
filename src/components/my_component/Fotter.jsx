import React, { useEffect } from "react";
import Logo from "../../assets/Logo.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BsFacebook, BsGithub, BsInstagram, BsTwitter, BsLinkedin,
} from "react-icons/bs";

const links = {
  Company: ["About Us", "Careers", "Blog", "Press"],
  Services: ["Enterprise Solutions", "Team Collaboration", "Strategic Growth", "Integrations"],
  Resources: ["Documentation", "API Reference", "Status Page", "Support Center"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
};

const socials = [
  { icon: <BsTwitter />, href: "#" },
  { icon: <BsLinkedin />, href: "#" },
  { icon: <BsFacebook />, href: "#" },
  { icon: <BsInstagram />, href: "#" },
  { icon: <BsGithub />, href: "#" },
];

function Fotter() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.45, delay: i * 0.08 },
    }),
  };

  return (
    <footer ref={ref} className="bg-white dark:bg-card border-t border-border">
      <div className="px-4 md:px-10 lg:px-14 max-w-screen-2xl mx-auto pt-10 md:pt-14 pb-6">

        {/* ── Top: brand + links ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-10 md:mb-12">

          {/* Brand column */}
          <motion.div
            initial="hidden" animate={controls} variants={fadeUp} custom={0}
            className="col-span-2 md:col-span-3 lg:col-span-1"
          >
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src={Logo} alt="NexusTech" className="w-8 h-8 rounded-full object-cover" />
              <span className="font-bold text-base text-neutralDGrey dark:text-white uppercase tracking-wide">
                NexusTech
              </span>
            </a>
            <p className="text-xs text-neutralGrey dark:text-gray-400 leading-relaxed mb-5">
              Empowering businesses with next-generation technology solutions since 2015.
            </p>
            <div className="flex items-center flex-wrap gap-2 md:gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-border text-neutralGrey dark:text-gray-400 hover:text-BrandPrimary hover:border-BrandPrimary/40 hover:bg-BrandPrimary/5 transition-all text-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items], gi) => (
            <motion.div
              key={group}
              initial="hidden" animate={controls} variants={fadeUp} custom={gi + 1}
            >
              <h6 className="text-[11px] font-bold tracking-widest uppercase text-neutralDGrey dark:text-white mb-4">
                {group}
              </h6>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-xs text-neutralGrey dark:text-gray-400 hover:text-BrandPrimary dark:hover:text-BrandSecondary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <motion.div
          initial="hidden" animate={controls} variants={fadeUp} custom={6}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-border"
        >
          <p className="text-[11px] text-neutralGrey dark:text-gray-400">
            © {new Date().getFullYear()} NexusTech™. All rights reserved.
          </p>
          <p className="text-[11px] text-neutralGrey dark:text-gray-400">
            Built with ♥ for businesses worldwide.
          </p>
        </motion.div>

      </div>
    </footer>
  );
}

export default Fotter;
