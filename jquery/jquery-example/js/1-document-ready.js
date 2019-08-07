$(document).ready(function(){
    console.log('its working!');
}); //$(document) - referencja do jQuery = jQuery(document)

$(function(){
    $('h1').css('color','red').hide(2000).show(3000); //referencja do obiektu h1 - na wszytskich tych elementach ustawia css, potem ustawia animacje 2000 mili s
});



