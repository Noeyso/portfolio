import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <section className={styles.container}>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </section>
  );
}
export default Header;
