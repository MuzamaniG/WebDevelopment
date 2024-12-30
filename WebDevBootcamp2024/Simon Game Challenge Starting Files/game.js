
/** List of colors for each button */
var buttonColors = ["red", "blue", "green", "yellow"];
/** Pattern given by game */
var gamePattern = [];
/** Pattern given by user */
var userClickedPattern = [];
/** Game's level */
var level = 0;
/** Whether game has started */
var started = false;

$(document).on('keydown', function() {
    if (!started) {
        started = true;
        nextSequence();
    }
})

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        console.log("success");
    }
    else {
        console.log("wrong");
    }
    //Checks if the user has entered all necessary inputs
    if (currentLevel == gamePattern.length - 1) {
        
    }
    setTimeout(function() {
        nextSequence();
        userClickedPattern = [];
    }, 1000)
}

/** Decides the next sequence */
function nextSequence() {
    level++;
    $("#level-title").text("Level " + level);
    
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
    checkAnswer(userChosenColor.length - 1)
}) 

/** Plays sound based on button */
function playSound(name) {
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

/** Animates button based on press */
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100)
    
}





