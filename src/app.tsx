import "./app.module.css";
import React from "react";
import Main from "./components/main/main";
import AboutMe from "./components/aboutMe/aboutMe";
import Skill from "./components/skill/skill";
import Project from "./components/project/project";
import styles from "./app.module.css";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
function App() {
  return (
    <div>
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
