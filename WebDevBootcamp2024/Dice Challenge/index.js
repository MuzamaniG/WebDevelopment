var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
const image1 = document.querySelector(".img1");
const heading = document.querySelector("h1");

image1.setAttribute("src",  "images/dice" + randomNumber1 + ".png");

const image2 = document.querySelector(".img2");

image2.setAttribute("src",  "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    heading.textContent = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    heading.textContent = "Player 2 Wins!";
}
else {
    heading.textContent = "It's a tie!";
}



