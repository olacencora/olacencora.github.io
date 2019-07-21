
function pobierz(event) {   /*tworzymy metode ktora bedzie*/
    event.preventDefault(); /*zatrzymujemy subnit wysylanie form*/
    let formularz = document.getElementById('formularz'); /*pobierami formularz*/
    for (let i=0; i<formularz.lenght; i++) {
        console.log(formularz[i]);
        if (formularz[i].value != 'Submit') { /*jesli to co w formie jest rozne od sumbit*/
        console.log(formularz[i].value);
        }
    }
    return false;
}
/*document.getElementById('formularz').addEventListener('submit',pobierz);*/

