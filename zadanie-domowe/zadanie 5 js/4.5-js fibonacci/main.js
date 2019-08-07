
//ex: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55....*/

fibonacci(6)    // => 8

function fibonacci(n){
  if (n === 0) {return 0}
  if (n === 1) {return 1}
  else return fibonacci(n-1)+fibonacci(n-2) 
    
  }
  console.log(`Element n-ty ciągu Fibonacciego to: ${fib(5)}`);