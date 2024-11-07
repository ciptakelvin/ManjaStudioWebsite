// window.onscroll = function(){
//     var scrollPosition = document.documentElement.scrollTop;
//     if (scrollPosition<100) {

//     }
    
// }
$(document).ready(function () {
    $("#sidebar").hide();
    $("#sidebar h2").css("color","#9e9e9e");
    $("#sidebar p").css("color","#9e9e9e");
    $("#sidebar h2").eq(0).css("color","white");
    $("#sidebar p").eq(0).css("color","white");
});


$(document).scroll(function () { 
    $("#sidebar").fadeIn();
    clearInterval(interval);
    interval = setInterval(() => {
        $("#sidebar").fadeOut();
        didScroll = false;
        console.log('Someone scrolled me!')
    }, 500);
    var scroll = Math.floor($(window).scrollTop()/400);
    $("#sidebar h2").css("color","#9e9e9e");
    $("#sidebar p").css("color","#9e9e9e");
    $("#sidebar h2").eq(scroll).css("color","white");
    $("#sidebar p").eq(scroll).css("color","white");
});