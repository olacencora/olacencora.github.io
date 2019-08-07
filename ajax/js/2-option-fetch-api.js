
const getToDos = () => {
fetch('https://jsonplaceholder.typicode.com/todos')  //parametr pierwszy url
  .then(response => response.json())  // metoda obeitnicy then - obsluga asynchroniczny danych, return do nastepnego then
  .then(json => {
    console.log(json);

        json.forEach(todo => {  //petla po obiektach tablicy
            console.log(todo.title)  // to do to sa obiekty z tablicy
            let toDoDiv = document.createElement('div');  // tworze diva
            let fontColor = (todo.completed)?'green':'red';  // przypisuje stringa w zaleznosci od t/f completed


            toDoDiv.innerHTML = todo.title;  // do html wstawiam tytul obiektu todo
            toDoDiv.setAttribute('class', 'to-do'); // dodaje klase

            toDoDiv.style.color = fontColor; // do kontenera div wstawia kolor

            document.getElementById('to-do-list').appendChild(toDoDiv);
            

        })
    
        document.getElementById('get-to-dos').removeEventListener('click', getToDos);  //nie pozawala pobrac na naowu danych tych samych - usuwamy clicka

    });
}

    document.getElementById('get-to-dos').addEventListener('click', getToDos);

    /*
    document.querySelector('#get-to-dos').onclick = getToDos  /////// to samo
    }
    */