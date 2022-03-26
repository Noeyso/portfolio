import React from "react";
import styles from "./project.module.css";
import Ohou from "../../common/image/project/clone-ohou.gif";
import Buttons from "./customButton/buttons";

function Project() {
  return (
    <section className={styles.container}>
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
        <h2>Projects</h2>
        <ul>
          <li>
            <div className={styles.img_container}>
              <img src={Ohou} alt="ohou" />
            </div>
            <div className={styles.project_detail}>
              <h3>오늘의집 클론코딩</h3>
              <span>
                리액트와 PostCSS를 사용해서 만든 클론코딩 프로젝트 입니다.
              </span>
            </div>
            <Buttons
              demoUrl="https://623889f17366675cb1297532--clone-ohou.netlify.app"
              codeUrl="https://github.com/Noeyso/ohou-cloneCoding"
            />
          </li>
          <li>
            <div className={styles.img_container}>
              <img
                src="https://user-images.githubusercontent.com/48446896/151015145-8951b9ad-2018-4bb8-a4f7-ef07603db995.gif"
                alt=""
              />
            </div>
            <div className={styles.project_detail}>
              <h3>카페</h3>
              <span>간단한 카페 시뮬레이션 페이지입니다.</span>
            </div>
            <Buttons demoUrl="" codeUrl="https://github.com/Noeyso/cafe" />
          </li>
          <li>
            <div className={styles.img_container}>
              <img
                src="https://user-images.githubusercontent.com/55135881/122243584-340a3a80-ceff-11eb-9721-b7d2fa3b0fe1.png"
                alt=""
              />
            </div>
            <div className={styles.project_detail}>
              <h3>독서비서</h3>
              <span>
                어린아이들을 타겟으로한 독서 도우미 어플입니다. <br />
                학부 과제로 제작하였으며 팀원 4명과 진행한 팀프로젝트입니다.
              </span>
            </div>
            <Buttons
              demoUrl=""
              codeUrl="https://github.com/Noeyso/ReadingChatbot"
            />
          </li>
          <li>
            <div className={styles.img_container}>
              <img
                src="https://user-images.githubusercontent.com/48446896/147821195-a5a69ed7-6a4d-4632-aab5-ea3a6738e88a.png"
                alt=""
              />
            </div>
            <div className={styles.project_detail}>
              <h3>Color Habit Tracker</h3>
              <span>
                습관을 기록하고 달성할 수 있게 도와주는 웹사이트입니다.
                react-color라이브러리를 사용해서 습관별로 색상을 지정할 수 있게
                만들었습니다.
              </span>
            </div>
            <Buttons
              demoUrl="https://noeyso.github.io/my_habit_tracker/"
              codeUrl="https://github.com/Noeyso/my_habit_tracker"
            />
          </li>
          <li>
            <div className={styles.img_container}>
              <iframe
                src="https://www.youtube.com/embed/OMMlHcFzjpc"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <div className={styles.project_detail}>
              <h3>우리 지금 만나</h3>
              <span>
                모임의 전 과정을 관리할 수 있게 도와주는 어플입니다.
                모임생성,약속생성,중간지점찾기,정산,장소투표 등 다양한 기능을
                제공합니다.
              </span>
            </div>
            <Buttons
              demoUrl="https://github.com/Noeyso/MMMMeeting"
              codeUrl="https://github.com/Noeyso/MMMMeeting"
            />
          </li>
          <li>
            <div className={styles.img_container}>
              <img
                src="https://user-images.githubusercontent.com/48446896/150479108-e81ab23f-5111-4872-b2a2-693ffb37db17.png"
                alt=""
              />
            </div>
            <div className={styles.project_detail}>
              <h3>오늘</h3>
              <span>
                하루를 기록할 수 있는 일기 사이트입니다. 글,사진,기분,날씨를
                추가하고 삭제할 수 있습니다.
              </span>
            </div>
            <Buttons
              demoUrl="https://github.com/Noeyso/my_diary"
              codeUrl="https://github.com/Noeyso/my_diary"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Project;
