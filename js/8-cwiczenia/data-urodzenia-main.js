// Ćwiczenie 1 Napisz program, który pobiera datę urodzenia oraz datę teraźniejszą i sprawdza czy osoba jest pełnoletnia.

let birthDate = 1992;
let todayDate = 2019;

if birthDate >= (todayDate - 18) {
    console.log("osoba jest pelnoletnia")
} else {
    console.log("osoba nie jest pełnoletnia")
    difference = todayDate - birthDate
    console.log('do pełnoletności potrzebuje' + difference + 'lat')
}

// Ćwiczenie 2. Napisz program, który wyznaczy miejsce zerowe funkcji liniowej (rozpatrz trzy przypadki) 

let parameterA = 5
let parameterB = -3

function xOfZero(parameterA, parameterB) {
    let zeroNum = (- parameterB) / parameterA
    return zeroNum
}

console.log(xOfZero(5, -3));

// Ćwiczenie 3. Napisz program, który policzy pole trójkąta ze wzoru Herona, uwzględniając czy z trzech podanych boków można stworzyć trójkąt. 

let a = 3;
let b = 4;
let b = 5;

function getTriangleArea(a,b,c) {
    triangleArea = (Math.sqrt((a+b+c)*(a+b-c)*(a-b+c)*(a+b+c)))/4
    return triangleArea
}

if (a+b) > c && (b+c) > a && (a+c) > b {
    getTriangleArea()
    console.log(triangleArea)
}

// Ćwiczenie 4. Napisz program, który stwierdzi, czy podany znak jest dużą literą, małą literą, cyfrą, czy innym znakiem.

let dataSign = 7;

let bigLetters = [A, B, C, D, E, F, G]
let smallLetters = [a, b, c, d, e, f, g]
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]





// Ćwiczenie 5. Podajemy trzycyfrową liczbę. Program sprawdza, czy ta liczba jest palindromem.

// Ćwiczenie 6. Napisz program, który wyznaczy rozwiązania układu równań z trzema niewiadomymi metodą wyznaczników.

// Ćwiczenie 7. Napisz program, który sprawdzi, czy wszystkie cyfry dwucyfrowej liczby są parzyste lub ich suma jest równa 5.

// Ćwiczenie 8. Napisz program, który wystawi ocenę z testu. Użyj zagnieżdżonej instrukcji if - else

// 0 - 39 pkt - ocena niedostateczna
// 40 - 54 pkt - ocena dopuszczająca
// 55 - 69 pkt - ocena dostateczna
// 70 - 84 pkt - ocena dobra
// 85 - 98 pkt - ocena bardzo dobra
// 99 - 100 pkt - ocena celująca