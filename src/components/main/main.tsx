import React, { useState } from "react";
import styles from "./main.module.css";
import HiEmoji from "../../common/image/HiEmoji.gif";
import Bg from "../../common/image/bg.png";

function Main() {
  return (
    <section className={styles.container} id="main">
      <div className={styles.box}>
        <div>
          <span className={styles.txt}>안녕하세요!</span>
          <span className={styles.txt}>Front-end Developer</span>
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
