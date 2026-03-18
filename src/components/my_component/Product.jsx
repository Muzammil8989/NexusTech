import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useAnimation } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);
import { useInView } from "react-intersection-observer";
import { Button } from "../ui/button";
import productImg from "../../assets/product.png";
import computerImg from "../../assets/computer.png";
import { FaCheckCircle, FaQuoteLeft, FaStar } from "react-icons/fa";
import company1 from "../../assets/company1.png";
import company2 from "../../assets/company2.png";
import company3 from "../../assets/company3.png";
import company4 from "../../assets/company4.png";

const features = [
  "AI-powered analytics dashboard for real-time insights",
  "Seamless integrations with 100+ enterprise tools",
  "End-to-end encryption and enterprise-grade security",
  "24/7 dedicated support with guaranteed SLA",
];

function Product() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const imgRef = useRef(null);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // GSAP parallax on product image
  useEffect(() => {
    if (!imgRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        y: -35,
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

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} className="py-20 bg-neutralSilver dark:bg-background">

      {/* ── Product feature row ── */}
      <div className="px-4 md:px-10 lg:px-14 max-w-screen-2xl mx-auto mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Text side */}
          <div className="lg:w-1/2">
            <motion.span
              initial="hidden" animate={controls} variants={fadeUp} custom={0}
              className="inline-block text-[10px] font-bold tracking-widest uppercase text-BrandPrimary bg-BrandPrimary/10 border border-BrandPrimary/20 px-3 py-1 rounded-full mb-4"
            >
              Our Products
            </motion.span>

            <motion.h2
              initial="hidden" animate={controls} variants={fadeUp} custom={1}
              className="text-3xl md:text-4xl font-bold text-neutralDGrey dark:text-white leading-tight mb-4"
            >
              The unseen power of{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#2563EB,#0EA5E9)" }}>
                innovation
              </span>{" "}
              for growth and success.
            </motion.h2>

            <motion.p
              initial="hidden" animate={controls} variants={fadeUp} custom={2}
              className="text-neutralGrey dark:text-gray-400 text-sm leading-relaxed mb-6"
            >
              Our product suite is built to empower businesses at every stage. From startups to enterprises, we deliver the tools you need to move faster, grow smarter, and operate more efficiently.
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

          {/* Image side */}
          <motion.div
            initial="hidden" animate={controls} variants={fadeRight}
            className="lg:w-1/2 relative flex justify-center"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 rounded-full blur-3xl opacity-20"
                style={{ background: "radial-gradient(circle,#2563EB,#0EA5E9)" }} />
            </div>
            <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-BrandPrimary/10 shadow-2xl">
              <img ref={imgRef} src={productImg} alt="NexusTech Product" className="w-full max-w-md object-cover scale-110" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Testimonial row ── */}
      <div className="px-4 md:px-10 lg:px-14 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 bg-white dark:bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">

          {/* Computer image */}
          <motion.div
            initial="hidden" animate={controls} variants={fadeUp} custom={5}
            className="lg:w-1/3 flex justify-center"
          >
            <img src={computerImg} alt="NexusTech Platform" className="w-48 md:w-64 lg:w-full max-w-xs object-contain drop-shadow-xl" />
          </motion.div>

          {/* Quote + logos */}
          <motion.div
            initial="hidden" animate={controls} variants={fadeUp} custom={6}
            className="lg:w-2/3"
          >
            <FaQuoteLeft className="text-3xl text-BrandPrimary/30 mb-4" />

            <p className="text-neutralGrey dark:text-gray-300 text-sm leading-7 mb-6">
              "NexusTech transformed the way our team operates. Their platform gave us real-time visibility into our entire workflow, cut our delivery time in half, and the support team is always there when we need them. I can't imagine going back to how we worked before."
            </p>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-BrandPrimary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                JD
              </div>
              <div>
                <div className="text-sm font-bold text-neutralDGrey dark:text-white">John Doe</div>
                <div className="text-xs text-neutralGrey dark:text-gray-400">Head of Design · Company Name Ltd</div>
              </div>
              <div className="ml-auto flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xs" />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap pt-4 border-t border-border">
              <span className="text-xs text-neutralGrey dark:text-gray-400 font-medium">Trusted by:</span>
              {[company1, company2, company3, company4].map((logo, i) => (
                <img key={i} src={logo} alt="" className="h-6 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

export default Product;
