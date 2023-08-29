// TODO 코드 푸는 방식은 다양하게 있다. 조건문 사용과 토글 함수의 역할로 인해 코드를 짧게 쓸수는 있음

// TODO 조건문을 사용하여 푸는 방법
// 함수 정의
function setToggle() {
  // 선택함수 : #content
  let content = document.querySelector("#content");

  // .dark 클래스 있는지 확인
  if (content.classList.contains("dark") == true) {
    // .light 클래스 추가 (add() , toggle())
    content.classList.toggle("dark");
  } else {
    // .dark 클래스 추가
    content.classList.toggle("dark");
  }
}

// TODO 토글 함수를 이용해 간단하게 짜는 방법
// function setToggle() {
//   container.classList.toggle("dark");
//   content.classList.toggle("dark");
// }