// window.onscroll = function(){
//     var scrollPosition = document.documentElement.scrollTop;
//     if (scrollPosition<100) {

//     }
    
// }
$(document).scroll(function () { 
    var scroll = Math.floor($(window).scrollTop()/400);
    $("#sidebar h2").css("color","#9e9e9e")
    $("#sidebar p").css("color","#9e9e9e")
    $("#sidebar h2").eq(scroll).css("color","white")
    $("#sidebar p").eq(scroll).css("color","white")
});

$(document).ready(function () {
    $("#sidebar h2").css("color","#9e9e9e");
    $("#sidebar p").css("color","#9e9e9e");
    $("#sidebar h2").eq(0).css("color","white");
    $("#sidebar p").eq(0).css("color","white");
});
