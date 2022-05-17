import Ohou from "../../common/image/project/clone-ohou.gif";
import ReadingHelper from "../../common/image/project/reading-helper.png";

export const projects = [
  {
    title: "오늘의집 클론코딩",
    thumbnail: Ohou,
    brief: "오늘의집 메인 페이지 클론코딩 프로젝트 입니다.",
    team: "개인 프로젝트",
    content:
      "오늘의집 메인 페이지를 클론코딩 했습니다. 메인 페이지의 요소들을 최대한 똑같이 구현하기 위해 다양한 컴포넌트를 구현하고 컴포넌트들의 배치 및  스타일링에 중점을 두고 프로젝트를 진행했습니다.\n 라이브러리를 사용하지 않고 직접 캐러셀(무한슬라이드)를 제작해보며 동적 스타일링과 window 이벤트에 대해 학습할 수 있었습니다. 또한 반응형 웹으로의 구현 과정에서 다양한 컴포넌트들의 재배치를 경험해볼 수 있었으며, 요소들의 스타일에 대해 고민해볼 수 있었습니다. Hover, nth-child, before,after 등의 가상요소를 사용해서 css내에서의 동적 스타일링을 경험했습니다.",
    learned: [
      "웹페이지를 바라보는 관점의 변화",
      "다양한 스타일링",
      "컴포넌트 구조화",
    ],
    library: [],
    stacks: ["React", "TypeScript", "PostCss"],
    demoUrl: "https://clone-ohou.netlify.app",
    gitUrl: "https://github.com/Noeyso/ohou-cloneCoding",
  },
  {
    title: "어린이 독서비서",
    thumbnail:
      "https://user-images.githubusercontent.com/55135881/122243584-340a3a80-ceff-11eb-9721-b7d2fa3b0fe1.png",
    brief: "어린이들을 타겟으로한 독서 도우미 어플입니다.",
    team: "컴퓨터과학부 학생 4명",
    content:
      " 코로나 19로 인해 집에 있는 시간이 많아진 아이들을 위한 독서도우미 어플입니다. \n 원하는 책을 가져오기 위해 네이버 책 검색 api를 사용해서 책 검색 및 책 정보 조회 기능을 구현했습니다.  FireBase를 사용해서 사용자가 고른 책을 저장하고(Create), 서재에서 담 은 책을 조회(Read) 및 삭제(Delete)할 수 있도록 했습니다. 독서 비서의 핵심 기능 중 하나인 독서 달력도 제작했습니다. 달력 라이브러리를 사용할 수 있었지만, 책 표지를 기록할 수 있는 사진 달력을 원했기 때문에 직접 구현했습니다. 독서 달력은 날짜도 확인할 수 있는 동시에, 원하는 날짜에 책을 기록 할 수 있게 제작했습니다. Firebase를 사용해서 책을 기록(Create)하고, 수정 (Update)할 수 있도록 했습니다.",
    learned: ["이벤트 처리", "Api 사용법", "Firebase 를 사용한 데이터 관리"],
    library: ["카카오 책 검색 api"],
    stacks: ["Android", "Java", "Firebase"],
    demoUrl: "",
    gitUrl: "https://github.com/Noeyso/ReadingChatbot",
  },
  {
    title: "독서비서-웹버전",
    thumbnail: ReadingHelper,
    brief: "독서비서 어플을 웹사이트 버전으로 변경한 프로젝트입니다.",
    team: "컴퓨터과학부 학생 2명",
    content:
      "기존에 만들었던 어린이 독서비서 어플을 웹 버전으로 만들었습니다. React Router를 사용해서 기능별 페이지로 넘어갈 수 있게 구현했고, 카카오 책 검색 api를 사용해서 책을 검색할 수 있도록 했습니다. Nodejs와 Mysql을 연동해서 사용자가 원하는 책을 저장(Create),조회 (Read),삭제(Delete)하고 독후감을 작성하고 수정(Update)할 수 있는 기능 을 구현했습니다. \n 독서달력 컴포넌트는 달력 라이브러리를 사용하지 않고 직접 제작했습니다. 달을 보여주는 헤더, 요일을 보여주는 헤더, 날짜를 보여주는 컨테이너 로 달력을 구조화하고 날짜를 계산해서 달력의 기능을 할 수 있도록 했습니다. 또한 날짜마다 img태그를 사용해서 책 이미지를 삽입할 수 있게 제작했습니다.",
    learned: [
      "프론트엔드, 백엔드 연동(http통신)",
      "Mysql을 사용한 데이터 관리",
    ],
    library: ["카카오 책 검색 api"],
    stacks: ["React", "JavaScript", "PostCss", "Nodejs", "Mysql"],
    demoUrl: "",
    gitUrl: "https://github.com/Noeyso/ReadingHelper",
  },
  {
    title: "Color Habit Tracker",
    thumbnail:
      "https://user-images.githubusercontent.com/48446896/147821195-a5a69ed7-6a4d-4632-aab5-ea3a6738e88a.png",
    brief: "습관을 기록하고 달성할 수 있게 도와주는 웹사이트입니다.",
    team: "개인 프로젝트",
    content:
      "매일의 습관을 기록하고 달성 현황을 확인할 수 있는 사이트입니다. 리액트 컴포넌트를 이해하기 위해 만든 프로젝트입니다. \n 습관 추가 버튼을 누르면 습관 추가 창이 뜨면서 습관을 추가할 수 있습니다. 이때 react-color 라이브러리를 활용해서 습관별로 색상을 설정할 수 있게 했습니다. 추가 버튼을 누르면, 습관 리스트에 습관이 추가된 것을 확인할 수 있습니다. 습관은 추가및 삭제할 수 있게 만들었으며, 완료 버튼을 누르면 체크 버튼으로 바뀌면서 상단 헤더의 게이지 바가 차오릅니다.",
    learned: [
      "리액트 컴포넌트",
      "배열 함수를 사용한 추가와 삭제",
      "버튼 클릭 이벤트",
    ],
    library: ["react-color"],
    stacks: ["React", "JavaScript"],
    demoUrl: "https://noeyso.github.io/my_habit_tracker/",
    gitUrl: "https://github.com/Noeyso/my_habit_tracker",
  },
  {
    title: "일기,오늘",
    thumbnail:
      "https://user-images.githubusercontent.com/48446896/150479108-e81ab23f-5111-4872-b2a2-693ffb37db17.png",
    brief: "하루를 기록할 수 있는 일기 사이트입니다.",
    team: "개인 프로젝트",
    content:
      "순수 TypeScript를 사용해서 만든 일기 사이트입니다.글,사진,날씨,감정의 컴포넌트를 생성해서 하루를 기록할 수 있습니다. \n 각 컴포넌트를 직접 구현하는 과정에서 컴포넌트 마다 공통적으로 화면에 추가하고 삭제되는 부분을 클래스로 분리하여 BaseComponent를 구현했고, 구현될 컴포넌트들이 이 Base Component를 상속하도록 했습니다.",
    learned: ["Typescript를 사용한 객체지향 프로그래밍", "상속", "타입사용"],
    library: [],
    stacks: ["TypeScript"],
    demoUrl: "https://noeyso.github.io/my_diary",
    gitUrl: "https://github.com/Noeyso/my_diary",
  },
  {
    title: "카페",
    thumbnail:
      "https://user-images.githubusercontent.com/48446896/151015145-8951b9ad-2018-4bb8-a4f7-ef07603db995.gif",
    team: "개인 프로젝트",
    brief: "간단한 카페 시뮬레이션 페이지입니다.",
    content:
      "간단한 카페 시뮬레이션 페이지입니다. 메뉴를 보고 커피를 선택하고 커피에 따른 추가사항을 선택하면 바리스타가 커피를 만들어줍니다.",
    learned: ["리액트 컴포넌트", "버튼 클릭 이벤트"],
    library: [],
    stacks: ["React", "TypeScript", "PostCss"],
    demoUrl: "",
    gitUrl: "https://github.com/Noeyso/cafe",
  },
];
