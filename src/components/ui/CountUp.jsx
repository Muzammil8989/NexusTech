import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Parses "2,000+" → { num: 2000, suffix: "+", hasComma: true } */
function parse(str) {
  const suffix = str.replace(/[\d,. ]/g, "");
  const num = parseFloat(str.replace(/[^0-9.]/g, ""));
  const hasComma = str.includes(",");
  return { num, suffix, hasComma };
}

/**
 * Renders a number that counts up from 0 when scrolled into view.
 * @param {string} value  - display string, e.g. "2,000+" or "98%"
 * @param {string} className
 * @param {object} style
 */
function CountUp({ value, className, style }) {
  const ref = useRef(null);
  const { num, suffix, hasComma } = parse(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { v: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        v: num,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate() {
          const n = Math.round(obj.v);
          el.textContent = (hasComma ? n.toLocaleString() : n) + suffix;
        },
      });
    });

    return () => ctx.revert();
  }, [num, suffix, hasComma]);

  return (
    <span ref={ref} className={className} style={style}>
      {value}
    </span>
  );
}

export default CountUp;
