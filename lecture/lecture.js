"use strict";
var imgCoords = '0';
// interface Example {
//   a: 3,
//   b: 7,
//   [key: string]: number
// }
var rsp = {
    ROCK: '0',
    SCISSORS: '-142px',
    PAPER: '-284px'
};
var score = {
    ROCK: 0,
    SCISSORS: 1,
    PAPER: -1
};
function computerChoice(imgCoords) {
    return Object.keys(rsp).find(function (k) { return rsp[k] === imgCoords; });
}
document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        var myChoice = this.textContent;
        var myScore = score[myChoice];
        var computerScore = score[computerChoice(imgCoords)];
        var diff = myScore - computerScore;
        if (diff === 0) {
            console.log('비겼습니다');
        }
        else if ([-1, 2].includes(diff)) {
            console.log('이겼습니다');
        }
        else {
            console.log('졌습니다');
        }
    });
});
if (document.querySelector('#computer')) {
    document.querySelector('#computer').style.background = "#ddd";
}
