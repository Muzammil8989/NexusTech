import React, { useEffect } from "react";
import { FaBuildingColumns, FaUsersLine } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";
import company1 from "../../assets/company1.png";
import company2 from "../../assets/company2.png";
import company3 from "../../assets/company3.png";
import company4 from "../../assets/company4.png";
import company5 from "../../assets/company5.png";
import company6 from "../../assets/company6.png";
import company7 from "../../assets/company7.png";
import company8 from "../../assets/company8.png";
import { motion, useAnimation } from "framer-motion";
import CountUp from "../ui/CountUp";
import { useInView } from "react-intersection-observer";

const logos = [company1, company2, company3, company4, company5, company6, company7, company8];

const services = [
  {
    id: 1,
    icon: <FaBuildingColumns className="text-lg" />,
    title: "Enterprise Solutions",
    description: "Scalable, secure infrastructure tailored for large organizations to streamline operations.",
  },
  {
    id: 2,
    icon: <FaUsersLine className="text-lg" />,
    title: "Team Collaboration",
    description: "Powerful tools designed to unite your teams and accelerate project delivery.",
  },
  {
    id: 3,
    icon: <FaChartLine className="text-lg" />,
    title: "Strategic Growth",
    description: "Data-driven strategies to help you identify opportunities and grow confidently.",
  },
];

const statPills = [
  { value: "500+", label: "Global Clients" },
  { value: "12",   label: "Industries Served" },
  { value: "98%",  label: "Satisfaction Rate" },
];

function Services() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.45, delay: i * 0.1 },
    }),
  };

  return (
    <section
      ref={ref}
      className="min-h-screen lg:h-screen lg:overflow-hidden flex flex-col justify-center px-4 md:px-10 lg:px-14 max-w-screen-2xl mx-auto py-16 lg:py-6"
    >
      {/* ── Section header ── */}
      <motion.div className="text-center mb-5" initial="hidden" animate={controls} variants={fadeUp} custom={0}>
        <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-BrandPrimary bg-BrandPrimary/10 border border-BrandPrimary/20 px-3 py-1 rounded-full mb-2">
          Our Clients
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-neutralDGrey dark:text-white mb-1">
          Trusted by{" "}
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#2563EB,#0EA5E9)" }}>
            Industry Leaders
          </span>
        </h2>
        <p className="text-neutralGrey dark:text-gray-400 max-w-lg mx-auto text-xs">
          Partnered with Fortune 500 companies and fast-growing startups to deliver transformative solutions.
        </p>
      </motion.div>

      {/* ── Marquee logo strip ── */}
      <motion.div className="relative overflow-hidden py-2 mb-4" initial="hidden" animate={controls} variants={fadeUp} custom={1}>
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-neutralSilver dark:from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-neutralSilver dark:from-background to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee items-center">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 w-16 h-8 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src={logo} alt="client logo" className="max-h-full max-w-[36px] object-contain" style={{ mixBlendMode: "multiply" }} />
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Stat pills ── */}
      <motion.div className="flex flex-wrap justify-center gap-2 mb-5" initial="hidden" animate={controls} variants={fadeUp} custom={2}>
        {statPills.map((s, i) => (
          <div key={i} className="flex items-center gap-2 bg-white dark:bg-card border border-border rounded-xl px-4 py-2 shadow-sm">
            <CountUp value={s.value} className="text-base font-bold text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#2563EB,#0EA5E9)" }} />
            <span className="text-xs text-neutralGrey dark:text-gray-400">{s.label}</span>
          </div>
        ))}
      </motion.div>

      {/* ── Services sub-header ── */}
      <motion.div className="text-center mb-5" initial="hidden" animate={controls} variants={fadeUp} custom={3}>
        <h2 className="text-2xl sm:text-3xl font-bold text-neutralDGrey dark:text-white mb-1">
          Manage your entire business{" "}
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#2563EB,#0EA5E9)" }}>
            from one place
          </span>
        </h2>
        <p className="text-neutralGrey dark:text-gray-400 text-xs max-w-md mx-auto">
          Everything your business needs, unified in a single powerful platform.
        </p>
      </motion.div>

      {/* ── Service cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial="hidden" animate={controls} variants={fadeUp} custom={4 + i}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative bg-white dark:bg-card border border-border rounded-2xl p-4 shadow-sm hover:shadow-lg hover:border-BrandPrimary/40 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-BrandPrimary/5 to-BrandSecondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            <div className="relative z-10 w-10 h-10 rounded-xl bg-BrandPrimary/10 flex items-center justify-center text-BrandPrimary mb-3 group-hover:bg-BrandPrimary group-hover:text-white transition-all duration-300">
              {service.icon}
            </div>
            <div className="relative z-10">
              <h5 className="text-sm font-bold text-neutralDGrey dark:text-white mb-1">{service.title}</h5>
              <p className="text-xs text-neutralGrey dark:text-gray-400 leading-relaxed">{service.description}</p>
            </div>
            <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-BrandPrimary to-BrandSecondary transition-all duration-500 rounded-b-2xl" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
