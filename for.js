
// 반복문
// for문
for (초기화부분; 조건부분; 추가동작부분) {
  동작부분
}

// ex 1)
// 1 이상 100 이하의 짝수를 모두 출력
for (let i = 2; i <= 100; i += 2) {
  console.log (i);
}


// ex 2)
// 주어진 높이에 맞게 '*'로 삼각형을 그려주는 함수
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


  /* .repeat 메소드
  
  : string.repeat (count);
  : 문자열을 반복한 값을 반환하는 메소드

  *매개변수 count
  : 문자열을 반복할 횟수. 0과 양의 무한대 사이의 정수 */

  // ex 1)
  'abc'.repeat(-1);   // RangeError
  'abc'.repeat(0);    // ''
  'abc'.repeat(1);    // 'abc'
  'abc'.repeat(2);    // 'abcabc'

  // ex 2)
  var str = "Hi";

  console.log(str.repeat(0));
  console.log(str.repeat(1));
  console.log(str.repeat(2));
  console.log(str.repeat(3));


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

  ** for문 안에서 생성한 로컬변수이기 때문에
  for 반복문이 종료되고
  for 반복문 밖에서 변수를 사용하려고 하면 오류 발생


3. 초기화 부분도 반드시 채울 필요는 없다.
   단! for문의 소괄호 안쪽 가장 첫번째 세미콜론은 생략할 수 없다.

  let i = 1; 
  for (; i <= 10; i++) {
    console.log(`${i} 코드잇 최고!`);
  }


  ** for문의 소괄호 안쪽은 반드시 세미콜론 2개가 필요
  그렇지 않으면 실행 오류 발생
  */