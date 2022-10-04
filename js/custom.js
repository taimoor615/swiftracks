// menu toggle

$(document).ready(function(){
    $("#menu-toggle-button").click(function(){
      $(".main-menu-wrap").slideDown();
    });
    $("#menu-close-button").click(function(){
      $(".main-menu-wrap").slideUp();
    });
});