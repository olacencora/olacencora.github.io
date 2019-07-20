let nameTable = ['marcin','ola','alicja',999] /*nowa tablica*/
console.log(nameTable[0]);
console.log(nameTable[1]);
console.log(nameTable[2]);
console.log(nameTable[3]);

nameTable.push('dodajemy kolejny element'); /*dodanie elementu */

console.log(nameTable);

nameTable.pop(); /*usuwanie elementu*/

console.log(nameTable);

nameTable.unshift(7777777); /*dodadnie elementy na poczatek tablicy*/

console.log(nameTable);

nameTable.shift(); /*usuwanei pierwszego elelemntu z tablicy*/

console.log(nameTable);
console.log(nameTable[0]); /*sprawdzamy jakei jest pierwszy elelement*/

console.log(nameTable.length); /*sprawdzamy jaka jest dlugosc tablicy*/

console.log(typeof nameTable.lenght) /*sprawdzamy typ danych*/

nameTable.reverse();
console.log(nameTable);  /*odwrócenie kolljenosci na zawsze*/

let numberArray = [1,5,55,76,305,3,643,9999,500, 'jacek'];

sortedArray = numberArray.sort((a,b) => a - b); /*gdy sortujemy talice od najwiekszej do najmneijszej zawsze dajemy ten zapis*/

console.log(sortedArray); /*sortowanie tablicy*/

