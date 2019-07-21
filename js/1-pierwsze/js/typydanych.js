let stringVar = 'jestem stringiem';
let numberVar = 12345;
// let arrayVar = [];
// let objectVar = {};

console.log(typeof stringVar);
console.log(typeof numberVar);

console.log(`tekst plus zmienna liczbowa ${numberVar}`);

console.log(typeof (stringVar + numberVar)); /*calosc zostaje stringiem*/

let bolVar = true;

console.log(typeof bolVar); 

let divMain = document.getElementById('main');

function chcekDiv() { /*wyszukiwanie po id w dokumencie*/
    if (divMain !== null) {
        console.log('Div istnieje');
    } else {
        console.log('div nie istnieje w dokumenccie');
    }
}

chcekDiv();