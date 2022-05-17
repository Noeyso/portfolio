import React from "react";
import styles from "./skill.module.css";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiLaughingFill,
  BsFillEmojiSmileFill,
} from "react-icons/bs";

import Html from "../../common/image/logo/html.png";
import CSS from "../../common/image/logo/css.png";
import Javascript from "../../common/image/logo/javascript.png";
import Typescript from "../../common/image/logo/typescript.png";
import Reactjs from "../../common/image/logo/react.png";
import Nodejs from "../../common/image/logo/nodejs.svg";
import Java from "../../common/image/logo/java.png";
import Mysql from "../../common/image/logo/mysql.png";
import Firebase from "../../common/image/logo/firebase.png";
import Python from "../../common/image/logo/python.png";
import Git from "../../common/image/logo/github.png";
import Wave from "../wave/wave";

function Skill() {
  return (
    <section className={styles.container} id="skills">
      <Wave color="#aad9fd" />

      <div className={styles.skills_container}>
        <h2>Skills</h2>
        <div className={styles.skills}>
          <h3>
            업무에 활용할 수 있어요
            <BsFillEmojiHeartEyesFill />
          </h3>
          <div className={styles.skill}>
            <div className={styles.skill_item}>
              <div>
                <img src={Html} alt="" />
              </div>
              <span>HTML</span>
            </div>
            <div className={styles.skill_item}>
              <div>
                <img src={CSS} alt="" />
              </div>
              <span>CSS</span>
            </div>
            <div className={styles.skill_item}>
              <div>
                <img src={Javascript} alt="" />
              </div>
              <span>JavaSript</span>
            </div>
            <div className={styles.skill_item}>
              <div>
                <img src={Reactjs} alt="" />
              </div>
              <span>React</span>
            </div>
          </div>
          <h3>
            어느정도 사용할 줄 알아요
            <BsFillEmojiLaughingFill />
          </h3>
          <div className={styles.skill}>
            <div className={styles.skill_item}>
              <div>
                <img src={Typescript} alt="" />
              </div>
              <span>TypeSript</span>
            </div>
            <div className={styles.skill_item}>
              <div>
                <img src={Nodejs} alt="" />
              </div>
              <span>NodeJS</span>
            </div>
            <div className={styles.skill_item}>
              <div>
                <img src={Mysql} alt="" />
              </div>
              <span>MySQL</span>
            </div>
            <div className={styles.skill_item}>
              <div>
                <img src={Firebase} alt="" />
              </div>
              <span>Firebase</span>
            </div>
            <div className={styles.skill_item}>
              <div>
                <img src={Git} alt="" />
              </div>
              <span>Git</span>
            </div>
          </div>
          <h3>
            보면 이해할 수 있어요
            <BsFillEmojiSmileFill />
          </h3>
          <div className={styles.skill}>
            <div className={styles.skill_item}>
              <div>
                <img src={Java} alt="" />
              </div>
              <span>Java</span>
            </div>
            <div className={styles.skill_item}>
              <div>
                <img src={Python} alt="" />
              </div>
              <span>Python</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
