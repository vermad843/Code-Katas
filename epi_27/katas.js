
// function basicOp(operation, value1, value2)
// {
//   const operations = {
//       '+' : (a, b) => a + b,
//       '-' : (a, b) => a - b, 
//       '*' : (a, b) => a * b, 
//       '/' : (a, b) => a / b,
//   };

//   const operationFn = operations[operation];

//   return operationFn(value1, value2)
// }

// // create a object called operations 
// // define the keys and values there 
// // from operations use bracket notation to 
// // access operation 
// //then return the operationFn


// console.log(basicOp('+', 4, 7), 11);
// console.log(basicOp('-', 15, 18), -3);
// console.log(basicOp('*', 5, 5), 25);
// console.log(basicOp('/', 49, 7), 7);


// function numberToString(num) {
//   return num.toString();
// }



// console.log(numberToString(67), '67');

// // .toString() - convert number to string
// // .toString(2) - for making value binary 




// 

// Money Money Money 


function calculateYears(principal, interest, tax, desired) {
   if(principal === desired) {
     return 0 ;
   }

   let years = 0;
   while(principal < desired) {
     let totalInterestGained = principal * interest;
     let totalTax = totalInterestGained * tax;
     principal = principal + (totalInterestGained - totalTax);
     years++;
   }
   return years;
}



console.log(calculateYears(1000, 0.05, 0.18, 1100), 3)
console.log(calculateYears(1000,0.01625,0.18,1200), 14)
console.log(calculateYears(1000,0.05,0.18,1000), 0)