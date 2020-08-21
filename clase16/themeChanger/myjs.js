let color;
while (!(color === "red" || color === "green" || color === "blue")) {
  color = prompt(
    "Choose one of this colors: red, green or blue."
  ).toLocaleLowerCase();
}
switch (color) {
  case "red":
    $("body").css("background-color", "#DAA89B");
    $("h1").css("color", "#AC3931");
    $("p").css("color", "#C94940");
    $(document).ready(function () {
      alert("Red theme applied successfully.");
    });
    break;
  case "green":
    $("body").css("background-color", "#EAF27C");
    $("h1").css("color", "#194D30");
    $("p").css("color", "#32965D");
    $(document).ready(function () {
      alert("Green theme applied successfully.");
    });
    break;
  case "blue":
    $("body").css("background-color", "#86BBD8");
    $("h1").css("color", "#2F4858");
    $("p").css("color", "#33658A");
    $(document).ready(function () {
      alert("Blue theme applied successfully.");
    });
    break;
  default:
    alert("Please enter a valid color");
}
