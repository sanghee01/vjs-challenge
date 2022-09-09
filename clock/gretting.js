const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

//localStorage에 데이터를 저장한다
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

// 엔터를 입력 받았을 때, 반응하는 이벤트
function handleSubmit(event) {
  event.preventDefault(); // 이벤트의 기본 동작을 중단한다
  const currentValue = input.value; // input(html)의 value 값을 가져올 수 있다
  paintGreeting(currentValue); //입력 받은 값을 화면에 출력한다
  saveName(currentValue); // 입력받은 값을 localStorage가 기억하도록 한다
}
// 이름을 입력할 BOX를 출력한다
function askForName() {
  form.classList.add(SHOWING_CN); //이름을 입력할 box를 보이게 한다.
  form.addEventListener("submit", handleSubmit); // 엔터 시 이벤트 발생
}
// 이름을 화면에 출력한다
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN); // 이름을 입력할 box를 없앤다.
  greeting.classList.add(SHOWING_CN); // 이름을 출력하는 태그를 보이게한다.
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS); //localStorage에서 USER_LS가 있는지 확인
  if (currentUser === null) {
    //USER_LS가 없다면
    askForName(); // 이름을 입력받는다
  } else {
    paintGreeting(currentUser); //화면에 이름을 출력
  }
}

function init() {
  loadName();
}
init();

// localStorage.getItem(키): 로컬 스토리지에서 해당하는 값을 가져온다.
// localStorage.setItem(키,값): 로컬 스토리지에 해당하는 키와 값을 저장한다.
