/* 반복문을 사용해서 피보나치 수열의 첫 50개 항을
차례대로 출력하는 프로그램을 만들어 보기 */

/* 피보나피 수열의 1번 항과 2번 항은 각각 1
3번 항부터는 바로 앞 두 항의 합으로 계산 */


// my answer


// siwan answer edit.ver
let a = 1;
console.log (a);

let b = 1;
console.log (b);

let c = a + b;
console.log (c);

function fibonacci (i) {
  a = b;
  b = c;
  c = a + b;
  console.log (c);
}

for (let i = 1; i <= 47; i++) {
  fibonacci (i);
}