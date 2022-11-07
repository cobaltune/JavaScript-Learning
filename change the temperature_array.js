
/* 반복문을 이용해서 이번 주 온도를 섭씨로 기록한 배열을
각각의 섭씨(celsius)온도들을 화씨(fahrenheit)로 변환하여

celsius 배열의 각 요소들을
화씨로 변환한 값을 fahrenheit 배열에 추가해보기 */

/* 화씨로 변환하는 공식
F = ( C * 9 / 5 ) + 32; */


// my answer
let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];  // 섭씨
let fahrenheitTemps = [];  // 화씨

// 반복문을 이용해서
for (let i = 0; i < celsiusTemps.length; i++) {

// 배열의 각 요소들을 화씨로 변환한 값을
// fahrenheit 배열에 추가
fahrenheitTemps[i] = (celsiusTemps[i] * 9 / 5) + 32  
}

// fahrenheitTemps 테스트
console.log(fahrenheitTemps);


// past_siwan answer
let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = []


for(i = 0; i < celsiusTemps.length; i++){
  calCtoF(celsiusTemps[i], i);
}

function calCtoF(C, i){
  const F = ( C * 9 / 5 ) + 32;
  fahrenheitTemps[i] = F;
}

// fahrenheitTemps 테스트
console.log(fahrenheitTemps);


// answer sheet (for)
let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

for (let i = 0; i < celsiusTemps.length; i++) {
  fahrenheitTemps[i] = (celsiusTemps[i] * 9 / 5) + 32
}

// fahrenheitTemps 테스트
console.log(fahrenheitTemps);


// answer sheet (while)
let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

let i = 0;
while (i < celsiusTemps.length) {
  fahrenheitTemps[i] = (celsiusTemps[i] * 9 / 5) + 32
  i++;
}

// fahrenheitTemps 테스트
console.log(fahrenheitTemps);