let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let newOrderedList = document.createElement('ol'); // towrzy nowey element ol
let newOrderedListText = document.createTextNode('Cities list') // tworzy tekst do ol
let classAtr = document.createAttribute('class'); //tworzy atrybut klasy
classAtr.value = 'list'; //dodaje warosc atrybutu klasy

document.getElementById('main-title').appendChild(newOrderedList); //dodaje liste jako ostatnie dziecko h1 o id main-title
newOrderedList.appendChild(newOrderedListText); // dodaje text do elementu
newOrderedList.setAttributeNode(classAtr);

console.log(newOrderedList);

let newListItemOne = document.createElement('li');
let newListItemOneText = document.createTextNode(cities[0]);
document.getElementsByClassName('list').appendChild(newListItemOne);
newListItemOne.appendChild(newListItemOneText);


