
// 반복문
// for문
for (초기화부분; 조건부분; 추가동작부분) {
  동작부분
}

// ex 1)
for (let i = 2; i <= 100; i += 2) {
  console.log (i);
}


// ex 2)
function printTriangle(height) {
	for (let i = 1; i <= height; i++) {
	  console.log ('*'.repeat(i));
	}
}

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);



/*
1. 추가동작부분을 꼭 채울 필요는 없다.
  for (let i = 1; i <= 10;) {
    console.log(`${i} 코드잇 최고!`);
    i++;
  }


2. 초기화부분에서 생성한 변수는 for문의 로컬변수다.
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} 코드잇 최고!`);
  }

  console.log(i); // Error !!

  *for문 안에서 생성한 로컬변수이기 때문에
  for 반복문이 종료되고 나서
  for 반복문 밖에서 변수를 사용하려고 하면 오류가 발생한다는 점.


3. 초기화 부분도 반드시 채울 필요는 없다.
   단! for문의 소괄호 안쪽 가장 첫번째 세미콜론은 생략할 수 없다.

  let i = 1; 
  for (; i <= 10; i++) {
    console.log(`${i} 코드잇 최고!`);
  }


  *for문의 소괄호 안쪽은 반드시 세미콜론 2개가 필요합니다.
  그렇지 않으면 실행 오류를 만나게 된다는 점.
  */