// 선택 함수
let easys = document.querySelector("#cover");

// 마우스가 위로 올라가면 함수
easys.addEventListener("mouseover", function () {
  // girl(./img/easys-1.jpg) -> boy(./img/easys-2.jpg)
  // img 태그의 src 속성 조작
  easys.src = "./img/easys-2.jpg";
});

// 마우스가 나가면 함수
easys.addEventListener("mouseout", function () {
  // boy -> girl 이미지
  easys.src = "./img/easys-1.jpg";
});
