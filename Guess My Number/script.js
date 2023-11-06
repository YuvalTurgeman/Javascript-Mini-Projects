"use strict";

//create necessary variebles for the program:
//score, highscore, guess, secretNumber

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//create ncessary variebles for document elements
//message, number, guess, 'highscore',check btb, again btn, 'score'

const bodyEl = document.querySelector("body");
const messageEl = document.querySelector(".message");
const numberEl = document.querySelector(".number");
const checkBtnEl = document.querySelector(".check");
const againEl = document.querySelector(".again");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
let guess;

const displayMessage = function (msg) {
  messageEl.textContent = msg;
};

const playGame = function () {
  guess = Number(document.querySelector(".guess").value);
  //when there is no input
  if (!guess) displayMessage("No number! ⛔️");
  //when player wins
  else if (guess === secretNumber) {
    displayMessage("You win! 🎉");
    numberEl.textContent = secretNumber;
    numberEl.style.width = "30rem";
    bodyEl.style.backgroundColor = "#60b347";

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  }
  //when the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high! 📈" : "Too low! 📉");
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      scoreEl.textContent = 0;
    }
  }
};

const playAgain = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  scoreEl.textContent = score;
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  numberEl.textContent = "?";

  numberEl.style.width = "15rem";
  bodyEl.style.backgroundColor = "#222";
};

checkBtnEl.addEventListener("click", playGame);

againEl.addEventListener("click", playAgain);

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") playGame();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Backspace") playAgain();
});
