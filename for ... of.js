
/* 배열 votes의 정보를 토대로,
객체 voteCounter에 후보별 득표수를 정리하는 프로그램을 만들어보기 */

// my answer
// 투표 결과 리스트
let votes = [
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이재식', '이재식', '이규하', '이규하', '이재식',
  '이규하', '이규하', '이규하', '이규하', '이재식',
  '이재식', '이규하', '이재식', '이재식', '이재식',
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이재식', '이재식', '이재식', '이규하',
];

// 후보별 득표수 객체
let voteCounter = {};

// votes 배열을 이용해서 voteCounter 객체를 정리하기
for (let name of votes) {
  if (voteCounter[name] === undefined) {
    voteCounter['이재식'] = 0;
    voteCounter['이규하'] = 0;
  }
  else if (name === '이재식') {
    voteCounter['이재식'] += 1;
  }
  else if (name === '이규하') {
    voteCounter['이규하'] += 1;
  }
}

// 후보별 득표수 출력
console.log(voteCounter);


// try again_my answer
// 투표 결과 리스트
let votes = [
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이재식', '이재식', '이규하', '이규하', '이재식',
  '이규하', '이규하', '이규하', '이규하', '이재식',
  '이재식', '이규하', '이재식', '이재식', '이재식',
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이재식', '이재식', '이재식', '이규하',
];

// 후보별 득표수 객체
let voteCounter = {};

// votes 배열을 이용해서 voteCounter 객체를 정리하기
for (let name of votes) {
  if (voteCounter[name] === undefined) {
    voteCounter[name] = 1;
  } else {
    voteCounter[name] += 1;
  }
}

// 후보별 득표수 출력
console.log(voteCounter);

/* 코드 해석

- 프로퍼티가 존재하는지 여부를 판단할 때는
  undefined 값과 일치비교를 할 수도 있지만,
  in 연산자를 통해 확인할 수도 있음

  voteCounter[name] === undefined;
  name in voteCounter;

- 1번 케이스는 해당 후보가 첫 득표를 한 상황
- 2번 케이스는 해당 후보가 이미 최소 하나의 득표를 한 상황 */


// past_siwan answer
// 투표 결과 리스트
let votes = ['이재식', '이재식', '이규하', '이규하', '이규하',
'이재식', '이재식', '이규하', '이규하', '이재식',
'이규하', '이규하', '이규하', '이규하', '이재식',
'이재식', '이규하', '이재식', '이재식', '이재식',
'이재식', '이재식', '이규하', '이규하', '이규하',
'이규하', '이규하', '이재식', '이규하', '이규하',
'이규하', '이규하', '이재식', '이규하', '이규하',
'이규하', '이재식', '이재식', '이재식', '이규하']

// 후보별 득표수 객체
let voteCounter = {
};

// votes 배열을 이용해서 voteCounter 객체를 정리하기
for (let name of votes) {
if(name in voteCounter){
voteCounter[name] += 1;
} else {
voteCounter[name] = 1;
}
}

// 후보별 득표수 출력
console.log(voteCounter);


// answer sheet (for)
// 투표 결과 리스트
let votes = [
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이재식', '이재식', '이규하', '이규하', '이재식',
  '이규하', '이규하', '이규하', '이규하', '이재식',
  '이재식', '이규하', '이재식', '이재식', '이재식',
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이재식', '이재식', '이재식', '이규하',
];

// 후보별 득표수 객체
let voteCounter = {};

// votes 배열을 이용해서 voteCounter 객체를 정리하기
for (let name of votes) {
  // 코드를 작성하세요.
  if (name in voteCounter) {
    voteCounter[name]+= 1;
  } else {
    voteCounter[name] = 1;
  }
}

// 후보별 득표수 출력
console.log(voteCounter);