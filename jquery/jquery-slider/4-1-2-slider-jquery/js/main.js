

$(function(){
    var slideShow = $('.slide-show');
    var slideCount = $('.single-slide').length;
    var slideWidth = 100/slideCount;
    var slideIndex = 0;
    console.log(slideWidth);

    // ustaw szerokosc kontenera .slide-show ilosc-sliadow * 100 + %

    $('.slide-show').css({width: 100*slideCount + '%'});

    // ustaw szerokosc pojedynczego sliu na 100/ilosc-slidow + % ustaw przesuniecie kazdego slidu o index * szerokosc-slidu + %

    // przesuwanie each-slide o szerokosc kazdego z slide show

    $('.single-slide').each(function(index){
        $(this).css({width: slideWidth + '%', left: index * slideWidth + '%'});
    })


    function slide(newSlideIndex){
        // okreslamy warunki kiedy animacja w ogole sie nie wykona
        if(newSlideIndex > slideCount - 1 || newSlideIndex < 0) return; 

        slideShow.animate({left: newSlideIndex * (-100) + '%'}, 800, function(){
            slideIndex = newSlideIndex;
        });
    }

    //przesuwamy 0 cala szerokosc ekranu w lewo dlatego -100, dodatkowo do naszej flagi slideIndex przypisujemy kolejna wartosc po kliknieciu
    $('.next-slide').click(function(){
        slide(slideIndex + 1);
    });
 

    //co bierzemy / zdarzenie / co robimy
    $('.prev-slide').click(function(){ 
            slide(slideIndex - 1);
        });

    //strzalki na klawiaturze - wszystko co napiszesz switchem mozesz napisac if

    $(window).keydown(function(event){
        console.log(event.keyCode);
        switch(event.keyCode) {
            case 37 :
                    slide(slideIndex - 1);
                break;
                case 39 :
                        slide(slideIndex + 1);
                    break;
        }
    })


});



