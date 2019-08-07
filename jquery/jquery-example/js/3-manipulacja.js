$(function(){
    //zmiana zawartosci elelementu
    var h1text = $('h1').text();
    console.log(h1text);

    $('h1').text('to jest nowy naglowek');

    $('h1').html('<span>Pierwsze</span> slowo naglowka');  //dodajemy tag do html
    
    $('span').text('zmiana'); // wstawia sie jako TEXT

    $('h1').append('na końcu'); // wstawia sie jako html
    $('h1').prepend('na początku'); // wstawia sie jako html
    $('h1').after('po elemencie'); // wstawia sie jako html
    $('h1').before('<h2>przed elementem</h2>'); // wstawia sie jako html

    $('.paragraph').eq(0).empty(); //kasuje zawartosc
    
    $('.paragraph').eq(1).remove(); // kasuje calego tag z zawartoscia

    $('li').css({margin: '20px 10px', color: 'red'});

    $('ul').each(function(){  //stworz referencje liste li i do kazdego takiego elementu zrob ta pętle
        $(this).find('li').each(function(inedx){ 
            $(this).css('margin-left', index * 10 + 'px' );  //for each parametry (element,index) ! odwrotnie niz normalnie
        });
    })

$('li').addClass('list-item'); // dodajemy klase

})


