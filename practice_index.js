// indexOf ()

/* ### 배열 메소드 Tip > 질문
예시에서 ‘Kakao’ 요소가 두 개 있었음

- array.indexOf ('element')
  : 앞에서 몇 번째인지
    
- array.lastIndexOf ('element')
  : 뒤에서 몇 번째인지
   
- 몇개 있는지
- 각각 몇 번째에 있는지

### 답변
array.indexOf (’배열에서 찾을 요소’, [검색을 시작할 index]);
: `indexOf()`의 옵셔널 파라미터로 `검색을 시작할 인덱스` 지정

이를 아래와 같이 응용하면
특정 배열 내에 특정 요소가 몇 번 등장하며, 어디에 위치하는지 알 수 있음 */



// while 문
while (조건) {
  동작;
 }
 

 // for 문
 for (초기화; 조건; 추가동작) {
 동작;
 }



//array 배열에서 'a'가 존재하는 위치들을 저장할 배열
let indices = [];
let array = ['a', 'b', 'a', 'c', 'a', 'd'];
let element = 'a';

//첫 번째 시작 지점
let idx = array.indexOf(element);

//만약 찾고자 하는 요소가 배열에 없다면, idx = -1 일테니
// 요소가 없다면 아래 반복문은 패스
while (idx != -1) {
//idx가 -1이 될 때 까지, 즉 배열의 끝까지 다 탐색해도 
//더이상 찾고자 하는 요소와 같은 요소가 없을 때까지 계속 반복

	//찾은 index를 indices 배열에 push
  indices.push(idx);

	//바로 다음 index 부터 'a'가 있는지 탐색
  idx = array.indexOf(element, idx + 1);
}
//더이상 'a'가 없을 경우엔 -1이 반환 되니 반복문 종료


// 테스트 코드
console.log(indices);
console.log(indices.length);


// 출력값
[0, 2, 4]
3



/* 참고 사이트
[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

+) 위에서 구문과 요소의 모든 항목 찾기 예제를 보면 더 이해하기 쉬움 */