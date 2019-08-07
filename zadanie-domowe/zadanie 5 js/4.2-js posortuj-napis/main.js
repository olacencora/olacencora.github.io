let text = "Akademia108"

function sortString(text) {
    let splitString = text.split(""); 
    let sortArray = splitString.sort();
    return sortArray.join("");
}
 
let result = sortString(text);
console.log(result);