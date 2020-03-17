$(document).ready(function(){
    //efecto menu
$('.menu a').each(function(index, elemento){
    $(this).css({
        'top':'-200px'
    });
    $(this).animate({top:'0'}, 1000 + (index * 500))
});
//efecto header
if($(window).width() > 800){
    $('header .textos').css({
        opacity: 0,
        marginTop: 0
    });
    $('header .textos').animate({
        opacity: 1,
        marginTop: '-52px'
    }, 1500);
}
//scroll menu
var sobreMi = $('#sobre-mi').offset().top,
     tecnologias = $('#btn-tecnologias').offset().top,
     redes = $('#btn-redes').offset().top;
$('#btn-sobre-mi').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 580
    }, 500);
});
$('#btn-tecnologias').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 1280
    }, 500);
});
$('#btn-redes').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 1900
    }, 500);
});
});