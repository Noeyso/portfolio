import React from "react";
import styles from "./contact.module.css";
import { IoIosMail } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io5";
import Emoji from "../../common/image/Emoji.gif";

function Contact() {
  return (
    <section className={styles.container}>
      <h2>Contact Me</h2>

      <div className={styles.info}>
        <span>
          방문해주셔서 감사합니다! <br />
          저의 가능성을 보셨다면 다음 수단을 통해 저에게 연락해주세요!
        </span>
        <div className={styles.contact_container}>
          <div className={styles.contact}>
            <IoIosMail />
            <span>soyeon9819@gmail.com</span>
          </div>
          <div className={styles.contact}>
            <IoLogoGithub />
            <span>Soyeon Yang</span>
            <a href="https://github.com/Noeyso">github</a>
          </div>
        </div>
      </div>
      <div className={styles.emoji}>
        <img src={Emoji} alt="" />
      </div>
    </section>
  );
}

export default Contact;
