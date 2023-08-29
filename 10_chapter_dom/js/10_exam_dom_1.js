// 함수 정의
function innerhtml() {
  // 현재 시간 가져오기(변수 선언)
  let now = new Date(); // 현재 날짜 (년, 월, 일, 시, 분, 초);
  
  // innerHTML 에 출력
  document.querySelector("#output").innerHTML = now;
}
