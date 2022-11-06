
/* dataType이라는 이름의 6개의 요소를 가진 배열의
요소들을 모두 출력하는 프로그램을 만들어보기 */

// 반복문의 개념 활용

// my answer
let dataType = [
  'number', 'string', 'boolean', 'null', 'undefined', 'object'];

for (let i = 0; i <= 5; i++) {
  console.log (dataType[i]);
}

// siwan *tip
for (let i = 0; i < dataType.length; i++) {
  console.log (dataType[i]);
}

/* array.length = 유지보수 good
배열 안에 요소가 늘어나도 항상 배열의 길이를 가져옴 */


// answer sheet (for)
let dataType = [
  'Number', 'String', 'Boolean', 'null', 'undefined', 'object'];

for (let i = 0; i < 6; i++) {
  console.log(dataType[i]);
}

// answer sheet (while)
let dataType = [
  'Number', 'String', 'Boolean', 'null', 'undefined', 'object'];

let i = 0;
while (i < 6) {
  console.log(dataType[i]);
  i++;
}