// indexOf ()

/* ### 배열 메소드 Tip > 질문
> 특정 값이 몇 개인지 알려주는 메소드는 없나요?

### 알고자 하는 바
- 몇 개 있는지
- 각각 몇 번째에 있는지

### 답변
array.indexOf (’배열에서 찾을 요소’, [검색을 시작할 index]);
: `indexOf()`의 옵셔널 파라미터로 `검색을 시작할 인덱스` 지정

이를 아래와 같이 응용하면
특정 배열 내에 특정 요소가 몇 번 등장하며, 어디에 위치하는지 알 수 있음 */


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


// while 문을 for 문으로


// siwan answer
const result = [];
const list = ['a', 'b', 'a', 'c', 'a', 'd'];
const target = 'a';

let now = list.indexOf(target);
const max = list.length - 2;

for (let i = 0; i < max; i++) {
  const isFound = 0 <= now; //0 이상이면 찾은 것임

  if (isFound) {
    result.push(now);
  }
  const problem = now + 1;
  now = list.indexOf(target, problem);
}

console.log(result);


// answer develop by siwan
const list = ['a', 'b', 'a', 'c', 'a', 'd'];
const result = [];

list.forEach((item, index) => item === 'a' && result.push(index));
console.log(result);


// problem
const result = [];
const list = ['a', 'b', 'a', 'c', 'a', 'd'];
const target = 'a';

let now = list.indexOf(target);

const max = list.length - 1;

for (let i = 0; i < max; i++) {
  const isFound = 0 <= now; //0 이상이면 찾은 것임
  const isNotFound = now === -1;

  if (isFound) {
    result.push(now);
  }

  //어디까지 찾았는지 알려줄게. 그 찾은 위치를 now에 넣어줘
  if (!isNotFound) {
    const problem = now + 1;
    now = list.indexOf(target, problem);
  }
}

console.log (result);

/* arr.indexOf (searchElement [ , fromIndex])

### 매개변수
- searchElement
  : 배열에서 찾을 요소

- fromIndex` (optional)
  : 검색을 시작할 색인입니다.
  
  `인덱스가 배열의 길이보다 크거나 같은 경우 -1이 반환되므로
  배열이 검색되지 않습니다.`

  제공된 색인 값이 음수이면
  배열 끝에서부터의 오프셋 값으로 사용됩니다.

참고
: 제공된 색인이 음수이면 배열은 여전히 앞에서 뒤로 검색됩니다.
계산된 인덱스가 0보다 작으면 전체 배열이 검색됩니다.

기본값 - 0 (전체 배열 검색)

## problem (두 번째 인자)에 5가 들어가면
배열의 길이와 같아서 -1이 돼서 안되는 거였음 ..