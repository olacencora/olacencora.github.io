'use strict';

// definicja funkcji ajax
function ajax( method, url ) {
    // utworzenie obiektu nowa instancja
    var httpReq = new XMLHttpRequest();
    
    
    // otwarcie polaczenia - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
    httpReq.open( method, url );
    
    
    
    // jesli status polaczenia zostal zmieniony -> httpReq.readyState
    // 0: połączenie nie nawiązane,
    // 1: połączenie nawiązane,
    // 2: żądanie odebrane,
    // 3: przetwarzanie,
    // 4: dane zwrócone i gotowe do użycia.
    httpReq.onreadystatechange = function() {
        
        // jeśli 4: dane zwrócone i gotowe do użycia
        if ( httpReq.readyState == 4 ) {
            
            // sprawdź kod statusu połączenia - https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP
            // status 200 = wszytsko jest ok, np status 404 - błąd
            if ( httpReq.status == 200 ) {
                
                // przypisujemy do zmiennej wyciagniete z obiektu tresc ktora dostalismy w odpowiedzi
                var returnData = httpReq.responseText;

                // zamieniamy stringa na obiekt - parsujemy
                var jsonData = JSON.parse(returnData);

                console.log(jsonData);  
                console.log(typeof jsonData);   

                //tworzymy nowy element - p
                var newParagraph = document.createElement('p'); 
                console.log(newParagraph);
                // wrzucamy do niego text będący value of our object
                newParagraph.innerHTML = jsonData.name;
                console.log(newParagraph);
                // dodajemy p z zawartoscia do body
                document.body.appendChild(newParagraph);

            
                // zeruj obiekt, aby nie utrzymywać nie potrzebnego już połączenia z serwerem
                httpReq = null;
                
            }
            
        }
    
    }


    // wysłanie danych do serwera
    httpReq.send();
}






// wywołujemy naszą funkcję ajax() :)    
ajax( "GET", "https://jsonplaceholder.typicode.com/users/1" );
