let roomData = JSON.parse(localStorage.getItem("roomData") ?? "{}");
if (!roomData?.progress) {
	alert("No game progress data found. Dont come here!")
	location.href = "/Web_Frontend/src/page/setting.html";
}

document.querySelector("#bg-color").value = roomData.roomId;
var images = {
	"red": "../img/chess_red.svg",
	"blue": "../img/chess_blue.svg",
	"yellow": "../img/chess_yellow.svg",
	"green": "../img/chess_green.svg",
	"purple": "../img/chess_purple.svg",
	"gray": "../img/chess_white.svg"
};

var score = roomData.users.map((user, index) => [roomData.progress.walkDistance[index], user.name, images[user.name]]);
console.log(score)
// เดินมากสุด
// ถอยหลังมากสุด
// ตกงูมากสุด
// ตก event มากสุด
// ทอยได้หน้าเดิมต่อเนื่องมากสุด
let frames = document.querySelectorAll(".special-content img")
roomData.progress.reward.forEach((reward, index) => {
	if (reward < 0)
		return;
	let player = score[reward];
	frames[index].src = player[2];
});

var sortedArray = score.sort(function(a, b) {
	if (a[0] == b[0]) {
		return a[1] - b[1];
	}
	return b[0] - a[0];
});

var scoreBoard = document.getElementById("score-players");

for (const player of sortedArray) {
	let p = `
            <div class="score-player">
                <img src=${player[2]} alt="player">
                <h2>${player[1]}</h2>
                <h2>${player[0]}</h2>
            </div>`
	scoreBoard.insertAdjacentHTML('beforeend', p);
}

var winnerElm = document.getElementById("winner-container");
var el = `
        <div>
            <img src=${sortedArray[0][2]} alt="winner-img" class="winner-img">
            <h3>${sortedArray[0][1]}</h3>
        </div>
        `
winnerElm.insertAdjacentHTML('beforeend', el);

var mainCtn = document.getElementById("main-container");

const changeColor = () => {
	let b = document.getElementById("bg-color");
	if (b.value.length == 6) {
		try {
			mainCtn.style.backgroundColor = `#${b.value}`;
			console.log(mainCtn.style);
		} catch {
			mainCtn.style.backgroundColor = "#ffffff";
		}
	}
};
