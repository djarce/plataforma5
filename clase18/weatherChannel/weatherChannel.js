function cargarCiudad() {
  let ciudad = $("input").val();
  $.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      encodeURI(ciudad) +
      "&appid=95176c8edea30e33338e0eaddd53a916",
    function (data) {
      $("#ciudad").text(data.name);
      $("#temperatura")
        .text((data.main.temp - 273.15).toFixed(1))
        .append("<sup>°C</sup>");
      $("#wicon").attr(
        "src",
        "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
      );
      $("#descripcion").text(data.weather[0].description);
      $(".container").css("visibility", "visible");
      $("input").val("");
    }
  );
}

$("button").click(cargarCiudad);
$("input").keypress(function (event) {
  if (event.keyCode === 13) {
    cargarCiudad();
  }
});
