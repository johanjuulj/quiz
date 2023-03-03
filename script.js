"use strict";

const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

let message = document.querySelector(".message");
console.log(message);

document.querySelector(".number").textContent = number;
document.querySelector(".score").textContent = score;

document.querySelector(".check").addEventListener("click", check);

function check() {
  let guess = Number(document.querySelector(".guess").value);

  console.log("clicked");
  if (score === 0) {
    alert("Hallo! You lost please start over and try again!");
  }
  if (!guess) {
    document.querySelector(".message").textContent = "Please input a guess!";
  } else if (guess === number) {
    document.querySelector(".message").textContent = "Correct guess!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "25rem";
  } else if (guess > number) {
    document.querySelector(".message").textContent = "Your guess is to high!";
    score--;
  } else if (guess < number) {
    document.querySelector(".message").textContent = "Your guess is to low!";
    score--;
  }
  document.querySelector(".score").textContent = score;
  if (score === 0) {
    document.querySelector(".message").textContent =
      "You lost, please try again!";
  }
}
