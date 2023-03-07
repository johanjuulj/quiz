"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 0;
let highscore = 0;

let message = document.querySelector(".message");

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".score").textContent = score;

document.querySelector(".check").addEventListener("click", check);
document.querySelector(".again").addEventListener("click", again);

function again() {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";

  console.log("again");
}
function check() {
  let guess = Number(document.querySelector(".guess").value);

  console.log("clicked");
  if (score === 0) {
    alert("Hallo! You lost please start over and try again!");
  }
  if (!guess) {
    displayMessage("Please input a guess!");
  } else if (guess === number) {
    displayMessage("Correct!!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "25rem";
    document.querySelector(".number").textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > number) {
    displayMessage("Your guess is too high!");
    score--;
  } else if (guess < number) {
    displayMessage("Your guess is too low!");
    score--;
  }
  document.querySelector(".score").textContent = score;
  if (score === 0) {
    displayMessage("You lost! Try again");
  }
}

// make everything inactive besides again after losing/winning
