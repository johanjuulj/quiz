"use strict";

const number = Math.random();

let message = document.querySelector(".message");
console.log(message);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 1;

document.querySelector(".check").addEventListener("click", check);

function check() {
  let guess = Number(document.querySelector(".guess").value);

  console.log("clicked");

  if (!guess) {
    document.querySelector(".message").textContent = "Please input a guess!";
  }
  console.log(number);
  if (guess === number) {
    document.querySelector(".message").textContent = "Correct guess!";
  }
}
