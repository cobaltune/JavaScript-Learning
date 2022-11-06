
/* Date객체와 메소드를 활용해서
재상이가 입사한 지 며칠째인지 계산해주는 workDayCalc 함수 만들어보기 */

/* 오늘의 날짜는 2112년 8월 24일이고,
재상이의 입사일은 2109년 7월 1일입니다.

만약 8월 24일에 입사했고,
오늘이 8월 24일이면 0일이 아니라 '입사한 지 1일째'입니다. */


// my answer
let today = new Date(2112, 8, 24);
let jaeSangStart = new Date(2109, 7, 1);

function workDayCalc(startDate) {
  
let timeDiff = today.getTime() - jaeSangStart.getTime();
let dayDiff = timeDiff / 1000 / 60 / 60 / 24;

console.log (`오늘은 입사한 지 ${dayDiff + 1}일째 되는 날 입니다.`);
}

workDayCalc(jaeSangStart);


// past_siwan answer
let today = new Date(2112, 8, 24);
let jaeSangStart = new Date(2109, 7, 1);

let dday = today - jaeSangStart;
function workDayCalc(startDate) {
	// 며칠째 일하는 중인지 출력
	console.log(`오늘은 입사한 지 ${dday / 1000 / 60 / 60 / 24 + 1}일째 되는 날 입니다.`);
}

workDayCalc(jaeSangStart);


// answer sheet
let today = new Date(2112, 8, 24);
let jaeSangStart = new Date(2109, 7, 1);

function workDayCalc(startDate) {
  // 여기에 코드를 작성해 주세요.
  let timeDiff = today.getTime() - startDate.getTime();
  let dayDiff = timeDiff / 1000 / 60 / 60 / 24;

  console.log(`오늘은 입사한 지 ${dayDiff + 1}일째 되는 날 입니다.`);
}

workDayCalc(jaeSangStart);