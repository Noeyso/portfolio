import React from "react";
import styles from "./aboutMe.module.css";
import WorkEmoji from "../../common/image/WorkEmoji.gif";
import GoodEmoji from "../../common/image/GoodEmoji.gif";
import Wave from "../wave/wave";
function AboutMe() {
  return (
    <section className={styles.container} id="about">
      <Wave color="#fcfcfc" />
      <div className={styles.box}>
        <h2>About Me</h2>
        <section className={styles.desc}>
          <div className={styles.emoji_container}>
            <img src={WorkEmoji} alt="" />
          </div>
          <div className={styles.content}>
            <h3>
              <span>소통하는 프론트엔드 개발자를 꿈꿉니다.</span>
            </h3>
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
        <section className={styles.desc}>
          <div className={styles.emoji_container}>
            <img src={GoodEmoji} alt="" />
          </div>
          <div className={styles.content}>
            <h3>
              <span>새로운 경험을 좋아하고 즐깁니다.</span>
            </h3>
            <span>
              새로 배우는 단계는 어렵고 힘듭니다. 하지만 그 과정을 견뎌내어
              학습한 지식과 경험이 저의 것이 되었을 때 느끼는 성취감은 저에게 큰
              에너지를 주고 저를 성장시킵니다. 프론트엔드 개발자는 끊임없이
              지식을 습득하고 고민해야합니다. 어렵고 힘들어도 해낼 수 있다는
              믿음으로 꾸준히 공부하며 성장하는 과정을 즐기고 있습니다. 앞으로도
              멈추지않고 새로운 변화를 받아들이고 적응해나가며 발전하는
              프론트엔드 개발자가 될 것입니다.
            </span>
          </div>
        </section>
      </div>
    </section>
  );
}

export default AboutMe;
