
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

// JY bro *tip
let now = 1;
let pre = 0;
let empty;

/* let empty를 반복문으로 돌리는 것 보다
   밖에서 let empty선언하고
   반복문 안에서는 empty = pre만 */

for (let i = 1; i<=50; i++) {
  console.log (now);
   
  empty = pre;
  pre = now;
  now = now + empty;
}


/* 코드 해석
// 인덱스 순번이 밀리는 걸 방지하기 위해

    0 번째 인덱스 = 1
numbers   [0]   % 2 !== 0   = 0.5   i--

    0 번째 인덱스 = 2
numbers   [0]   % 2 !== 0   = 0   i++

    1 번째 인덱스 = 3
numbers   [1]   % 2 !== 0   = 1.5   i--

    1 번째 인덱스 = 5
numbers   [1]   % 2 !== 0   = 2.5   i--

    1 번째 인덱스 = 8
numbers   [1]   % 2 !== 0   = 4   i++

    2 번째 인덱스 = 9
numbers   [2]   % 2 !== 0   = 4.5   i-- */


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


// present_siwan answer 2
let previous = 0;
let current = 0;
​
for (let i = 0; i < 49; i++) {
  //첫번째 시도 예외처리
  if (i === 0) {
    current = 1;
    console.log(current);
    previous = current;
  } else {
    console.log(current);
    let past = previous;
    previous = current;
    current += past;
  }
}

/*
현재와 과거는 아무것도 없는 0 이다.
첫번째 시도만 현재(current)에 1을 할당 한다.
현재(current)는 이전(previous)이 되고 다음 차례로 넘어간다.
else문 안에서 이전(previous)는 과거(past)가 된다.
그 다음 오래된 현재(current)는 이전(previous)이 되고,
마지막으로 가장 최근의 현재(current)는
현재(current)와 과거(past)를 합쳐서 할당 한다.
*/

// present_siwan answer 1
let previous = 0;
let current = 1;
​
for (let i = 1; i < 50; i++) {
  console.log(current);

  let past = previous;

  previous = current;
  current = current + past;
}

/* my Q : for 조건 부분에서 < 만 해줘두 돼 ??
siwan A : 12586269025 가 정답이면 <만
          20365011074 가 정답이면 <= */

// past_siwan answer edit.ver
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