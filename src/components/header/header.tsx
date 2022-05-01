import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-scroll";

function Header() {
  const [bg, setBg] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);

  function updateScroll() {
    const wh = window.innerHeight;
    const y = window.scrollY;
    if (y < 100) {
      setBg("transparent");
    } else if (y < wh) {
      setBg("#ffffff");
    } else {
      if (y > 4 * wh) {
        setBg("#6fafff");
      } else if (y > 3 * wh) {
        setBg("#3563ff");
      } else if (y > 2 * wh) {
        setBg("#6fafff");
      } else {
        setBg("#aad9fd");
      }
    }
  }

  return (
    <section className={styles.container} style={{ background: bg }}>
      <nav>
        <Link to="main" spy={true} smooth={true}>
          <span>Home</span>
        </Link>
        <Link to="about" spy={true} smooth={true}>
          <span>About</span>
        </Link>
        <Link to="skills" spy={true} smooth={true}>
          <span>Skills</span>
        </Link>
        <Link to="projects" spy={true} smooth={true}>
          <span>Projects</span>
        </Link>
        <Link to="contact" spy={true} smooth={true}>
          <span>Contact</span>
        </Link>
      </nav>
    </section>
  );
}
export default Header;
