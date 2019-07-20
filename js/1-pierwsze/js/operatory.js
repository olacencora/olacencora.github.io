let one = 5;
let two = 8;
let wynik = two % one; //modulo reszta z dzielenia

console.log(wynik);

//ikrementacja

console.log(two ++); //ikrementacja powiekszenie o 1
console.log(++ two); //ikrementacja powiekszenie o 1 ???

let zmienna //deklarujemy zmienna i nie przypisujemy nic - undefined
console.log(zmienna);

zmienna = 67; //operator przypisania

console.log(zmienna += 5) // do zmiennej dodaj 5 i pokaz sume

console.log(zmienna %= 5) // podziel zmienna przez 5 i pzypisz do niej reszte z dzielenia

/*operatory porównania - porównujące wartość i typ danych*/

console.log(1 != '1'); /*false*/

console.log(1 == '1'); /*true*/

console.log(1 !== '1'); /*false - rozny typ danych*/

console.log(1 === '1'); /*false - równe wartości i typ danych*/

/* operatory logicznie*/

let number = 100;
let wynik = (number < 0) ? 'ok' : 'not ok';
console.log(wynik);


