import React, { useState } from "react";
import styles from "./project.module.css";

import Wave from "../wave/wave";
import { projects } from "./projects";
import ProjectCard from "./projectCard/projectCard";
import ProjectDetail from "./projectDetail/projectDetail";
export type ProjectType = {
  title: string;
  thumbnail: string;
  brief: string;
  team: string;
  content: string;
  learned: string[];
  library: string[];
  stacks: string[];
  demoUrl: string;
  gitUrl: string;
};

type Props = {
  onModal: (project: ProjectType) => void;
  isShow: boolean;
};
function Project() {
  const [prj, setPrj] = useState<ProjectType>({
    title: "",
    thumbnail: "",
    brief: "",
    team: "",
    content: "",
    learned: [],
    library: [],
    stacks: [],
    demoUrl: "",
    gitUrl: "",
  });

  const [isShow, setIsShow] = useState(false);
  const onModal = () => {
    setIsShow(!isShow);
  };

  return (
    <section className={styles.container} id="projects">
      <div>
        <Wave color="#6fafff" />
      </div>

      <h2>Projects</h2>
      <section className={styles.projects}>
        {projects.map((project) => (
          <ProjectCard
            project={project}
            onModal={onModal}
            setProject={(project: ProjectType) => setPrj(project)}
          />
        ))}
      </section>
      {isShow && <ProjectDetail project={prj} onModal={onModal} />}
    </section>
  );
}

export default Project;
