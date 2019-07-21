let buttons = document.getElementsByClassName('edit');
console.log(buttons);

function clickMe() {
    console.log('click');
    buttons[1].removeEventListener('click', clickMe); /*zadziala tylko raz*/
}

buttons[0].onclick = clickMe;

function clickMeSecond(e) {          /* parametr e wylogowalismy,*/
    console.log(e.target);
    e.target.style.color = "orange";    /*zmienia kolor na czerwony*/
    e.target.classList.toggle('active');
}


/*drugi sposob*/

buttons[1].addEventListener('click',clickMeSecond);

/*buttons[1].removeEventListener('click', clickMe); /*zadziala tylko raz*/

/*pseudo parametry*/

/*
function clickLink(e) {
    e.preventDefault();
    alert('Link nie dziala!!!!!!');
}
document.getElementById('link').addEventListener('click',clickLink);

 cos tu nie dziala???? powinnismy zatrzymac dzialanie linka
*/


document.getElementById('exampleDiv').addEventListener( 'click', function(e) {
    alert( 'Kliknięto div' );
    } );
    document.getElementById( 'exampleLink' ).addEventListener( 'click', function(e) {
    /*
    Bez dwóch poniższych linijek kliknięcie na link spowoduje wyświetlenie komunikatu
    "Kliknięto link", a następnie komunikatu "Kliknięto div". Dzięki dodaniu tych linijek kodu
    wyświetli się tylko pierwszy komunikat.
    */
    e.preventDefault();
    e.stopPropagation();
    alert( 'Kliknięto link' );
    } );