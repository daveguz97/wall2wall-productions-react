import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Intro = () => {
  const textRef = createRef();
  const sliderRef = createRef();
  const introRef = createRef();
  const navRef = createRef();
  const titleRef = createRef();
  const leadRef = createRef();
  const introAnimation = () => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power1.out",
      },
    });
    tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
    tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
    tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
    tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
    tl.fromTo(".lead", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
  };

  return (
    <div className="Intro">
      <div className="intro-text">
        <h3 className="hide">
          <span className="text centered-text">Charlotte's</span>
        </h3>
        <h3 className="hide">
          <span className="small-text text">Photographer And Videographer</span>
        </h3>
      </div>
      <div className="slider"></div>
    </div>
  );
};

export default Intro;
