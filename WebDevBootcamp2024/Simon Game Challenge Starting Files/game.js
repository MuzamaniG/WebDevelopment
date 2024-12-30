
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];


/** Decides the next sequence */
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

/** Click functionality for user */
$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
}) 

/** Plays sound based on button */
function playSound(name) {
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

/** Animates button based on press */
function animatePress(currentColor) {
    $("#" + currentColor).classList.add("pressed");
}





