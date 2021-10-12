import { useRef, useLayoutEffect } from "react";
import "./Navbar.scss";

type NavbarProps = {
  cursor: any;
};

const Navbar = ({ cursor }: NavbarProps) => {
  const navRef = useRef<HTMLUListElement>();
  const burgerRef = useRef<HTMLDivElement>();
  const navLinksRef = useRef<(HTMLLIElement | null)[]>([]);
  const navLinks = ["Home", "About Me", "Featured Work", "Contact", "Pricing"];

  const navSlide = () => {
    const burger = burgerRef.current;
    const nav = navRef.current;
    nav.classList.toggle("nav-active");
    const links = navLinksRef.current;
    links.forEach((link, index) => {
      if (link) {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`;
        }
      }
    });
    if (burger) {
      burger.classList.toggle("toggle");
    }
  };

  const handleMouseOver = (e) => {
    cursor.current.classList.add("link-grow");
    e.target.classList.add("hovered-link");
  };
  const handleMouseLeave = (e) => {
    cursor.current.classList.remove("link-grow");
    e.target.classList.remove("hovered-link");
  };

  const fixedNav = () => {
    const { current } = navRef;
    window.addEventListener("scroll", () => {
      const { scrollY, innerWidth } = window;
      if (scrollY >= 62 && innerWidth > 900) {
        current.classList.add("fixed-nav");
      } else {
        current.classList.remove("fixed-nav");
      }
    });
  };

  useLayoutEffect(() => {
    fixedNav();
  });

  return (
    <nav className="Navbar">
      <h5 className="logo">Wall2Wall Productions</h5>
      <ul className="nav-links" ref={navRef}>
        {navLinks.map((item) => {
          return (
            <li
              key={item}
              className="nav-item"
              ref={(element) => navLinksRef.current.push(element)}
            >
              <a
                key={item}
                href="#"
                className="nav-link"
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="burger" ref={burgerRef} onClick={navSlide}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
