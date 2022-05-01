import React from "react";
import styles from "./aboutMe.module.css";
import WorkEmoji from "../../common/image/WorkEmoji.gif";
import GoodEmoji from "../../common/image/GoodEmoji.gif";
function AboutMe() {
  return (
    <section className={styles.container} id="about">
      <div className={styles.custom_shape}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className={styles.shape_fill}
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className={styles.shape_fill}
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className={styles.shape_fill}
          ></path>
        </svg>
      </div>
      <div className={styles.box}>
        <h2>About Me</h2>
        <section className={styles.txt}>
          <div className={styles.emoji_container}>
            <img src={WorkEmoji} alt="" />
          </div>
          <div className={styles.content}>
            <h3>소통하는 프론트엔드 개발자를 꿈꿉니다.</h3>
            <span>
              프론트엔드 개발자로서 가져야할 중요한 덕목 중 하나는 소통이라고
              생각합니다. 프론트엔드 개발자는 사용자 뿐만 아니라 백엔드
              개발자와도 맞닿아 있습니다. 사용자에게는 접근성과 유용성을 갖춘
              웹사이트를 제공해야 합니다. 그리고 사용자로부터 받아온 정보를
              백엔드 개발자가 사용할 수 있도록 효율적으로 가공해야 합니다. 저는
              이 두 가지 일을 해낼 수 있는 프론트 개발자가 되고자 노력하고
              있습니다.
            </span>
          </div>
        </section>
        <section className={styles.txt}>
          <div className={styles.emoji_container}>
            <img src={GoodEmoji} alt="" />
          </div>
          <div className={styles.content}>
            <h3>저는 책임감이 강한 사람입니다.</h3>
            <span>
              제가 해야한다고 판단한 일에 대해서 끝까지 책임집니다. 맡은
              프로젝트를 완벽하게 마무리 하는 것에서 큰 성취를 느낍니다. 앞으로
              주어질 다양한 프로젝트에서 성취를 느끼며 발전해나가고 싶습니다.
            </span>
          </div>
        </section>
      </div>
    </section>
  );
}

export default AboutMe;
