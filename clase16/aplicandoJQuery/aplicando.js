$("h1").css("color", "#0000ff");
$("body").css("color", "#ff0000");
$("#everything").css("font-size", "30px");
$(".holder").css("border", "2px solid #000000");
$("ul li").css("font-weight", "bold");
$("p").css("background-color", "#00ff00");
//$("#secret").css("display", "none");
$("#secret").css("display", "block");
$("#change-me").text("Ya le cambié el texto.");
$("#change-me").append(" Nuevo texto al final de la oración.");
$("#change-me").html(
  "<p>Soy un p y tengo texto.</p><p>Soy otro p y tengo texto.</p>"
);
$("#change-me").append("<p>Soy el nuevo p.</p>");
$("li").text("Le cambié el texto a los li.");
$("li").append(" Y ahora les agregué más texto.");
$("#everything").append("<ul><li></li><li></li><li></li></ul>");
