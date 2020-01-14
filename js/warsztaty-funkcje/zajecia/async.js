const loadData = () =>
  new Promise(resolve => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
    xhr.addEventListener("load", () => resolve(xhr.responseText));
    xhr.send();
  });

async function printData() {
  const data = await loadData();
  console.log(data);
}

printData();

// przydaje si ejak musimy poskladac nasze jsony, bo jedno zapytanie wyciagamy potem drugie i potem np porównujemy skladamy razem i wykorzystujemy
