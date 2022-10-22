
// 반복문
// while문
while (조건부분) {
  동작부분
}

// ex 1)
// 1 이상 100 이하의 홀수를 모두 출력
let i = 1;
while (i <= 100) {
  if (i % 2 === 1) {
    console.log (i);
  }
  i++;
}


// ex 2)
// 1 이상 180 이하의 약수 및 개수 출력
const N = 180;
let i = 1;
let count = 0;

while (i <= N) {
  if (N % i === 0){
    console.log (i);
    count += 1;
  }
  i++;
}

console.log (`${N}의 약수는 총 ${count}개입니다.`)



/*
상대적으로 for문 보다 사용빈도가 낮지만

글로벌 변수를 조건 비교하여 사용하고,
반복문 내부에서도 다루면서
반복문이 종료된 다음에도 이 변수를 사용해야 될 때 주로 사용
*/