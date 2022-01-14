'use strict';

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const showMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //NO input value
  if (!guess) {
    showMessage('🛑Put some values');

    //Player wins
  } else if (guess === secretNumber) {
    showMessage('🎉Congratucation');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Player guess to high
  } else if (guess !== secretNumber) {
    if (score > 0) {
      showMessage(guess > secretNumber ? '📈Too high' : '📉Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      showMessage('👎You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Aagin Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  showMessage('Start guessing ....');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
