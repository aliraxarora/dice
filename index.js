
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImages = "images/dice"+ randomNumber1 +".png";
console.log(randomDiceImages);
var randomImageSource = "images/"+ randomDiceImages;

var image1 =document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImages);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImages2 = "images/dice"+ randomNumber2 +".png";

var randomImageSource2 = "images/"+ randomDiceImages2;

var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImages2);


if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="player1 wins!";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player2wins!";


}else{
    document.querySelector("h1").innerHTML="draw";
}