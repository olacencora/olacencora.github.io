let number = 3;
function show() {
    console.log('liczba nie jest rowna 1');
}

if (number === 1) {
    console.log('liczba jest rowna 1');
} else {
    show();
}


let color = "czerwony";
function show() {
    console.log('kolor zielony');
}

if (color === 1) {
    console.log('liczba jest rowna 1');
} else if (color === 'zielony') {
    show();
    else {
        console.log('inny kolor niz zielony')
    }
}



let color = "czerwony";
function show() {
    console.log('kolor zielony');
}

switch (color){
    case 'zielony':
    show();
    break;
    case 'czerwony':
        console.log('kolor czerwony');
    break;
    case 'zolty':
        console.log('zolty');
    break;
    default:
        console.log('inny kolor');
}
