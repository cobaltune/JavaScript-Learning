

// 객체의 프로퍼티 네임을 가져오는 반복문
// for...in문

// 객체 내부에 있는 모든 프로퍼티 값들을 하나씩 다루어야 하는 경우

/* 객체 안에 있는 프로퍼티들을 가지고
반복적인 동작을 수행할 때 사용 */

for (변수 in 객체) {
  동작부분
}

// 소괄호 내부에서 특정한 변수를 만들고
// in 이라는 키워드 다음에 반복할 객체를 넣어주게 되면
// 이 객체에 프로퍼티 네임이 여기 변수에 할당되고
// 객체의 프로퍼티 개수만큼 반복 동작을 하게 됨

let codeit = {
  name: '코드잇',
  bornYear: 2017,
  isVeryNice: true,
  worstCourse: null,
  bestCourse: '자바스크립트 프로그래밍 기초'
}

for (let key in codeit) {
  console.log (key);
}

// codeit 이라는 객체를 하나 만들어서
// for in 문으로 반복을 하는 코드

// 소괄호 내부를 보면 key라는 변수를 만들고
// in codeit 이라고 했으니까
// codeit 객체의 프로퍼티 개수만큼 반복을 하는데
// 이때 key 라는 변수에
// 이 codeit 객체인 프로퍼티 네임들이 차례대로 전달되는 방식

for (let k in codeit) {
  console.log (k);
  console.log (codeit[k]);  // 대괄호 표기법을 활용하여 프로퍼티 값에 접근
}