import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/Logo.png";

const NAV_LINKS = [
  { label: "Home",         to: "home" },
  { label: "Services",     to: "services" },
  { label: "About",        to: "about" },
  { label: "Products",     to: "products" },
  { label: "Testimonials", to: "testimonials" },
  { label: "FAQ",          to: "faq" },
];

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1200);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    const onResize = () => setIsMobile(window.innerWidth < 1200);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          inset: "0 0 auto 0",
          zIndex: 9999,
          background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.80)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(37,99,235,0.12)",
          boxShadow: scrolled ? "0 2px 20px rgba(37,99,235,0.10)" : "none",
          transition: "all .3s ease",
        }}
      >
        {/* gradient accent */}
        <div style={{ height: 3, background: "linear-gradient(90deg,#2563EB,#0EA5E9)" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <img src={Logo} alt="logo" style={{ width: 38, height: 38, borderRadius: "50%", objectFit: "cover", border: "2px solid #2563EB" }} />
            <span style={{ fontWeight: 800, fontSize: 17, letterSpacing: 1, background: "linear-gradient(135deg,#1E293B 40%,#2563EB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              NEXUSTECH
            </span>
          </a>

          {/* Desktop links — only rendered on desktop */}
          {!isMobile && (
            <ul style={{ display: "flex", gap: 4, listStyle: "none", margin: 0, padding: 0 }}>
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to} smooth duration={500}
                    style={{ padding: "7px 14px", borderRadius: 8, fontSize: 14, fontWeight: 500, color: "#475569", cursor: "pointer", display: "block", transition: "all .2s" }}
                    onMouseEnter={e => Object.assign(e.currentTarget.style, { color: "#2563EB", background: "rgba(37,99,235,0.07)" })}
                    onMouseLeave={e => Object.assign(e.currentTarget.style, { color: "#475569", background: "transparent" })}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* Desktop CTA — only rendered on desktop */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <a href="#" style={{ fontSize: 14, fontWeight: 500, color: "#475569", textDecoration: "none" }}
                onMouseEnter={e => e.target.style.color = "#2563EB"}
                onMouseLeave={e => e.target.style.color = "#475569"}>
                Login
              </a>
              <a href="#" style={{ padding: "8px 20px", borderRadius: 8, fontSize: 14, fontWeight: 600, color: "#fff", textDecoration: "none", background: "linear-gradient(135deg,#2563EB,#0EA5E9)", boxShadow: "0 4px 14px rgba(37,99,235,.30)", transition: "opacity .2s" }}
                onMouseEnter={e => e.currentTarget.style.opacity = ".85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                Sign Up
              </a>
            </div>
          )}

          {/* Hamburger — only rendered on mobile */}
          {isMobile && (
            <button
              onClick={() => setOpen(!open)}
              aria-label="menu"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                borderRadius: 10,
                border: "2px solid #2563EB",
                background: open ? "rgba(37,99,235,.10)" : "rgba(37,99,235,.05)",
                cursor: "pointer",
                padding: 0,
                outline: "none",
                flexShrink: 0,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                {open ? (
                  <>
                    <line x1="4" y1="4" x2="18" y2="18" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" />
                    <line x1="18" y1="4" x2="4" y2="18" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6"  x2="19" y2="6"  stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" />
                    <line x1="3" y1="11" x2="19" y2="11" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" />
                    <line x1="3" y1="16" x2="19" y2="16" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          )}

        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="fullmenu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.22 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "linear-gradient(160deg,#f8faff 0%,#eff4ff 100%)",
              zIndex: 9998,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 6,
              padding: "80px 24px 40px",
            }}
          >
            {/* Nav links */}
            {NAV_LINKS.map(({ label, to }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                style={{ width: "100%", maxWidth: 320 }}
              >
                <Link
                  to={to} smooth duration={500}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "12px 0",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#1E293B",
                    cursor: "pointer",
                    textAlign: "center",
                    letterSpacing: "0.01em",
                    borderBottom: "1px solid rgba(37,99,235,0.10)",
                    transition: "color .2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "#2563EB"}
                  onMouseLeave={e => e.currentTarget.style.color = "#1E293B"}
                >
                  {label}
                </Link>
              </motion.div>
            ))}

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ width: "100%", maxWidth: 320, display: "flex", gap: 12, marginTop: 20 }}
            >
              <a href="#" style={{ flex: 1, padding: "12px 0", textAlign: "center", borderRadius: 10, fontSize: 15, fontWeight: 600, color: "#2563EB", border: "2px solid #2563EB", textDecoration: "none" }}>
                Login
              </a>
              <a href="#" style={{ flex: 1, padding: "12px 0", textAlign: "center", borderRadius: 10, fontSize: 15, fontWeight: 600, color: "#fff", textDecoration: "none", background: "linear-gradient(135deg,#2563EB,#0EA5E9)", boxShadow: "0 4px 14px rgba(37,99,235,.3)" }}>
                Sign Up
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.35)", zIndex: 9999 }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
