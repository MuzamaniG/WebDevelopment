
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = new Array();


/** Decides the next sequence */
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor);
}
