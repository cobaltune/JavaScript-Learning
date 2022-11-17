
/* 각각 5명씩 팀을 나누려고 하는데, 다음 groups 배열을 가지고
이긴 사람 vs 진 사람 팀을 나눠 teams 배열 완성하기 */


// my answer
let groups = [
	['영준', '캡틴'], 
	['태순', '우재'],
	['재훈', '지웅'],
	['윤형', '동욱'],
	['규식', '소원']
]

let teams = [
	[],
	[]
];

 for(let i = 0; i < groups.length; i++) {
   for (let j = 0; j < groups[i].length; j++) {
     teams [j][i] = groups [i][j];
   }
 }


// 테스트 코드
console.log(teams[0]);
console.log(teams[1]);


// past_siwan answer
let groups = [
	['영준', '캡틴'], 
	['태순', '우재'],
	['재훈', '지웅'],
	['윤형', '동욱'],
	['규식', '소원']
]

let teams = [
	[],
	[]
];

// 여기에 코드를 작성해 주세요.

 for(let i = 0; i < groups.length; i++){
   teams[0].push(groups[i][0]);
   teams[1].push(groups[i][1]);
 }


// 테스트 코드
console.log(teams[0]);
console.log(teams[1]);


// anwer sheet (for)
let groups = [
  ['영준', '캡틴'], 
  ['태순', '우재'],
  ['재훈', '지웅'],
  ['윤형', '동욱'],
  ['규식', '소원'],
];

let teams = [
  [],
  [],
];

for(let i = 0; i < groups.length; i++) {
  for(let j = 0; j < groups[i].length; j++) {
    teams[j][i] = groups[i][j];
  }
}

console.log(teams[0]);
console.log(teams[1]);


/* 코드 해석
`groups`의 각 요소별 0번 index끼리 묶고, 1번 index끼리 묶음

하나씩 바꿔주는 것도 하나의 방법이지만
이렇게 모두 바꿔주기에는 코드가 너무 비효율적임 */

teams[0][0] = groups[0][0];
teams[1][0] = groups[0][1];
teams[0][1] = groups[1][0];
teams[1][1] = groups[1][1];
teams[0][2] = groups[2][0];
teams[1][2] = groups[2][1];
teams[0][3] = groups[3][0];
teams[1][3] = groups[3][1];
teams[0][4] = groups[4][0];
teams[1][4] = groups[4][1];

// 일정한 규칙을 찾아서 반복문을 통해 조금 더 효율적인 코드를 작성

/* 일단 하나하나 필요한 작업들을 모두 작성해 보면,
결국 groups의 각 index를 뒤집어서 teams에 할당해 주면
간단하게 배열을 나눠줄 수 있음

2차원 배열을 다뤄야 하니,
이렇게 반복문을 이렇게 겹치면 각 요소별 값들을 가져올 수 있음

최종적으로 groups의 각 index를 뒤집어서
teams에 할당해 주면 좀 더 효율적으로 문제 해결 */


// 팀 나누기 > 질문 > 조금 더 간단하게 문제를 …
let groups = [
	['영준', '캡틴'], 
	['태순', '우재'],
	['재훈', '지웅'],
	['윤형', '동욱'],
	['규식', '소원']
]

let teams = [
	[],
	[]
];

//groups 를 한줄 씩 출력
//ex)['영준', '캡틴'],['태순', '우재']
for (let i of groups) {

	// 첫 번째 사람을 teams의 0번 인덱스에 push로 저장
  teams[0].push(i[0])

	// 두 번째 사람을 teams의 1번 인덱스에 push로 저장
  teams[1].push(i[1])
}


// 테스트 코드
console.log(teams[0]);
console.log(teams[1]);

/* 코드 해석
`teams[0].push(i[0])` 에서 `i[0]`는
기존 가위바위보 조에서 이기거나 진 선수중 하나를 의미

but

위 코드는 그룹 매치에서 이긴 사람/진 사람을 나눠서 배치한다는 task,
모범답안은 배열의 행/열을 반전시킨다는 task라
보다 보편적으로 사용할 수 있단 의미

고로 위 코드는 정해진 값에 대해서만 솔루션이 되기 때문에 비추천
=> 다양한 상황에서 항상 같은 답을 내는 솔루션이 좋은 코드 */


// 팀 나누기 > 질문 > 와 ,,, 딱 봤을 때 뒤집어서 푼다는 …
let groups = [
	['영준', '캡틴'], 
  ['태순', '우재'],
  ['재훈', '지웅'],
  ['윤형', '동욱'],
  ['규식', '소원']
]

let teams = [
  [],
  []
];

for (let i = 0; i < groups.length; i++) {
  teams[0][i] = groups[i][0];
}

for (let j = 0; j < groups.length; j++) {
  teams[1][j] = groups[j][1];
}


// 테스트 코드
console.log(teams[0]);
console.log(teams[1]);


// 팀 나누기 > 질문 > 이런 방식으로 했을 경우도 …
let groups = [
	['영준', '캡틴'], 
  ['태순', '우재'],
  ['재훈', '지웅'],
  ['윤형', '동욱'],
  ['규식', '소원']
]

let teams = [
  [],
  []
];

for (let i = 0; i < groups.length; i++) {
  teams[0][i] = groups[i][0];
  teams[1][i] = groups[i][1];
}


// 테스트 코드
console.log(teams[0]);
console.log(teams[1]);

/* 코드 해석
지금과 같이 이긴 사람/진 사람으로만 편을 가르다면 상관없지만
만약 비긴 사람이 추가되면, 이 경우엔 teams[0], teams[1]에서
하나를 더 추가해야 하니 위 코드는 사용할 수 없음

범용성을 본다면 해설과 같이 for 문을 중첩으로 푸는 걸 권유 */