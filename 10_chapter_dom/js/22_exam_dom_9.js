// 함수 정의
// get_pay(25000, 10, 5000) : 함수 사용
function get_pay(price, discount, shipping) {
  // pay(지불금액) = price(책값) - (price(책값) * (discount(할인율)/100)) + shipping(배송료)
  let pay = price - price * (discount / 100) + shipping; // 지불금액

  // 각각 웹 화면에 출력하기
  // 선택함수 이용
  document.querySelector("#price").innerHTML = price + "원"; // 25000
  document.querySelector("#discount").innerHTML = discount + "%"; // 10
  document.querySelector("#shipping").innerHTML = shipping + "원"; // 5000
  document.querySelector("#pay").innerHTML = pay + "원"; //
}

// TODO 코드 시나리오 풀이
// 1) 함수 get_pay 함수를 정의한다. (정답)
// 2) 공식 pay(지불금액) = price(책값) - (price(책값) * (discount(할인율)/100)) + shipping(배송료)
//         적용해서 pay 변수에 넣는다.
// 3) 각각의 값을(pay, price, discount, shipping) 화면에 div 출력한다.
