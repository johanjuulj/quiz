"use strict";
class Item {
  constructor(name, blurp, img, postalcode, url, price) {
    this.name = name;
    this.blurp = blurp;

    this.img = img;

    this.postalcode = postalcode;
    this.url = url;
    this.price = price;
  }
}

const itemList = [
  new Item(
    "Pølsevogn, Ukendt Ukendt, lastevne (kg): 250",
    "Rigtig fin Salgsvogn, til sommer sæsonen, der medfølger det inventar der er på billederne. Vognen er indregisteret og registrerings attest medfølger ",
    "pølsevogn.png",
    "8350",
    "https://www.dba.dk/poelsevogn-ukendt-ukendt/id-1099471743/",
    39900
  ),
  new Item(
    "Lego Star Wars, Kylo Ren",
    "Kilo Ren, Legofigur Figuren er ny og ubrugt",

    "legomand.png",
    "3320",
    "https://www.dba.dk/lego-star-wars-kylo-ren-k/id-1022089098/",
    199
  ),
  new Item(
    "Bleer, Rema 1000",
    "2 uåbnet pakker bleer samt 30 løse bleer. Fra røgfrit hjem. ",

    "bleer.png",
    "2640",
    "https://www.dba.dk/bleer-rema-1000-2-uaabnet/id-1099625345/",
    120
  ),
];

let number = Math.trunc(Math.random() * itemList.length);
let item = itemList[number];

let score = 20;
let highscore = 0;
let message = document.querySelector(".message");

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}
//setting the score
document.querySelector(".score").textContent = score;
//set product name
document.querySelector(".productName").textContent = item.name;
//set blurp content
document.querySelector(".blurp").textContent = item.blurp;
//set image
document.querySelector(
  ".imageBox"
).style.backgroundImage = `url("img/${item.img}")`;

document.querySelector(".btn-check").addEventListener("click", check);
document.querySelector(".btn-again").addEventListener("click", again);

function again() {
  number = Math.trunc(Math.random() * itemList.length);

  item = itemList[number];
  //set product name
  document.querySelector(".productName").textContent = item.name;
  //set blurp content
  document.querySelector(".blurp").textContent = item.blurp;
  //set image
  document.querySelector(
    ".imageBox"
  ).style.backgroundImage = `url("img/${item.img}")`;

  score = 20;
  document.querySelector(".score").textContent = score;
  //document.querySelector("body").style.backgroundColor = "#222";
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
