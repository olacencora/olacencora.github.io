$(function(){
    $('.animation-button').click(function(){

        $('.box-red').animate({
            left: '100px',
            transform: "scale(0.5, 0.5)"
        }, 3000,
         function() { 
            ('.box-red').animate({
                backgroundColor: 'blue'
    
        }, 5000, function(){
            $('.box-red').append('<h1>koniec animacji</h1>')
        });

    });
    
});
