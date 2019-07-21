let newElement = document.createElement('p');
let newElementContent = document.createTextNode('to jest nowy tekst do p');

newElement.appendChild(newElementContent); /*dodanie do p contentu*/

console.log(newElement); /*pokazanie co stworzliscy*/

document.getElementById('parFirst').children[3].appendChild(newElement); /*dodanie nowego paragrafu do wezla*/

document.getElementById('parFirst').children[3].removeChild(newElement); /*usuniecie*/

let btn = document.createElement('button');  // tworzy element <button>
let textBtn = document.createTextNode('kliknij na mnie'); // tworzy tekst
let classAtr = document.createAttribute('class'); // tworzy atrybut class
classAtr.value= "btn"; // ustawia wartość dla atrybutu class
document.body.appendChild( btn ); // dodaj element do elementu <body> na koniec
btn.appendChild( textBtn ); // dodaj tekst do elementu <button>
btn.setAttributeNode( classAtr ); // dodaj atrybut class do elementu <button>
btn.setAttribute( "href" , "#" ); // dodaj nowy atrybut wraz z wartością do elementy <button>
console.log(btn);

/*skrocona wersja*/
  let btnTwo = document.createElement('button');
  let textBtnTwo = document.createTextNode('kliknij na mnie2');
  let classArt = document.createAttribute('class');

  classArt.value = 'btn';

  document.body.appendChild(btnTwo);
  btnTwo.appendChild(textBtnTwo);
 btn.setAttribute('href','#');
 btn.setAttribute('class','btn'); /*css moze go nie zlapac bo najpierw dodalismy button do body a potem dopisalismy atrybuty*/

 document.body.removeChild(btn); /* usuwanie buttona */




