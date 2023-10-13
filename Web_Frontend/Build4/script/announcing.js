var score = [
    [101, "Mr.Groose Groose Angle", "../img/angle-duck.jpg"],
    [98, "Mr.Groose Groose Dark", "../img/dark-duck.jpg"],
    [103, "Mr.Groose Groose Hurt", "../img/hurt-duck.jpg"],
    [143, "Mr.Groose Groose Red", "../img/red-duck.webp"],
    [34, "Mr.Groose Groose White", "../img/white-duck.webp"],
    [94, "Mr.Groose Groose Yellow", "../img/yellow-duck.webp"]
];


var sortedArray = score.sort(function(a, b) {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    }
    return b[0] - a[0];
  });

var scoreBoard = document.getElementById("score-players");

for(const player of sortedArray) {
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
    if(b.value.length == 6) {
        try {
            mainCtn.style.backgroundColor = `#${b.value}`;
            console.log(mainCtn.style);
        } catch {
            mainCtn.style.backgroundColor = "#ffffff";
        }
    }
};
