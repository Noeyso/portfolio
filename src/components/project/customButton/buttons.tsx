import React from "react";
import styles from "./buttons.module.css";
import Github from "../../../common/image/logo/github.png";
import { SiGithub } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
interface Props {
  demoUrl: string;
  codeUrl: string;
}
function Buttons({ demoUrl, codeUrl }: Props) {
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => window.open(demoUrl, "_blank")}
      >
        Demo <IoIosArrowForward />
      </button>
      <button
        className={styles.button}
        onClick={() => window.open(codeUrl, "_blank")}
      >
        <SiGithub />
        Github <IoIosArrowForward />
      </button>
    </div>
  );
}

export default Buttons;
