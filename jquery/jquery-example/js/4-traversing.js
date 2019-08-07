$function(){

$('ul').each(function(){  
    
    //stworz referencje liste li i do kazdego takiego elementu zrob ta pętle

    $(this).find('li').each(function(inedx){ 

        $(this).css('margin-left', index * 10 + 'px' );  
        
        //for each parametry (element,index) ! odwrotnie niz normalnie
    });
});
});