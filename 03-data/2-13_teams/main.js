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

// 여기에 코드를 작성하세요
for(let name of groups){
   teams[0].push(name[0]);
   teams[1].push(name[1]);
 }

for(let i = 0; i < groups.length; i++){
  teams[0] = groups[i][0];
  teams[1] = groups[i][1];
  // console.log(groups[i].length)

  for(let j = 0; j < groups[i].length; j++){
    // console.log(groups[i][j])
    teams[j][i] = groups[i][j];
  }
}

// 이 코드가 가독성이 더 좋지 않을까?
let win = [];
let lose = [];

for (let i = 0; i < groups.length; i++) {
  win.push(groups[i][0]);
  lose.push(groups[i][1]);
}

teams = [win,lose]

// 테스트 코드
console.log(teams[0]);
console.log(teams[1]);