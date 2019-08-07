//funkcja ma dwa parametry link i callback

$(function() {
    $.getJSON('https://jsonplaceholder.typicode.com/users/1', function(data) {
        console.log(data); 
    })
})


