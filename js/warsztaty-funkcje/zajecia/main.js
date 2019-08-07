'use strict'

//wyrazenie - dziala nawet powyzej funcji dzieki hostingowi

function add(numOne, numTwo) {
    if (typeof numOne === 'number' && typeof numTwo === 'number') {
        console.log(arguments);
        return numOne + numTwo;
    }
    return 'błąd';
}
console.log(add(2,4));

console.log(add(2,'6'));

//przypisanie funkcji do zmiennej
const divide = function(numOne, numTwo) {
    return numOne / numTwo
}

//samo wywołujaca sie funkcja - wyloguje dwa, przypisze trzy
const result = (function() {
    console.log('dwa'); 
    return 'trzy'
})()

console.log(result);

//funkcja strzalkowa
const multiply = (a,b) => {
    return a * b;
}

const multiply2 = (a,b) => a * b;

console.log(multiply(1,2));

console.log(multiply2(2,3));

//przypisanie zmiennej do funkcji samowywołujacej sie

const multiply3 = ((a,b) => {
    return 'arrow'
})()

// this

class Person {
    constructor() {
        this.name = 'Piotrek'
        setTimeout(function() {
            console.log(this) // odwoluje sie do window czyli do całego obiektu, mozna pobrac np wysokość okna
        }, 1000)

        setTimeout(() => {
            console.log(this) //odwołuje sie w obrebie klasy
        }, 1000)

        document.getElementById('btn').addEventListener('click', function() {
            console.log(this.innerHTML); //odwoluje sie do elementu na ktorym wykonywana jest metoda
        })

        document.getElementById('btn').addEventListener('click', () => {
            console.log(this); //odwoluje sie do klasy bo jest weanatrz niej
        })

        document.getElementById('btn').addEventListener('click', function() {
            console.log(this); //wewenetrza wbudowana funkcja bind pokazuje ktorego thisa chcemy wziac
        }.bind(this))

    }
}

const user = new Person();