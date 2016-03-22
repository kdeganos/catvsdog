$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#meow").prepend("<li>Meow!</li>");
    $("ul#bark").prepend("<li>Bark!</li>");
  });

  $("button#dog").click(function() {
    $("ul#bark").prepend("<li>Bark!</li>");
    $("ul#meow").prepend("<li>Meow!</li>");
  });

  $(".picturething p").click(function() {
    $("p#pic").after("<img id='walrus' src='img/walrus.jpg'>");
    /*$(".picturething").children("img#walrus").first().click(function() {
      $(this).remove();*/
      //the above and below 2 lines accomplish the same effect in this particular webpage.
    $("img#walrus").click(function() {
      $(this).remove();
    });
  });
});
