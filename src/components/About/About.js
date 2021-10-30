import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Logo from "../../images/logo.png";
import "./About.scss";

const About = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <section className="About">
      <div className="container">
        <div className="wrapper">
          <div data-aos="fade-right" className="left-side">
            <h2>About Me</h2>
            <p>
              I'm a videographer and photographer that's resides in Charlotte,
              NC.
            </p>
            <p>You can follow me on Youtube or Instagram!</p>
            <a
              href="https://www.instagram.com/wall2wall_productions/"
              target="_blank"
            >
              <i className="fab fa-instagram fa-3x"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCVR61IfaupKs7ZqsvTjQIJQ"
              target="_blank"
            >
              <i className="fab fa-youtube fa-3x"></i>
            </a>
          </div>
          <div data-aos="fade-left" className="right-side">
            <img src={Logo} alt="logo-img" className="logo-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
