
/* 반복문을 이용해서 이번 주 온도를 섭씨로 기록한 배열을
각각의 섭씨(celsius)온도들을 화씨(fahrenheit)로 변환하여

celsius 배열의 각 요소들을
화씨로 변환한 값을 fahrenheit 배열에 추가해보기 */

/* 화씨로 변환하는 공식
F = ( C * 9 / 5 ) + 32; */


// my answer


// past_siwan answer
let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = []


// 여기에 코드를 작성해 주세요.
for(i = 0; i < celsiusTemps.length; i++){
  calCtoF(celsiusTemps[i], i);
}

function calCtoF(C, i){
  const F = ( C * 9 / 5 ) + 32;
  fahrenheitTemps[i] = F;
}

// fahrenheitTemps 태스트
console.log(fahrenheitTemps);


// answer sheet (for)