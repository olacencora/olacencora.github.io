let user = {};

function setUser() {
  // zapytanie ajax jest asynchronicznie czyli najpierw wykonuje sie to co pod funkcja a potem wraca do funkcji
  setTimeout(() => {
    console.log("dziala");
  }, 5000);
}

setUser();

// console.log(user);

// promisses to obiekty paramaty to funkcja, mozemy cyklin=cznie wywolywac, fetch jest promisem

const loadData = new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve("obietnica działa");
  //   }, 5000);

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
  xhr.addEventListener("load", () => resolve(xhr.responseText));
  xhr.send();
});

console.log(loadData);

// po zwykonanym promis , sluzy do zwracania wartosci z asynchronicznych danych
loadData.then(result => {
  console.log(result);
});
