
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var radomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", radomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var radomImageSource2 = "images/" + "dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

  image2.setAttribute("src", radomImageSource2);


  if (randomNumber1>randomNumber2) {

    document.querySelector("h1").innerHTML = "🇧🇩 Player 1 Win ! ! !";

  } else if (randomNumber2>randomNumber1){

    document.querySelector("h1").innerHTML = "🇫🇮 Player 2 Win ! ! !";

  } else {

    document.querySelector("h1").innerHTML = "🇧🇩 Game Draw 🇫🇮 ";

  }
