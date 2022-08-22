'use strict';
//  Game logic
let score = 20;
let secretNum = Math.trunc(Math.random()* 9 ) + 1
document.querySelector('.number').textContent = secretNum;
document.querySelector('.check').addEventListener('click', 
function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = '🙈🙈🙈 No number!!';
        score--;
        document.querySelector('.score').textContent = score;
    } else if (guess === secretNum) {
        document.querySelector('.message').textContent = '😎😎😎 Siuuu You won!';
    } else if (guess < secretNum) {
        if (score > 1) {
            document.querySelector('.message').textContent = '🙈🙈🙈 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '🤯🤯🤯 Bye Loser!';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess > secretNum) {
        if (score > 1) {
            document.querySelector('.message').textContent = '🙈🙈🙈 Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '🤯🤯🤯 Bye Loser!'
            document.querySelector('.score').textContent = 0;
        }
    }
})