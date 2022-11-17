
/* ### 13. 팀 나누기  +) self extra problem

### 알고자 하는 바
- 이긴 사람
- 진 사람
- 비긴 사람 */


// 시도는 좋았다

// 본래 제공된 코드
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 출력값
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]


// 구글링해서 얼레벌레 나눴지만 이해도는 부족한 나
const list = [
	['영준', '캡틴'],
  ['태순', '우재'],
	['재훈', '지웅'],
  ['윤형', '동욱'],
	['규식', '소원']
];

const threePartIndex = Math.ceil(list.length / 3);

const thirdPart = list.splice(-threePartIndex);
const secondPart = list.splice(-threePartIndex);
const firstPart = list;


// 테스트 코드
console.log (firstPart);
console.log (secondPart);
console.log (thirdPart);

// 출력값
[["영준", "캡틴"]]
[["태순", "우재"], ["재훈", "지웅"]]
[["윤형", "동욱"], ["규식", "소원"]]

/* 참고 사이트 1)
[https://www.folkstalk.com/tech/how-to-divide-equal-3-parts-of-an-array-javascript-with-code-examples/](https://www.folkstalk.com/tech/how-to-divide-equal-3-parts-of-an-array-javascript-with-code-examples/)

참고 사이트 2)
[https://codingnconcepts.com/javascript/how-to-divide-array-in-equal-parts-in-javascript/](https://codingnconcepts.com/javascript/how-to-divide-array-in-equal-parts-in-javascript/) */