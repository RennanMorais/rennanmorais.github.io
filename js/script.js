$(document).ready(function(){
    typeWriter();
    menuActions();
    altMenu();
});

//Efeito de digitação do header
var content = 'PHP Laravel JavaScript jQuery Bootstrap React Wordpress';
var text = document.getElementById('typing');

var speed = 100;
var cont = 0;

function typeWriter() {
    if(cont < content.length){
        text.textContent += content.charAt(cont);
        cont++;
        setTimeout(typeWriter, speed);
    }else{
        setTimeout(function(){ 
          text.textContent = '';
          cont = 0;
          typeWriter();
        }, 3000);
    }
}

function menuActions() {

    $("#menu-home").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });

    $("#menu-sobre").click(function() {
        var offset = $('.section-about').position().top;
        $("html, body").animate({ scrollTop: offset - 80 }, 1000);
    });

    $("#menu-servicos").click(function() {
        var offset = $('.section-services').position().top;
        $("html, body").animate({ scrollTop: offset - 80 }, 1000);
    });

    $("#menu-portfolio").click(function() {
        var offset = $('.section-port').position().top;
        $("html, body").animate({ scrollTop: offset - 80 }, 1000);
    });
}

function altMenu() {
    $(window).scroll(function(){
        if($(this).scrollTop() > 80) {
            $('#topbar').removeClass('topbar').addClass('topbar-fixed');
        } else {
            $('#topbar').removeClass('topbar-fixed').addClass('topbar');
        }
    });
}