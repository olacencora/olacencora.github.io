let numberOne = "a";
let numberTwo = "b";
let numberThree = "c";




function firstFunction(a,b,c) {
    let wynik = a * b * c;
    return wynik;
}
let wynikGlobalnaZmienna = firstFunction(4,6,9); /*zmienna globalna przpisujemy wynik funckji*/
console.log(wynikGlobalnaZmienna);

(function() {   /*sunkcja samo wywołujaca sie*/
    for (let i=0; i<10; i++) {
        console.log(i);
    }
})();

(() => {   /*sunkcja samo wywołujaca sie krotka wersja*/
    for (let i=0; i<10; i++) {
        console.log(i);
    }
})();

/* no idea
function cos(x) {
    if (x===10) {
        console.log(x)
    } else {
        let z = 0;
        (function(){
            let z = x
            console.log(z);
        })()
        console.log(z);
    }
}
*/


