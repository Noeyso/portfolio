import React, { LegacyRef, Ref, useRef } from "react";
import { ProjectType } from "../project";
import styles from "./projectDetail.module.css";
import { IoClose } from "react-icons/io5";

type Props = {
  project: ProjectType;
  onModal: () => void;
};
function ProjectDetail({ project, onModal }: Props) {
  const outSection = useRef<HTMLDivElement>(null);
  return (
    <div
      className={styles.container}
      ref={outSection}
      onClick={(e) => {
        if (outSection.current === e.target) {
          onModal();
        }
      }}
    >
      <section className={styles.detail_container}>
        <div className={styles.top}>
          <h2>{project.title}</h2>
          <button onClick={onModal}>
            <IoClose size="2rem" />
          </button>
        </div>
        <div>
          <h3>팀</h3>
          <p>{project.team}</p>
        </div>
        <h3>프로젝트 설명</h3>
        <p className={styles.content}>{project.content}</p>

        <h3>사용기술 및 라이브러리</h3>
        <ul className={styles.stacks}>
          {project.stacks.map((stack) => (
            <li>
              <span>{stack}</span>
            </li>
          ))}
          {project.library.map((lib) => (
            <li>
              <span>{lib}</span>
            </li>
          ))}
        </ul>
        <h3>깨달은점</h3>
        <ul className={styles.learn}>
          {project.learned.map((learn) => (
            <li>
              <span>{learn}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default ProjectDetail;
