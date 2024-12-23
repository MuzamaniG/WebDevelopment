const buttons = document.querySelectorAll(".drum");

// Adds clicked notification to each button
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        alert("Clicked yes!");
    })
}
