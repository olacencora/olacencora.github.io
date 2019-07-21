document.getElementById('main header').innerHTML = "Tekst do elementu dodany w JS";
/* innerText – pobiera i ustawia tekst znajdujący się w element HTML (bez
zagnieżdżonych elementów HTML)*   - usuwa dzieci i wstawia tekst*/

document.getElementById('container').innerText = "Tekst do elementu dodany w JS";

document.getElementById('main header').innerHTML = "<div>NOWY DIV ODANY W JS</div>";


let linkElements = document.getElementsByClassName('link');
console.log(linkElements);
linkElements[3].href = 'nowastrona';

document.getElementById('parFirst').className="newClassAddedInJS"; /*napisana klasa*/

/* console.log(getElementById('parFirst')); */

document.getElementById('sectionFirst').classList.toggle("active"); /*sprawdza czy jest klasa i jesli jest to ją usuwa */

document.getElementById('sectionFirst').style.backgroundColor='red';