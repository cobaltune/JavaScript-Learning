
// 객체의 프로퍼티 네임을 가져오는 반복문
// for...in문

// 객체 내부에 있는 모든 프로퍼티 값들을 하나씩 다루어야 하는 경우

/* 객체 안에 있는 프로퍼티들을 가지고
반복적인 동작을 수행할 때 사용 */

for (변수 in 객체) {
  동작부분
}

/* 소괄호 내부에서 특정한 변수를 만들고
in 이라는 키워드 다음에 반복할 객체를 넣어주게 되면
이 객체에 프로퍼티 네임이 여기 변수에 할당되고
객체의 프로퍼티 개수만큼 반복 동작을 하게 됨 */


// codeit 이라는 객체를 하나 만들어서 for in 문으로 반복을 하는 코드

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

/* 소괄호 내부를 보면 key라는 변수를 만들고
in codeit 이라고 했으니까
codeit 객체의 프로퍼티 개수만큼 반복을 하는데
이때 key 라는 변수에
이 codeit 객체인 프로퍼티 네임들이 차례대로 전달되는 방식 */

for (let k in codeit) {
  console.log (k);
  console.log (codeit[k]);  // 대괄호 표기법을 활용하여 프로퍼티 값에 접근
}


// 숫자형(양수) 프로퍼티 네임

/* 프로퍼티 네임에는 숫자형(양수)을 작성해서 사용할 수도 있음
다만 실제로 사용될 때는 문자열로 형 변환이 됨. */


console.log (myObject['300']);

/* 이렇게 예외적인 파라미터 네임은 접근할 때
대괄호 표기법으로만 접근 가능 */

// 예외적인 파라미터 네임
//ex 1)
'chanho-park' // hyphen 이 들어간 프로퍼티 네임
console.log (myObject['chanho-park']);

// ex 2)
'chanho park' // 공백이 있는 문자열
console.log (myObject['chanho park']);


// 정수형 프로퍼티 네임

/* 객체는 정수형 프로퍼티 네임을 오름차순으로 먼저 정렬하고,
나머지 프로퍼티들은 추가한 순서대로 정렬하는 특징이 있음 */

let myObject = {
  3: '정수3',
  name: 'codeit',
  1: '정수1',
  birthDay: '2017.5.17',
  2: '정수2',
};

for (let key in myObject) {
  console.log(key);
}

// 출력값
1
2
3
name
birthDay

// 정수형 프로퍼티에 따옴표를 붙여 문자열처럼 만들어도
// 정렬방식은 동일하게 처리

/* 자동으로 정렬되는 특성이 장점처럼 느껴질 수도 있지만,
대부분의 경우에는 의도치 않은 결과를 가져올 수도 있기 때문에
일반적으로 정수형 프로퍼티는 잘 사용되지 않음 */