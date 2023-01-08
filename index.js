var randomNumber1;
randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber1 + ".png";
var randomImageSrc = randomImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSrc);

var randomNumber2;
randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber2 + ".png";
var randomImageSrc = randomImage;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSrc);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Won!!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Won!!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
