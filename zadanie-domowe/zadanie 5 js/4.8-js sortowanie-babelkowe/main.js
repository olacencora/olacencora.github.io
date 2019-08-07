
// utworzenie zmiennej - nasza tablica do posortowania:
var numTable = [12, 67, 34, 23.01, 24, 2, 56, 8, 0*10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

console.log(`Liczby przed sortowaniem: ${numTable}`);


// utworzenie funkcji do sortowania bąbelkowego:
function bubbleSort(numTable) {
// pętla w pętli:

// (wyrażenie początkowe ; wyrażenie warunkowe ; wyrażenie modyfikujące)
// pętla zewnętrzna do powtórzenia iteracji wykonanej przez pętlę wewnętrzną:
      for (let i = 0; i < numTable.length ; i++) {
// pętla wewnętrzna do przeiterowania tablicy (sortowanie odbywa się wewnątrz tej pętli, porównanie elementu z elementem następnym):
        for(let j = 1; j < numTable.length; j++) {
// porównanie pozycji liczb względem siebie:
        if (number[j-1] > number[j]) {
// zamiana liczb - mniejsza ustawia się przed większą:
            let temp = number[j];
            number[j] = number[j-1];
            number[j-1] = temp;
        }
      }
  }     
  return nummber;
}

console.log(`Liczby po sortowaniu: ${bubbleSort(numTable)}`);