
// For changing Image1 Randomly on every refresh of Page.

var randomnumber1 = Math.floor(Math.random() * 6)+1;    // Fetch 1 to 6
var randomDiceImage = "dice" + randomnumber1 + ".png";  // Fetch file name dice1.png to dice6.png
var randomImageSource = "images/" + randomDiceImage;   // Fetch full path images/dice1.png to image/dice6.png

var image1 = document.querySelectorAll("img")[0];    // fetch src of element img.

image1.setAttribute("src", randomImageSource);     // Replace the src value to newly fetch value i.e full path with image of source.


// For changing Image2 Randomly on every refresh of Page - This is also a short-cut to above.

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";   // Fetch full path images/dice1.png to image/dice6.png

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);   // Combine short-cut command


// Title change - Who wins

if(randomnumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🎯 Player 1 Wins!";
}
else if(randomNumber2 > randomnumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🎯";
}
else{
  document.querySelector("h1").innerHTML = "🎯 Draw! 🎯";
}
