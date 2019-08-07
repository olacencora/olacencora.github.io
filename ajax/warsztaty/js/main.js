/*const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(json => {
    console.log(json);

    let btn = document.createElement('btn'); // tworze btn

    function getData() {
        console.log('getData dziala')
    }

    btn.addEventListener('click', getData);


    })
}

    btn.addEventListener('click', getData);


*/
let userNumb = 1;

const getData = (e) => {
    e.preventDefault();  //a ma przeladowanie strony wiec musimy to przechwyciec i zatrzymac
    console.log('dziala');

    fetch('https://jsonplaceholder.typicode.com/users/' + userNumb)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        let parId = document.createElement('p');
        let parName = document.createElement('p');
        let parUrl = document.createElement('p');
        let div = document.createElement('div');

        parId.innerText = 'id ' + json.id;
        parName.innerText = 'name ' + json.username;
        parUrl.innerText = 'url ' + json.website;

        div.appendChild(parId);
        div.appendChild(parName);
        div.appendChild(parUrl);

        document.body.appendChild(div);

    });

    userNumb++;
}

document.getElementById('get-data-button').addEventListener('click', getData);

