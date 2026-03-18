import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/my_component/Navbar";
import { Element } from "react-scroll";
import Home from "./components/my_component/Home";
import Services from "./components/my_component/Services";
import About from "./components/my_component/About";
import Products from "./components/my_component/Product";
import Blog from "./components/my_component/Blog";
import Newsletter from "./components/my_component/Newsletter";
import Fotter from "./components/my_component/Fotter";
import "./App.css";

import AnimatedCursor from "react-animated-cursor";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const progressRef = useRef(null);

  useEffect(() => {
    const tween = gsap.to(progressRef.current, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });
    return () => tween.kill();
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[200] h-[3px] pointer-events-none">
        <div ref={progressRef} className="h-full w-0" style={{ background: "linear-gradient(90deg,#2563EB,#0EA5E9)" }} />
      </div>

      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.5}
        color="37, 99, 235"
        outerAlpha={0.3}
        innerStyle={{ backgroundColor: "rgb(37,99,235)" }}
        outerStyle={{ border: "2px solid rgb(37,99,235)", zIndex: 999999 }}
      />
      <div>
        <Navbar />
        <Element name="home">
          <Home />
        </Element>
        <Element name="services">
          <Services />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="products">
          <Products />
        </Element>
        <Element name="testimonials">
          <Blog />
        </Element>
        <Element name="faq">
          <Newsletter />
        </Element>
        <Fotter />
      </div>
    </>
  );
}

export default App;
