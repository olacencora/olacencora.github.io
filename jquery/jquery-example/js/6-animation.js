/*$(function(){
    $('h1').hide(3000, function(){
        $(this).remove(),
    });

});
*/

/* $(function(){
    $('h1').fadeOut(3000).fadeIn(3000);
})
*/

/*
$(function(){
    $('h1').slideUp(3000).slideDown(3000);
})
*/

$(function(){
    $('h1').animate({marginTop: '200px'}, 2000, function(){
        $(this).animate({marginLeft: '200px'}, 2000, function(){
            $('img').show(1000);
        });
    });

});