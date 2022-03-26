import React, { useState } from "react";
import styles from "./main.module.css";
import HiEmoji from "../../common/image/HiEmoji.gif";
import Bg from "../../common/image/bg.png";

function Main() {
  const [wavyText, setWavyText] = useState(["안", "녕", "하", "세", "요", "!"]);
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div>
          <div className={styles.waviy}>
            {wavyText.map((item, idx) => {
              return (
                <span style={{ animationDelay: `calc(0.1s * ${idx + 1})` }}>
                  {item}
                </span>
              );
            })}
          </div>
          <span className={styles.txt}>
            <span className={styles.frontend}>Front-end D</span>
            eveloper
          </span>
          <span className={styles.txt}>
            <span className={styles.name}>양소연</span>입니다.
          </span>
        </div>
        <div>
          <img className={styles.emoji} src={HiEmoji} alt="emoji" />
        </div>
      </div>
    </section>
  );
}
export default Main;
