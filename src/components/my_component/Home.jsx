import React, { useState, useEffect } from "react";
import CountUp from "../ui/CountUp";
import { motion, AnimatePresence } from "framer-motion";
import banner from "../../assets/Banner.png";
import { Button } from "../ui/button";
import { FaArrowRight, FaPlay, FaStar, FaRocket, FaCogs, FaChartLine } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";

const slides = [
  {
    id: 0,
    badge: "Next-Gen Tech Solutions",
    title: "Transform Your",
    highlight: "Business",
    subtitle: "with Innovative Solutions",
    description:
      "Unlock your business's potential with tailored solutions designed to drive growth and efficiency.",
    cta: "Get Started",
    cardIcon: <FaRocket />,
    cardTitle: "Business Growth",
    cardDesc: "Innovative strategies",
  },
  {
    id: 1,
    badge: "Advanced Technologies",
    title: "Revolutionize Your",
    highlight: "Workflow",
    subtitle: "with Advanced Technologies",
    description:
      "Streamline your operations with cutting-edge technologies that enhance productivity and efficiency.",
    cta: "Learn More",
    cardIcon: <FaCogs />,
    cardTitle: "Smart Workflow",
    cardDesc: "Cutting-edge tech",
  },
  {
    id: 2,
    badge: "Strategic Insights",
    title: "Elevate Your",
    highlight: "Brand",
    subtitle: "with Strategic Insights",
    description:
      "Discover new ways to enhance your brand's visibility and stand out in a competitive market.",
    cta: "Contact Us",
    cardIcon: <FaChartLine />,
    cardTitle: "Brand Elevation",
    cardDesc: "Strategic solutions",
  },
];

const stats = [
  { value: "2,000+", label: "Happy Clients" },
  { value: "5,000+", label: "Projects Done" },
  { value: "10+", label: "Years Experience" },
];

const SLIDE_DURATION = 4000;

const cv = {
  enter: { opacity: 0, y: 14 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -14 },
};

const Home = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % slides.length), SLIDE_DURATION);
    return () => clearInterval(t);
  }, [active]);

  const slide = slides[active];

  return (
    <div className="relative min-h-screen lg:h-screen overflow-hidden bg-neutralSilver flex items-center">

      {/* Background orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-BrandPrimary opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 rounded-full bg-BrandSecondary opacity-10 blur-3xl pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #2563EB 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative w-full max-w-screen-2xl mx-auto px-4 md:px-10 lg:px-14 pt-20 pb-8 lg:pt-20 lg:pb-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">

          {/* ── Left: content ── */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">

            {/* Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + "-b"}
                variants={cv} initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.35 }}
                className="inline-flex items-center gap-2 bg-BrandPrimary/10 border border-BrandPrimary/30 text-BrandPrimary px-3 py-1.5 rounded-full text-xs font-semibold mb-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-BrandPrimary animate-pulse" />
                {slide.badge}
              </motion.div>
            </AnimatePresence>

            {/* Headline */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={slide.id + "-h"}
                variants={cv} initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.4, delay: 0.04 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutralDGrey dark:text-white leading-tight mb-3"
              >
                {slide.title}{" "}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#2563EB,#0EA5E9)" }}>
                  {slide.highlight}
                </span>{" "}
                {slide.subtitle}
              </motion.h1>
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={slide.id + "-d"}
                variants={cv} initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.4, delay: 0.08 }}
                className="text-neutralGrey dark:text-gray-400 text-sm leading-relaxed mb-5 max-w-lg mx-auto lg:mx-0"
              >
                {slide.description}
              </motion.p>
            </AnimatePresence>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-3 justify-center lg:justify-start mb-5 flex-wrap">
              <AnimatePresence mode="wait">
                <motion.div key={slide.id + "-cta"} variants={cv} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3, delay: 0.1 }}>
                  <Button size="default" className="bg-BrandPrimary hover:bg-BrandPrimary/90 text-white gap-2 px-5 shadow-md shadow-BrandPrimary/30">
                    {slide.cta} <FaArrowRight className="text-xs" />
                  </Button>
                </motion.div>
              </AnimatePresence>
              <Button size="default" variant="outline" className="border-BrandPrimary text-BrandPrimary hover:bg-BrandPrimary hover:text-white gap-2 px-5 transition-colors duration-200">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-BrandPrimary/10">
                  <FaPlay className="text-[8px] text-BrandPrimary group-hover:text-white" />
                </div>
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-5 justify-center lg:justify-start mb-6 lg:mb-0"
            >
              {stats.map((s, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-xl font-bold text-neutralDGrey dark:text-white"><CountUp value={s.value} /></div>
                  <div className="text-xs text-neutralGrey dark:text-gray-400">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: image + carousel cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col items-center"
          >
            {/* Image — hidden on small screens */}
            <div className="relative hidden sm:flex justify-center mb-8 lg:mb-6">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full blur-3xl opacity-25"
                  style={{ background: "radial-gradient(circle,#2563EB,#0EA5E9)" }} />
              </div>
              <div className="relative">
                <img src={banner} alt="NexusTech" className="w-52 md:w-64 lg:w-[280px] drop-shadow-2xl select-none" draggable={false} />

                {/* Floating card top-left */}
                <motion.div
                  animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 -left-4 bg-white dark:bg-card border border-border shadow-xl rounded-xl px-3 py-2 flex items-center gap-2"
                >
                  <div className="w-7 h-7 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                    <HiCheckCircle className="text-green-600 text-sm" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-neutralDGrey dark:text-white whitespace-nowrap">99.9% Uptime</div>
                    <div className="text-[9px] text-neutralGrey dark:text-gray-400">Guaranteed SLA</div>
                  </div>
                </motion.div>

                {/* Floating card bottom-right */}
                <motion.div
                  animate={{ y: [0, 10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-3 -right-4 bg-white dark:bg-card border border-border shadow-xl rounded-xl px-3 py-2 flex items-center gap-2"
                >
                  <div className="w-7 h-7 rounded-lg bg-BrandPrimary/10 flex items-center justify-center flex-shrink-0">
                    <FaStar className="text-BrandPrimary text-xs" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-neutralDGrey dark:text-white whitespace-nowrap">500+ Clients</div>
                    <div className="text-[9px] text-neutralGrey dark:text-gray-400">Worldwide</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Carousel indicator cards */}
            <div className="flex gap-2 w-full justify-center max-w-sm sm:max-w-md lg:max-w-none">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`relative flex-1 text-left rounded-xl px-3 py-2.5 border transition-all duration-300 overflow-hidden cursor-pointer
                    ${active === i
                      ? "bg-BrandPrimary/10 border-BrandPrimary shadow-md shadow-BrandPrimary/20 dark:bg-BrandPrimary/20"
                      : "bg-white dark:bg-card border-border hover:border-BrandPrimary/40"
                    }`}
                >
                  {active === i && (
                    <motion.div
                      key={active}
                      className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-BrandPrimary to-BrandSecondary"
                      initial={{ width: "0%" }} animate={{ width: "100%" }}
                      transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                    />
                  )}
                  <div className={`text-base mb-1 ${active === i ? "text-BrandPrimary" : "text-neutralGrey dark:text-gray-400"}`}>
                    {s.cardIcon}
                  </div>
                  <div className={`text-[11px] font-bold leading-tight ${active === i ? "text-BrandPrimary dark:text-BrandSecondary" : "text-neutralDGrey dark:text-white"}`}>
                    {s.cardTitle}
                  </div>
                  <div className="text-[10px] text-neutralGrey dark:text-gray-400 mt-0.5 hidden sm:block">
                    {s.cardDesc}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Home;
