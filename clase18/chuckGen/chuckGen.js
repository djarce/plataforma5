function randomChuck() {
  $.getJSON("https://api.chucknorris.io/jokes/random", function (data) {
    $("h2").text(data.value);
  });
}

randomChuck();

$("button").click(randomChuck);
