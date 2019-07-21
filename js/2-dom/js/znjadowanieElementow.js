let parFirst = document.getElementById('parFirst');
console.log(parFirst);

let tableElements = document.getElementsByClassName('link');

tableElements.forEach(element => {
    console.log(element);
});

for (let i=0; i<tableElements.length; i++) {
    console.log(tableElements[i]);
}

let allP = document.getElementsByTagName('p');
console.log(allP[1]);

let allLink = document.querySelectorAll('.link');
console.log(allLink);

allLink.forEach(el => console.log(el));

let firstLink = document.querySelector('.link');
console.log(firstLink);

