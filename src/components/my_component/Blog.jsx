import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRight, FaCalendarAlt, FaClock } from "react-icons/fa";

const posts = [
  {
    id: 1,
    category: "Technology",
    date: "Mar 12, 2025",
    readTime: "5 min read",
    title: "How AI is Reshaping Enterprise Operations in 2025",
    excerpt:
      "Discover how AI-powered automation is transforming back-office workflows, reducing costs, and unlocking new growth opportunities for large organizations.",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop&q=80",
    accent: "#2563EB",
  },
  {
    id: 2,
    category: "Design",
    date: "Feb 28, 2025",
    readTime: "4 min read",
    title: "Building a Design System That Scales With Your Team",
    excerpt:
      "A practical guide to creating consistent, maintainable design systems that keep your product cohesive as your team grows from 5 to 500 engineers.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&auto=format&fit=crop&q=80",
    accent: "#0EA5E9",
  },
  {
    id: 3,
    category: "Growth",
    date: "Feb 14, 2025",
    readTime: "6 min read",
    title: "Data-Driven Strategies to Double Your Revenue Pipeline",
    excerpt:
      "Learn how leading SaaS companies use analytics, segmentation, and targeted outreach to identify high-value prospects and convert them faster.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    accent: "#2563EB",
  },
];

const categoryColors = {
  Technology: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  Design: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
  Growth: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
};

function Blog() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.5, delay: i * 0.12 },
    }),
  };

  return (
    <section ref={ref} className="py-14 md:py-20 px-4 md:px-10 lg:px-14 max-w-screen-2xl mx-auto">

      {/* ── Section header ── */}
      <motion.div
        className="text-center mb-8 md:mb-12"
        initial="hidden" animate={controls} variants={fadeUp} custom={0}
      >
        <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-BrandPrimary bg-BrandPrimary/10 border border-BrandPrimary/20 px-3 py-1 rounded-full mb-4">
          Our Blog
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutralDGrey dark:text-white mb-3">
          Insights &amp;{" "}
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#2563EB,#0EA5E9)" }}>
            Latest News
          </span>
        </h2>
        <p className="text-neutralGrey dark:text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
          Stay ahead with expert articles on technology, design, and business growth — curated by our team of specialists.
        </p>
      </motion.div>

      {/* ── Cards grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {posts.map((post, i) => (
          <motion.article
            key={post.id}
            initial="hidden" animate={controls} variants={fadeUp} custom={1 + i}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group bg-white dark:bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-BrandPrimary/30 transition-all duration-300 cursor-pointer flex flex-col"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-48">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <span className={`absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${categoryColors[post.category]}`}>
                {post.category}
              </span>
            </div>

            {/* Body */}
            <div className="p-5 flex flex-col flex-1">
              {/* Meta */}
              <div className="flex items-center gap-4 text-[11px] text-neutralGrey dark:text-gray-400 mb-3">
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="text-BrandPrimary/60" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <FaClock className="text-BrandPrimary/60" /> {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-neutralDGrey dark:text-white leading-snug mb-2 group-hover:text-BrandPrimary dark:group-hover:text-BrandSecondary transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-xs text-neutralGrey dark:text-gray-400 leading-relaxed flex-1">
                {post.excerpt}
              </p>

              {/* Read more */}
              <div className="mt-4 pt-4 border-t border-border">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-BrandPrimary dark:text-BrandSecondary hover:gap-2.5 transition-all duration-200"
                >
                  Read Article <FaArrowRight className="text-[10px]" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* ── View all button ── */}
      <motion.div
        initial="hidden" animate={controls} variants={fadeUp} custom={4}
        className="text-center mt-10"
      >
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-semibold text-BrandPrimary dark:text-BrandSecondary border border-BrandPrimary/30 dark:border-BrandSecondary/30 px-6 py-2.5 rounded-full hover:bg-BrandPrimary/5 transition-colors"
        >
          View All Articles <FaArrowRight className="text-xs" />
        </a>
      </motion.div>

    </section>
  );
}

export default Blog;
