import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "../../assets/about.png";
import { Button } from "../ui/button";
import { FaUsers, FaCheckCircle } from "react-icons/fa";
import { PiClubBold } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "../ui/CountUp";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: <FaUsers className="text-2xl" />, value: "2,000+", label: "Employees" },
  { icon: <PiClubBold className="text-2xl" />, value: "5,000+", label: "Projects" },
  { icon: <MdOutlinePayment className="text-2xl" />, value: "10,000+", label: "Transactions" },
  { icon: <CiBookmarkCheck className="text-2xl" />, value: "2,000+", label: "Bookmarks" },
];

const features = [
  "Cutting-edge technology tailored to your goals",
  "Dedicated expert team available around the clock",
  "Proven track record with Fortune 500 companies",
  "Transparent processes and measurable results",
];

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const imgRef = useRef(null);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // GSAP parallax on about image
  useEffect(() => {
    if (!imgRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.5, delay: i * 0.12 },
    }),
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} className="py-20 px-4 md:px-10 lg:px-14 max-w-screen-2xl mx-auto">

      {/* ── Top: image + text ── */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">

        {/* Image */}
        <motion.div
          initial="hidden" animate={controls} variants={fadeLeft}
          className="lg:w-1/2 relative flex justify-center"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 rounded-full blur-3xl opacity-20"
              style={{ background: "radial-gradient(circle,#2563EB,#0EA5E9)" }} />
          </div>
          <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-BrandPrimary/10 shadow-2xl">
            <img ref={imgRef} src={aboutImg} alt="About NexusTech" className="w-full max-w-md object-cover scale-110" />
          </div>
          {/* Decorative badge */}
          <div className="absolute -bottom-4 -right-4 lg:-right-6 bg-BrandPrimary text-white rounded-2xl px-4 py-3 shadow-xl z-20">
            <div className="text-2xl font-bold">10+</div>
            <div className="text-xs opacity-90">Years of Excellence</div>
          </div>
        </motion.div>

        {/* Text */}
        <div className="lg:w-1/2">
          <motion.span
            initial="hidden" animate={controls} variants={fadeUp} custom={0}
            className="inline-block text-[10px] font-bold tracking-widest uppercase text-BrandPrimary bg-BrandPrimary/10 border border-BrandPrimary/20 px-3 py-1 rounded-full mb-4"
          >
            About Us
          </motion.span>

          <motion.h2
            initial="hidden" animate={controls} variants={fadeUp} custom={1}
            className="text-3xl md:text-4xl font-bold text-neutralDGrey dark:text-white leading-tight mb-4"
          >
            The unseen power of{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#2563EB,#0EA5E9)" }}>
              design
            </span>{" "}
            for growth and success.
          </motion.h2>

          <motion.p
            initial="hidden" animate={controls} variants={fadeUp} custom={2}
            className="text-neutralGrey dark:text-gray-400 text-sm leading-relaxed mb-6"
          >
            We are a next-generation tech agency dedicated to helping businesses unlock their full potential. Through innovative design, strategic thinking, and powerful technology, we craft solutions that make a real difference.
          </motion.p>

          <motion.ul
            initial="hidden" animate={controls} variants={fadeUp} custom={3}
            className="space-y-3 mb-8"
          >
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-neutralGrey dark:text-gray-400">
                <FaCheckCircle className="text-BrandPrimary mt-0.5 flex-shrink-0" />
                {f}
              </li>
            ))}
          </motion.ul>

          <motion.div initial="hidden" animate={controls} variants={fadeUp} custom={4}>
            <Button className="bg-BrandPrimary hover:bg-BrandPrimary/90 text-white px-6 shadow-md shadow-BrandPrimary/30" asChild>
              <a href="#">Learn More</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* ── Stats banner ── */}
      <motion.div
        initial="hidden" animate={controls} variants={fadeUp} custom={5}
        className="rounded-3xl overflow-hidden"
        style={{ background: "linear-gradient(135deg,#1E40AF 0%,#2563EB 50%,#0EA5E9 100%)" }}
      >
        <div className="px-6 md:px-12 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Helping Companies of All Sizes.
              </h3>
              <p className="text-blue-100 text-sm">Trusted by leading companies worldwide.</p>
            </div>
            <p className="text-blue-100 text-sm max-w-xs">
              We reached here with our hard work and determination over the past decade.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial="hidden" animate={controls} variants={fadeUp} custom={6 + i}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-white"
              >
                <div className="mb-3 opacity-80">{s.icon}</div>
                <div className="text-2xl font-bold mb-1"><CountUp value={s.value} /></div>
                <div className="text-xs text-blue-100">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default About;
