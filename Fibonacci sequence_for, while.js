/* 반복문을 사용해서 피보나치 수열의 첫 50개 항을
차례대로 출력하는 프로그램을 만들어 보기 */

/* 피보나치 수열의 1번 항과 2번 항은 각각 1
3번 항부터는 바로 앞 두 항의 합으로 계산 */


// my answer
let now = 1;
let pre = 0;

for (let i = 1; i <= 50; i++) {
  console.log (now);
  
  let empty = pre;
  
  pre = now;
  now = now + empty;
}

/* 코드 해석
1  -> console.log (now); 위에 변수 선언할 때 준 1을 콘솔
1  -> 0 이었던 pre에 now를 할당해서
      1이 1 + empty (기존 pre에 0값 보존) = 1

a  b  c
b가 a로 / c가 b로 / c는 a + b

그럼 기존 b값이 사라지니까
empty라는 변수에 b를 저장

2  -> a + b인 c가 출력

이렇게 50번 반복 */


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

// answer sheet (for)
let current = 1;
let previous = 0;

for (let i = 1; i <= 50; i++) {
  console.log(current);
  let temp = previous;
  previous = current;
  current = current + temp;
}

// answer sheet (while)
let current = 1;
let previous = 0;
let i = 1;

while (i <= 50) {
  console.log(current);
  let temp = previous;  // previous를 임시 보관소 temp에 저장
  previous = current;
  current = current + temp;  // temp에는 기존 previous 값이 저장돼 있음
  i++;
}