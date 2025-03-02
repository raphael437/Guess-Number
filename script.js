"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "correct finaly";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 20;
console.log(document.querySelector(".guess").value);
*/
let relvalue = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const msg = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    msg("no number");
  } else if (guess === relvalue) {
    msg(`${guess} is the correct number`);
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = relvalue;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== relvalue) {
    if (score > 1) {
      msg(guess > relvalue ? "too high" : "too low");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      msg("game over");
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  msg("Start guessing...");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  score = 20;
  document.querySelector(".score").textContent = score;
  relvalue = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
});
