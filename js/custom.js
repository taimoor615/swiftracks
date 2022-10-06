// menu toggle
$(document).ready(function(){
    $("#menu-toggle-button").click(function(){
      $(".main-menu-wrap").slideDown();
    });
    $("#menu-close-button").click(function(){
      $(".main-menu-wrap").slideUp();
    });
});
/*==============================
        Cursor Behaviour
================================*/
document.body.addEventListener('mousemove', function(e){
    var mX = e.pageX + 'px';
    var mY = e.pageY + 'px';
    document.getElementsByClassName('cursor')[0].style.transform = 'translate3d(' + mX + ',' + mY  + ',' +  '0px)';
});