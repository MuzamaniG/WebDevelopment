
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

/** Restarts the game */
function startOver() {
    started = false;
    level = 0;
    gamePattern = [];
}

/** Way to start the game */
$(document).on('keydown', function() {
    if (!started) {
        started = true;
        nextSequence();
    }
})

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");
        //Checks if the user has entered all necessary inputs
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000)
        }
    }
    else {
        console.log("wrong");
        var wrongAudio = new Audio("./sounds/wrong.mp3");
        wrongAudio.play();
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

/** Decides the next sequence */
function nextSequence() {
    userClickedPattern = [];
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
    checkAnswer(userClickedPattern.length - 1)
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







