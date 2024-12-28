$("h1").css("color", "red");

$("body").keydown(function(event) {
    $("h1").text(event.key);
})