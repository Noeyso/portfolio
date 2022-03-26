import React from "react";
import styles from "./skillButton.module.css";

import {
  SiJavascript,
  SiPostcss,
  SiReact,
  SiCss3,
  SiHtml5,
  SiTypescript,
  SiJava,
  SiMysql,
} from "react-icons/si";

export function ReactJs() {
  return (
    <button className={`${styles.skill} ${styles.react}`}>
      <SiReact /> <span>React</span>
    </button>
  );
}
export function Javascript() {
  return (
    <button className={`${styles.skill} ${styles.javascript}`}>
      <SiJavascript /> <span>JavaScript</span>
    </button>
  );
}
export function TypeScript() {
  return (
    <button className={`${styles.skill} ${styles.typescript}`}>
      <SiTypescript /> <span>TypeScript</span>
    </button>
  );
}

export function PostCss() {
  return (
    <button className={`${styles.skill} ${styles.postcss}`}>
      <SiPostcss /> <span>PostCSS</span>
    </button>
  );
}

export function Css() {
  return (
    <button className={`${styles.skill} ${styles.css}`}>
      <SiCss3 /> <span>CSS3</span>
    </button>
  );
}

export function Html() {
  return (
    <button className={`${styles.skill} ${styles.html}`}>
      <SiHtml5 /> <span>HTML5</span>
    </button>
  );
}
