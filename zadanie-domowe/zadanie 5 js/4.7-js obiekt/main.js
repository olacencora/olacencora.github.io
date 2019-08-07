// utworzenie klasy

class Book{
    constructor(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;

        this.printInfo = function() {
        let textIfRead = "";
        if (read == true) {
            textIfRead = "";
        } else {
            textIfRead = "nie ";
        }
        return (`Książka ma tytuł:${this.title},Autorem jest:${this.author}i książka ${textIfRead}została przeczytana`);
    }
    }
}

// stworzenie nowych instancji obiektu Ksiazka (przypisanie do klasy Ksiazka)
let bookOne = new Book ('Wiedźmin','Andrzej Sapkowski', true);
bookOne.printInfo();

let bookTwo = new Book ('Hobbit','J.R.R. Tolkien', true);
bookOne.printInfo();

let bookThree = new Book ('Pieśń lodu i ognia','George R.R. Martin', false);
bookOne.printInfo();

let bookFour = new Book ('Fantastyczne zwierzęta i jak je znaleźć','J.K. Rowling', false);
bookOne.printInfo();

// stworzenie tablicy globalnej i dodanie do niej trzech książek:

let booksTable = [bookOne, bookTwo, bookThree, bookFour];

console.log(booksTable);


function howManyRead(booksTable) {
    
    let sum = 0;
    for (let i=0; i<booksTable.length; i++) {
        booksTable[i].printInfo();
        if (booksTable[i].read == true) {
            suma ++;
        }
    }
    return sum;
}
console.log(howManyRead());

