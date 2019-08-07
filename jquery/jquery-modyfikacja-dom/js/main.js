
$(function() {
    $('.button-up').click(function(){
        $('.box:last').after('.box:first')
    });
});

$(function() {
    $('.button-down').click(function(){
        $('.box:first').before('.box:last')
    });
});

