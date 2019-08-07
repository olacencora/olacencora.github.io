 //$(document) - referencja do jQuery = jQuery(document) - sprawdzam czy dziala

//odwolania do elementów

$(function(){
    var heading = $('#main');
    console.log(heading);   //kolekcja

    var paragraphs = $('.paragraph');
    console.log(paragraphs);

    var listTitems = $('li');
    console.log(listTitems);

    listTitems.css('color', 'green'); //zmienia wszytskie elementy listy

    listTitems.eq(0).css('color', 'red'); //wybiera konkretny element listy

    /* var items = document.getElementsByTagName('li');  html collection podobne do tablicy, musimy dotrzec do kazdego elementu petla for --- czysty js
    for(var i = 0; i<items.length; i++){
        items[i].style.color = 'pink';
    };
    */


})