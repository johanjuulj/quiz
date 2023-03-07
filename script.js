"use strict";
class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const itemList = [
  new Item("the egg", 6200),
  new Item("slightly used toothbrush", 1),
  new Item("lightly petted rabbit", 25),
  new Item("row boat", 250),
];

let number = Math.trunc(Math.random() * itemList.length);
let item = itemList[number];
console.log(item);
let score = 20;
let highscore = 0;

//for (let i = 0; i < houseList.length; i++) {
//  console.log(houseList[i]);
//}

let message = document.querySelector(".message");

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".score").textContent = score;

document.querySelector(".check").addEventListener("click", check);
document.querySelector(".again").addEventListener("click", again);

function again() {
  number = Math.trunc(Math.random() * itemList.length);
  console.log(number);
  item = itemList[number];
  console.log(item);
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  //document.querySelector(".itemHidden").style.width = "15rem";
  document.querySelector(".itemHidden").textContent = item.name;
}
function check() {
  let guess = Number(document.querySelector(".guess").value);

  if (score === 0) {
    alert("Hallo! You lost please start over and try again!");
  }
  if (!guess) {
    displayMessage("Please input a guess!");
  } else if (guess === item.price) {
    displayMessage("Correct!!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    //document.querySelector(".number").style.width = "100rem";
    // sets guess box to the guess number if correct
    //document.querySelector(".number").textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > item.price) {
    displayMessage("Your guess is too high!");
    score--;
  } else if (guess < item.price) {
    displayMessage("Your guess is too low!");
    score--;
  }
  document.querySelector(".score").textContent = score;
  if (score === 0) {
    displayMessage("You lost! Try again");
  }
}

// make everything inactive besides again after losing/winning
