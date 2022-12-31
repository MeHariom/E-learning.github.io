$(document).ready(function(){
    $("#submitButton").hover(function() {
      $(this).css("background-color", "#000000");
      $(this).css("color", "#ffffff");
    }, function() {
      $(this).css("background-color", "#ffffff");
      $(this).css("color", "#000000");
    });
  });