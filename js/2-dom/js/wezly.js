let elementParent = document.getElementById('parFirst').parentNode; /* taki sam wynik jak parentElement*/
console.log(elementParent);

console.log( document.getElementById( "parFirst" ).children ); //wyloguje kolekcje znaczników
console.log( document.getElementById( "parFirst" ).childNodes ); //wyloguje kolekcję wszystkich węzłów
console.log( document.getElementById( "parFirst" ).childNodes[1] ); //wyloguje znacznik a
console.log( document.getElementById( "parFirst" ).firstElementChild ); //wyloguje znacznik p
console.log( document.getElementById( "parFirst" ).lastElementChild ); //wyloguje znacznik a

