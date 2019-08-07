// napisz funkcje getPost  wywołaj aj po załadowaniu strony, apisz nasluch a clisk na przzycisku po klikniecuy wysowlaj funkcje getPost

  // w funkcji getData pobierz dane z pierwszej strony postow adresu

  // dla kazdego z pobranych elementow stworz kontener div obrazek img oraz naglowek h2 - wstaw do nich odpowiednei dane, dodaj je do kontenera, a kontener dodaj do znzcznika id #post-list



const getPost = (pageNumb) => {
fetch('https://jsonplaceholder.typicode.com/photos?_page=' + pageNumb)
  .then(response => response.json())
  .then(posts => {       //.then(function(posts){  ..  }) to samo!

      posts.forEach(function(arrayElement) {  // paramaterm forEach jest funkcja o parametrze obiektow naszej tablicy

        let toDoDiv = document.createElement('div');  // tworze diva
        let toDoImg = document.createElement('img');
        let toDoHTwo = document.createElement('h2');

        toDoImg.setAttribute('src', arrayElement.url); // dodaje src = url z arrayelements
        toDoImg.setAttribute('alt', arrayElement.title)

        toDoDiv.setAttribute('class', 'container'); // dodaje klase do diva
        // toDoDiv.classList.add('container');     DRUGA METODA NADANIA KLASY

        toDoHTwo.innerText = `${arrayElement.id}. ${arrayElement.title}`;

        toDoDiv.appendChild(toDoImg); // wkladam do diva img
        toDoDiv.appendChild(toDoHTwo);

        document.getElementById('post-list').appendChild(toDoDiv);
    }) 
  });
  }

  getPost(1);

  document.getElementById('get-posts').addEventListener('click', ()=> {
  let countPost = document.getElementsByClassName('container').length;
  let nextPage = (countPost/10) +1;
  getPost(nextPage)});

  //kolejna strona doklada sie na podstawie dlugosci zaladaowanych postow

