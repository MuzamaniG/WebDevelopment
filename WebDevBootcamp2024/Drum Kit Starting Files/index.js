const buttons = document.querySelectorAll(".drum");

// Adds clicked notification to each button
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        new Audio("./sounds/tom-1.mp3").play();
    })
}
