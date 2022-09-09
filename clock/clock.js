const clockContainer = document.querySelector(".js-clock"), //class name이 'js-clock'인 요소를 반환
  clockTitle = clockContainer.querySelector("h1"); // 그 중에 h1태그를 찾아서 반환

function getTime() {
  const date = new Date(); //현재 날짜와 시간의 정보가 담긴 Date 객체를 생성
  const minutes = date.getMinutes(); //Date 객체 중 '시'를 반환하여 저장
  const hours = date.getHours(); //Date 객체 중 '분'를 반환하여 저장
  const seconds = date.getSeconds(); //Date 객체 중 '초'를 반환하여 저장
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
} // 삼항연산자(조건문 ? True의 수행문 : False의 수행문)와 템플릿 문자열을 조합

function init() {
  getTime(); //실행 시 바로 현재시간이 표시된다. 없으면 시간이 설정되는데 시간이 걸림
  setInterval(getTime, 1000); // 1초마다 getTime을 실행
}

init();
