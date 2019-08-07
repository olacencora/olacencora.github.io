document.getElementById('form-one').addEventListener('submit', function(e){
    e.preventDefault();
    console.log('test'); // referencja do obiektu - znajdz element nasluchuj zdarzenie jakie co ma sie stac zablokuj 

    let result;

    let a = parseInt(document.getElementById("value-a").value); // parse int zmieniamy stringi na liczby
    let b = parseInt(document.getElementById("value-b").value);
    let c = parseInt(document.getElementById("value-c").value);

    let delta = Math.pow(b, 2) - (4 * a * c);

    document.getElementById('p-first').innerHTML = delta; // stworz referencja do obiektu po id i ustaw mu wlasciwosc inner html i napisujemy delte

    if (delta > 0) {
        let x1 = (-b - Math.sqrt(delta)) / (2*a);
        let x2 = (-b + Math.sqrt(delta)) / (2*a);

        result = `x1 jest równe ${x1}, x2 jest równe ${x2}`;

    } else if (delta === 0) {
        x = -b / (2*a);

        result = `x jest równe ${x}`;

        else {
            result = 'brak miejsc zerowych';
        }
    }
    document.getElementById('p-second').innerHTML = result;
}) 
