let wszystkieZgody = document.getElementById('wszystkie');
let zgoda1 = document.getElementById('zgoda-1');
let zgoda2 = document.getElementById('zgoda-2');
let btnWyslij = document.getElementById('wyslij');
let name = document.getElementById('name');
let email = document.getElementById('email');
let wiadomosc = document.getElementById('wiadomosc');


console.log(zgoda1);

function stanCheckbox() {
    zgoda1.checked = this.checked;  /* zmieni pozycje checked na odwrotną*/
    zdoda2.checked = this.checked;

    zgoda1.disable = this.checked;
    zgoda2.disable = this.checked; /*zmienia ze nie mozna odkliknac*/
}

/*jesli jest zaznaczony ostatni checkboxt to wsyzskie sie zaznacza*/
wszystkieZgody.onchange = stanCheckbox; 

function waliduj(event) {
    wiadomosc.innerHTML = '<ul id="wiadomosc"></ul>'

    if (name.value.trim() == "") { /*wycina biale znaki*/
        let msgImie = document.createElement('li');
        msgImie.innerHTML = "wpisz imie";
        wiadomosc.appendChild(msgImie);
        event.preventDefault();

}
    if(email.value.trim() == "") {
        let msgEmail = document.createElement('li');
        msgEmail.innerHTML = "wpisz email";
        wiadomosc.appendChild(msgEmail);
        event.preventDefault();

}
    if (! zgoda1.checked) {
        let msgZgoda1 = document.createElement('li');
        msgZgoda1.innerHTML = "nie wyraziles zgody 1";
        wiadomosc.appendChild(msgZgoda1);
        event.preventDefault();
}
    if (! zgoda2.checked) {
        let msgZgoda2 = document.createElement('li');
        msgZgoda2.innerHTML = "nie wyraziles zgody 2";
        wiadomosc.appendChild(msgZgoda2);
        event.preventDefault();
}
}

btnWyslij.addEventListener('click',waliduj);