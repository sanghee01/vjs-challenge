const title = document.querySelector("h2");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}
function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();
/////////////////////
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  //toggle: 위의 fucntion이 해주는 일을 자동으로 해준다.
  // contain(값): 배열 혹은 객체 내에서 값의 존재 여부를 확인
  const currentClass = title.className;
  if (currentClass !== CLICKED_CLASS) {
    //CLICKED_CLASS가 없으면
    title.className = CLICKED_CLASS; //CLIKED_CLASS를 생성
  } else {
    // 있으면
    title.className = ""; //삭제
  }
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
