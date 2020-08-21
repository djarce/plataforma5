$("body").prepend("<div id='container'></div>");
$("#container").html("<img></img>");
$("img").attr("src", "https://media.giphy.com/media/4pMX5rJ4PYAEM/giphy.gif");
/*$("img").css({
  width: "30px",
  height: "30px",
});*/
$("img").css({
  width: "40vw",
  height: "60vh",
});
$("#container").append(
  "<img src='https://media.giphy.com/media/citBl9yPwnUOs/giphy.gif'></img>"
);
$("#container").prepend("<h1>Homer´s website</h1>");
$("img").fadeToggle(3000, function () {
  $("img").fadeIn(3000);
});

//Genera una posición aleatoria.
function generateRandomX() {
  return Math.floor(Math.random() * window.innerWidth);
}
function generateRandomY() {
  return Math.floor(Math.random() * window.innerHeight);
}

$("img").each(function () {
  $(this).css({
    position: "fixed",
    left: generateRandomX(),
    top: generateRandomY(),
  });
});
