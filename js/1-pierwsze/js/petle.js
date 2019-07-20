for(let i=0; i<10; i++) {
    console.log(i);
}


let array = ['jacek','marcin','ania','klaudia'];

for (let i=0; i<array.length; i++) {
    console.log(`index ${i} element ${array[i]}`);
}

array.forEach(function(element,index) {
    console.log(`element z tablicy ${element} i index ${index}`);
})

// array.forEach((a,b)) => {console.log(`element z tablicy ${a} i index ${b}`)); skrocona wersja cos nie dziala

let arrayNumbers = [1,2,3,4,5,6]

const newArray= arrayNumbers.map(element => element++);
console.log(newArray);

/*petla for in*/
/*
let mojObject = {
    name = 'jacek',
    secondName: 'marcin',
    age: 35,
}

for (let key in mojObject) {
    console.log(mojObject[key]);
}
consolelog(object.keys(mojObjeckt));
object.keys(mojObjeckt).forEach(e => console.log(`klucz ${e} wartosc ${mojObject[e]}`));

/*petral while*/ 
let num = 0;
while (num < 5){
    console.log(num++);
}

/*do while*/

let numDo = 0;
do{
    console.log(numDo++);
} while (numDo < 8);

for (let i=0; i<300; i++) {
    if (i = 25) {
        break;
    }
    console.log(i);
}


for (let j=0; j<10; j++) {
    if (j == 5) {
        continue;
    } else {
        console.log(j);
    }
    console.log('=========');
}