/*ES5*/
function Person(name,age) {
    this.name = name;
    this.age = age;
    this.printInfo = function() {
        console.log('imię:' + this.name+ ', ' + 'wiek:' + this.age);
    }
}
/*ES6*/
class PersonTwo {
    constructor(name,surname) {
        this.name = name;
        this.surname = surname;
    }
    printInfo(){
        console.log(`imię:${this.name},Nazwisko:${this.surname}`);
    }
}
let personOne = new Person ('jacek','56');
personOne.printInfo();

let personTwo = new PersonTwo ('wojtek','krawczyk');
personTwo.printInfo();


/*zadanie matematyczne*/

/*pole kola pi r 2*/

/* moje wypociny zle let radius = 5;
console.log('pole kola' = (Math.Pi)*(Math.radius));*/

function poleKola(x) {
    let pole = Math.Pi * Math.pow(x, 2);
    return `pole kola to: ${pole}`;
}
console.log(poleKola(76));

const poleKolaShort = x => `pole kola to : ${Math.Pi * Math.pow(x, 2)}`;
console.log(poleKolaShort(7));