import React from "react";
import { ProjectType } from "../project";
import styles from "./projectCard.module.css";
import { SiGithub } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import { SkillLabel } from "../customButton/skillButton";

type ProjectProps = {
  project: ProjectType;
  onModal: () => void;
  setProject: (project: ProjectType) => void;
};
function ProjectCard({ project, onModal, setProject }: ProjectProps) {
  const { title, thumbnail, brief, content, stacks, demoUrl, gitUrl } = project;
  function clickProject() {
    onModal();
    setProject(project);
  }
  return (
    <section className={styles.container} onClick={clickProject}>
      <div className={styles.img_container}>
        <img src={thumbnail} alt="thumbnail" />
      </div>
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{brief}</p>
        <div className={styles.stacks}>
          {stacks.map((skill) => (
            <SkillLabel skill={skill} />
          ))}
        </div>
      </div>

      <div className={styles.buttons}>
        <button
          className={demoUrl !== "" ? styles.button : styles.button_hide}
          style={{ width: gitUrl === "" ? `100%` : "50%" }}
          onClick={() => window.open(demoUrl, "_blank")}
        >
          Demo <IoIosArrowForward />
        </button>
        <button
          className={gitUrl !== "" ? styles.button : styles.button_hide}
          style={{ width: demoUrl === "" ? `100%` : "50%" }}
          onClick={() => window.open(gitUrl, "_blank")}
        >
          <SiGithub />
          Github <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
}

export default ProjectCard;
