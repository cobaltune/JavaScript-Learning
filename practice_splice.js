
// splice 메소드를 활용하여 아래의 미션들을 수행

/* 1. fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도'를 추가
2. fruits 배열의 첫 번째 요소를 삭제
3. ages 배열에 마지막 요소를 삭제
4. ages 배열의 2번, 3번 인덱스를 26, 28로 변경
5. numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가
6. 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제 */


// my answer
let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

// fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도' 를 추가해 주세요.
fruits.splice (1, 1, '사과', '청포도');

// fruits 배열의 첫 번째 요소를 삭제해 주세요.
fruits.splice (0, 1);

// ages 배열에 마지막 요소를 삭제해 주세요.
ages.splice (ages.length - 1);

// ages 배열의 2번, 3번 인덱스를 26, 28로 변경해 주세요.
ages[2] = '26';
ages[3] = '28';

// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요.
numbers.splice(0, 0, 1, 2, 3, 5, 8, 9);

// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요.
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    numbers.splice (i, 1);
    i--;
  }
}

// 테스트 코드
console.log(fruits[1]);
console.log(fruits[0]);
console.log(ages[ages.length - 1]);
console.log(ages[3]);
console.log(numbers[3]);
console.log(numbers);


/* 코드 해석
** 인덱스 순번이 밀리는 걸 방지하기 위해 i--;

0 번째 인덱스 = 1
numbers   [0]   % 2 !== 0   = 0.5   i--

    0 번째 인덱스 = 2
numbers   [0]   % 2 !== 0   = 0   i++

    1 번째 인덱스 = 3
numbers   [1]   % 2 !== 0   = 1.5   i--

    1 번째 인덱스 = 5
numbers   [1]   % 2 !== 0   = 2.5   i--

    1 번째 인덱스 = 8
numbers   [1]   % 2 !== 0   = 4   i++

    2 번째 인덱스 = 9
numbers   [2]   % 2 !== 0   = 4.5   i-- */


// past_siwan answer
let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

fruits.splice(1, 1, '사과', '청포도');

fruits.splice(0, 1);

ages.splice(-1);

ages.splice(2, 2, '26', '28');

numbers.splice(0, 0, 1, 2, 3, 5, 8, 9);

for (let i = 0; i < numbers.length; i++){
  if (numbers[i] % 2 !== 0){
    numbers.splice(i, 1);
    i--;
  }
}

// 테스트 코드
console.log(fruits[1]);
console.log(fruits[0]);
console.log(ages[ages.length - 1]);
console.log(ages[3]);
console.log(numbers[3]);
console.log(numbers);


// answer sheet
fruits.splice(1, 1, '사과', '청포도');

fruits.splice(0, 1);

ages.splice(5, 1);

ages.splice(ages.length - 1, 1);

ages.splice(2, 2, 26, 28);

numbers.splice(0, 0, 1, 2, 3, 5, 8, 9);

// (for)
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    numbers.splice(i, 1);
    i--;
  }
}

// (while)
let i = 0;
while (i < numbers.length) {
  if (numbers[i] % 2 !== 0) {
    numbers.splice(i, 1);
  } else {
    i++;
  }
}