
/* 각각 5명씩 팀을 나누려고 하는데, 다음 groups 배열을 가지고
이긴 사람 vs 진 사람 팀을 나눠 teams 배열 완성하기 */


// my answer
let groups = [
	['영준', '캡틴'], 
	['태순', '우재'],
	['재훈', '지웅'],
	['윤형', '동욱'],
	['규식', '소원'],
];

let teams = [
	[],  // 이긴 사람 : 0번 index
	[],  // 진 사람 : 1번 index
];

// 여기에 코드를 작성해 주세요.


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