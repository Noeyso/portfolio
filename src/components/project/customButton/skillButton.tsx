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
  SiFirebase,
  SiAndroid,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";

function ReactJs() {
  return (
    <button className={`${styles.skill} ${styles.react}`}>
      <SiReact /> <span>React</span>
    </button>
  );
}
function JavaScript() {
  return (
    <button className={`${styles.skill} ${styles.javascript}`}>
      <SiJavascript /> <span>JavaScript</span>
    </button>
  );
}
function TypeScript() {
  return (
    <button className={`${styles.skill} ${styles.typescript}`}>
      <SiTypescript /> <span>TypeScript</span>
    </button>
  );
}

function PostCss() {
  return (
    <button className={`${styles.skill} ${styles.postcss}`}>
      <SiPostcss /> <span>PostCSS</span>
    </button>
  );
}

function Css() {
  return (
    <button className={`${styles.skill} ${styles.css}`}>
      <SiCss3 /> <span>CSS3</span>
    </button>
  );
}

function Html() {
  return (
    <button className={`${styles.skill} ${styles.html}`}>
      <SiHtml5 /> <span>HTML5</span>
    </button>
  );
}

function Nodejs() {
  return (
    <button className={`${styles.skill} ${styles.nodejs}`}>
      <IoLogoNodejs /> <span>Nodejs</span>
    </button>
  );
}

function Java() {
  return (
    <button className={`${styles.skill} ${styles.java}`}>
      <SiJava /> <span>Java</span>
    </button>
  );
}

function Mysql() {
  return (
    <button className={`${styles.skill} ${styles.mysql}`}>
      <SiMysql /> <span>Mysql</span>
    </button>
  );
}

function Firebase() {
  return (
    <button className={`${styles.skill} ${styles.firebase}`}>
      <SiFirebase /> <span>Firebase</span>
    </button>
  );
}

function Android() {
  return (
    <button className={`${styles.skill} ${styles.android}`}>
      <SiAndroid /> <span>Android</span>
    </button>
  );
}

type skillType = {
  skill: string;
};
export function SkillLabel({ skill }: skillType) {
  return (
    <div className={styles.label}>
      {skill === "React" ? (
        <ReactJs />
      ) : skill === "JavaScript" ? (
        <JavaScript />
      ) : skill === "TypeScript" ? (
        <TypeScript />
      ) : skill === "PostCss" ? (
        <PostCss />
      ) : skill === "Css" ? (
        <Css />
      ) : skill === "Html" ? (
        <Html />
      ) : skill === "Java" ? (
        <Java />
      ) : skill === "Mysql" ? (
        <Mysql />
      ) : skill === "Firebase" ? (
        <Firebase />
      ) : skill === "Android" ? (
        <Android />
      ) : skill === "Nodejs" ? (
        <Nodejs />
      ) : (
        ""
      )}
    </div>
  );
}
