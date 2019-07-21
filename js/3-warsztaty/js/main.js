function ustawTlo() {
    
    const myBodyElements = document.getElementsByTagName('p');
    console.log(myBodyElements)
    myBodyElements[0].classList.toggle('yellow'); /*sprawdza czy mammy klase yellow w html jesli nie mamy to taka dodaje i nadaje takie wlasciwosci jakie w html ustawiismy*/
    myBodyElements[1].classList.toggle('red');
    
}