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
        className={demoUrl !== "" ? styles.button : styles.button_hide}
        style={{ width: codeUrl === "" ? `100%` : "50%" }}
        onClick={() => window.open(demoUrl, "_blank")}
      >
        Demo <IoIosArrowForward />
      </button>
      <button
        className={codeUrl !== "" ? styles.button : styles.button_hide}
        style={{ width: demoUrl === "" ? `100%` : "50%" }}
        onClick={() => window.open(codeUrl, "_blank")}
      >
        <SiGithub />
        Github <IoIosArrowForward />
      </button>
    </div>
  );
}

export default Buttons;
