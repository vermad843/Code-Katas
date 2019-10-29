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


function numberToString(num) {
  return num.toString();
}



console.log(numberToString(67), '67');

// .toString() - convert number to string
// .toString(2) - for making value binary 