import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "../ui/button";
import { FaArrowRight, FaChevronDown, FaEnvelope } from "react-icons/fa";

const faqs = [
  {
    q: "How quickly can we get started?",
    a: "Onboarding typically takes less than 48 hours. Our team handles the setup, migration, and initial configuration so you can hit the ground running without any downtime.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes — we offer a 14-day free trial with full access to all features, no credit card required. You can invite your entire team and explore every capability risk-free.",
  },
  {
    q: "What integrations do you support?",
    a: "We integrate with 100+ tools including Slack, Salesforce, HubSpot, Jira, Notion, Google Workspace, and more. Custom API integrations are available on Enterprise plans.",
  },
  {
    q: "How does your enterprise security work?",
    a: "NexusTech is SOC 2 Type II certified and supports SSO, SAML 2.0, role-based access control, audit logs, and end-to-end encryption. We also offer dedicated cloud deployments.",
  },
  {
    q: "Can I cancel or change my plan at any time?",
    a: "Absolutely. Plans can be upgraded, downgraded, or cancelled at any point directly from your dashboard. There are no lock-in contracts on monthly plans.",
  },
];

function FAQItem({ item, index, controls }) {
  const [open, setOpen] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: (i = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.45, delay: i * 0.08 },
    }),
  };

  return (
    <motion.div
      initial="hidden" animate={controls} variants={fadeUp} custom={index + 2}
      className="border border-border rounded-2xl overflow-hidden bg-white dark:bg-card"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-BrandPrimary/5 transition-colors"
      >
        <span className="text-sm font-semibold text-neutralDGrey dark:text-white">{item.q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 text-BrandPrimary"
        >
          <FaChevronDown className="text-xs" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 text-xs text-neutralGrey dark:text-gray-400 leading-relaxed border-t border-border pt-3">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Newsletter() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  };

  return (
    <section ref={ref} id="faq" className="py-14 md:py-20 bg-neutralSilver dark:bg-background">
      <div className="px-4 md:px-10 lg:px-14 max-w-screen-2xl mx-auto">

        {/* ── FAQ section ── */}
        <motion.div
          className="text-center mb-10"
          initial="hidden" animate={controls} variants={fadeUp} custom={0}
        >
          <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-BrandPrimary bg-BrandPrimary/10 border border-BrandPrimary/20 px-3 py-1 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutralDGrey dark:text-white mb-3">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#2563EB,#0EA5E9)" }}>
              Questions
            </span>
          </h2>
          <p className="text-neutralGrey dark:text-gray-400 text-sm max-w-lg mx-auto">
            Everything you need to know about NexusTech. Can't find your answer?{" "}
            <a href="#" className="text-BrandPrimary dark:text-BrandSecondary font-medium hover:underline">Chat with us.</a>
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3 mb-12 md:mb-20">
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} controls={controls} />
          ))}
        </div>

        {/* ── CTA / Newsletter banner ── */}
        <motion.div
          initial="hidden" animate={controls} variants={fadeUp} custom={8}
          className="relative overflow-hidden rounded-3xl px-5 sm:px-8 py-10 sm:py-14 text-center"
          style={{ background: "linear-gradient(135deg,#1E40AF 0%,#2563EB 50%,#0EA5E9 100%)" }}
        >
          {/* Background orbs */}
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-blue-200 bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-4">
              Stay in the loop
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 leading-snug">
              Ready to transform your business?<br className="hidden sm:block" /> Start your free trial today.
            </h3>
            <p className="text-blue-100 text-sm mb-8 max-w-md mx-auto">
              Join 2,000+ companies already using NexusTech to scale smarter. No credit card required.
            </p>

            {/* Email input row */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
            >
              <div className="flex-1 flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 h-11">
                <FaEnvelope className="text-white/60 flex-shrink-0 text-xs" />
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="bg-transparent text-sm text-white placeholder-white/50 outline-none w-full h-full"
                />
              </div>
              <Button
                type="submit"
                className="bg-white text-BrandPrimary hover:bg-white/90 font-bold px-6 h-11 shadow-lg shadow-black/20 gap-2 flex-shrink-0"
              >
                Get Started <FaArrowRight className="text-xs" />
              </Button>
            </form>

            <p className="text-blue-200 text-[11px] mt-4">
              14-day free trial · No credit card · Cancel anytime
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Newsletter;
