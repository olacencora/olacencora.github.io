let text = "Akademia108"

function reverse(text) {
    let splitString = text.split(""); 
    let reverseArray = splitString.reverse();
    return reverseArray.join("");
}
 
const result = reverse(text);
console.log(result);