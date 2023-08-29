// 1) 입력 받기 : "y"
let input = prompt("글자를 입력해주세요.");

if (input === "y") {
  // 글쓰기 버튼 추가
  document.querySelector("#app").innerHTML = "<button>글쓰기</button>";
} else {
  // 글수정 버튼 추가
  document.querySelector("#app").innerHTML = "<button>글수정</button>";
}
