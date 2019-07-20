console.log('helllo world!');

var newName = "Ola";
let newNumber = 123;
const nextName = "Ania";

/*console.log(newName);
console.log(newNumber);
console.log(nextName);

newNumber = 321;
console.log(newNumber);*/

//nextName = "Monika";    nie mozna nadpisac const - stalej
//console.log(nextName);

function functionOne() {
    console.log(newName);
}
functionOne();

const functionTwo = function() {
    console.log(nextName);
}

functionTwo();

function parametrFunction(a,b,c) {
    console.log(a);
    let suma = b + c; /*nazwa zmiennej - suma*/
    // console.log(suma);
    return suma;
}

let sum = 4 + parametrFunction('suma',3,6);

console.log(sum);

const arrowFunction = () => {
    console.log('funkcja strzalkowa');
}

arrowFunction();

const arrowFunctionTwo = (parametr) => {
    console.log(parametr)
}

arrowFunction('funkcja strzalkowa 2');

const arrowFunction3 = a => a /*automatyczny return*/

console.log(arrowFunction3('funkcja 3'));

const arrowFunctionStandard = function(a) {
    return a;
}

console.log(arrowFunctionStandard('funkcja 3 standard')); /*wywylanie funkcji wewnatrz consol log*/