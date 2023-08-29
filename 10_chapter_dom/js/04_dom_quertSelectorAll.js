// DOM 접근(선택)함수 : quertSelectorAll(css선택자)
// html 문서에서(DOM) 여러 개를 선택하는 함수
// 사용법 : let 변수명 = document.querySelectorAll(css선택자);
let elements = document.querySelectorAll("ul li"); // 여러개 li(배열)

// li 태그 여러개 : 반복문
document.querySelector("#text").innerHTML =
  "======== innerHTML 문자열만 반복문으로 복사됨, 점은 들고오지 않음 ==========";
for (let i = 0; i < elements.length; i++) {
  console.log(elements); // elements 요소 검사
  //  결과 출력 : id="output" 위치에 출력
  //  문자열 붙이기 : result = result + "*" => result += "*"
  document.querySelector("#output").innerHTML += elements[i].innerHTML;

  // 줄바꿈 : 문자열 붙이기
  // innerHTML(==문자열) : <여는태그>문자열</닫는태그>
  document.querySelector("#output").innerHTML += "<br/>";
}
