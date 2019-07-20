let globalVar = 'zmienna globalna';

function checkVar () {
    let localVar = 'zmienna lokalna'; //zmienna lokalna odstepan tylko dla fej finkcji
    //console.log(globalVar)
    //console.log(localVar);
}
checkVar();

console.log(localVar);