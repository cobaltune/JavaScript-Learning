
// 반복문을 사용해서 구구단 프로그램을 만들어 보기

/* 중첩 반복문
: 반복문의 동작 부분 안에 또 다른 반복문을 넣는 것 */


// my answer
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    let total = i * j;
    console.log (`${i} * ${j} = ${total}`);
  }
}


// answer sheet (for)
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// answer sheet (while)
let i = 1;
while (i <= 9) {
  let j = 1;
  while (j <= 9) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}