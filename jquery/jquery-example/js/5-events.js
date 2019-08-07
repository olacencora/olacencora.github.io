$(function(){  // wait to my whole document load up before i start run js

    $('#animation-button').click(function(){
        $(this).toggleClass('text-red'); //przelacza klase
    });
$('ul').on({
    click: function(){
        $(this).css('background-color', 'grey');
    },
    mouseover: function(){
        $('h1').css('color', 'darkorange');
    }

})

$('form').submit(function(e){
    e.preventDefault();
    var value = $('#inut-text').val();  //pobieramy text z inputa
    $('#data-form').text(value);  // wstrzykujemy do paragrafu

});

});