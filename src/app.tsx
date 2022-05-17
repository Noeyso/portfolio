import "./app.module.css";
import React, { CSSProperties, useEffect, useState } from "react";
import Main from "./components/main/main";
import AboutMe from "./components/aboutMe/aboutMe";
import Skill from "./components/skill/skill";
import Project from "./components/project/project";
import styles from "./app.module.css";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import Header from "./components/header/header";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <AboutMe />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
