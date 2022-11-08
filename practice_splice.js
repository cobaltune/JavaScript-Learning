
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



// fruits 배열의 첫 번째 요소를 삭제해 주세요.



// ages 배열에 마지막 요소를 삭제해 주세요.



// ages 배열의 2번, 3번 인덱스를 26, 28로 변경해 주세요.



// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요.



// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요.



// 테스트 코드
console.log(fruits[1]);
console.log(fruits[0]);
console.log(ages[ages.length - 1]);
console.log(ages[3]);
console.log(numbers[3]);
console.log(numbers);


// past_siwan answer
let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

// fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도' 를 추가해 주세요.
// 여기에 코드를 입력해 주세요.
fruits.splice(1, 1, '사과', '청포도');

// fruits 배열의 첫 번째 요소를 삭제해 주세요.
// 여기에 코드를 입력해 주세요.
fruits.splice(0, 1);

// ages 배열에 마지막 요소를 삭제해 주세요.
// 여기에 코드를 입력해 주세요.
ages.splice(-1);

// ages 배열의 2번, 3번 인덱스를 26, 28로 변경해 주세요.
// 여기에 코드를 입력해 주세요.
ages.splice(2, 2, '26', '28');

// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요.
// 여기에 코드를 입력해 주세요.
numbers.splice(0, 0, 1, 2, 3, 5, 8, 9);

// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요.
// 여기에 코드를 입력해 주세요.
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