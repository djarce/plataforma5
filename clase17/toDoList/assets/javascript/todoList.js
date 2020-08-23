//Crosses out finished tasks
$("ul").on("click", "li", function () {
  $(this).toggleClass("completado");
});
//Deletes tasks
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});
//Adds tasks
$("input[type='text']").keypress(function (event) {
  if (event.key == "Enter") {
    $("ul").append(
      "<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " +
        $(this).val() +
        "</li>"
    );
    $(this).val("");
    event.stopPropagation();
  }
});
//Collapses tasks list and changes icon
$(".fa-angle-double-up").click(function () {
  $("ul").slideToggle();
  $(this).toggleClass("fa-angle-double-up fa-angle-double-down");
});
//Allows showing a message about collapsing the list
$(function () {
  $(document).tooltip();
});
