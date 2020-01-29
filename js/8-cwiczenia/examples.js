// example 1
// Size	Width	Length	Sleeve
// S	    18"	    28"	    8.13"
// M	    20"	    29"	    8.38"
// L	    22"	    30"	    8.63"
// XL	    24"	    31"	    8.88"
// 2XL	    26"	    33"	    9.63"
// 3XL	    28"	    34"	    10.13"
// Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
//    - shirtWidth
//    - shirtLength
//    - shirtSleeve

//  Use the chart above to print out one of the following correct values:
// /

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 19;
var shirtLength = 30;
var shirtSleeve = 8.71;

if (
  shirtWidth >= 18 &&
  shirtWidth < 20 &&
  shirtLength >= 28 &&
  shirtLength < 29 &&
  shirtSleeve >= 8.13 &&
  shirtSleeve < 8.38
) {
  console.log("S");
} else if (
  shirtWidth >= 20 &&
  shirtWidth < 22 &&
  shirtLength >= 29 &&
  shirtLength < 30 &&
  shirtSleeve >= 8.38 &&
  shirtSleeve < 8.63
) {
  console.log("M");
} else if (
  shirtWidth >= 22 &&
  shirtWidth < 30 &&
  shirtLength >= 30 &&
  shirtLength < 31 &&
  shirtSleeve >= 8.63 &&
  shirtSleeve < 8.88
) {
  console.log("L");
} else if (
  shirtWidth >= 24 &&
  shirtWidth < 31 &&
  shirtLength >= 31 &&
  shirtLength < 33 &&
  shirtSleeve >= 8.88 &&
  shirtSleeve < 9.63
) {
  console.log("XL");
} else if (
  shirtWidth >= 26 &&
  shirtWidth < 28 &&
  shirtLength >= 33 &&
  shirtLength < 34 &&
  shirtSleeve >= 9.63 &&
  shirtSleeve < 10.13
) {
  console.log("2XL");
} else if (shirtWidth === 28 && shirtLength === 34 && shirtSleeve === 10.13) {
  console.log("3XL");
} else {
  console.log("N/A");
}

// Write a while loop that:

// Loop through the numbers 1 to 20
// If the number is divisible by 3, print "Julia"
// If the number is divisible by 5, print "James"
// If the number is divisible by 3 and 5, print "JuliaJames"
// If the number is not divisible by 3 or 5, print the number

var x = 1;

while (x <= 100) {
  if (x % 15 === 0) {
    console.log("JuliaJames");
  } else if (x % 3 === 0) {
    console.log("Julia");
  } else if (x % 5 === 0) {
    console.log("James");
  } else {
    console.log(x);
  }

  x = x + 1; // increment x
}

/*
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */

var bills = [
  50.23,
  19.12,
  34.01,
  100.11,
  12.15,
  9.9,
  29.11,
  12.99,
  10.0,
  99.22,
  102.2,
  100.1,
  6.77,
  2.22
];
var totals = bills.map(function(x) {
  x = x * 1.15;
  x = x.toFixed(2); //Return string
  x = Number(x); //Return number
  return x;
});
console.log(totals);
