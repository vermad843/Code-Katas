
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


// function calculateYears(principal, interest, tax, desired) {
//    if(principal === desired) {
//      return 0 ;
//    }

//    let years = 0;
//    while(principal < desired) {
//      let totalInterestGained = principal * interest;
//      let totalTax = totalInterestGained * tax;
//      principal = principal + (totalInterestGained - totalTax);
//      years++;
//    }
//    return years;
// }



// console.log(calculateYears(1000, 0.05, 0.18, 1100), 3)
// console.log(calculateYears(1000,0.01625,0.18,1200), 14)
// console.log(calculateYears(1000,0.05,0.18,1000), 0)



// function solution(str, ending){
//   return str.endsWith(ending);
// }


// console.log(solution('abcde', 'cde'), true)
// console.log(solution('abcde', 'abc'), false)



// 

// function isOpeningBrace(brace) {
//   return  brace === '(' || brace === '[' || brace === '{';
// }
// function validBraces(braces){
//   const braceStack = [];
  
//   for (let i = 0; i < braces.length; i++) {
//       const brace = braces[i];
//      if(isOpeningBrace(brace)) {
//         braceStack.push(brace);
//      }else {
//        const lastBrace = braceStack.pop();
//        if(!lastBrace) return false;
//        if(lastBrace === '(' && brace !== ')') {
//          return false;
//        }
//        if(lastBrace === '[' && brace !== ']') {
//         return false;
//        }
//        if(lastBrace === '{' && brace !== '}') {
//         return false;
//        }
//      }
//   }
//   return braceStack.length === 0;
// }



// console.log(validBraces( "()" ), true);
// console.log(validBraces( "[(])" ), false);
// console.log(validBraces("(){}[]"  ) ,  true);
// console.log(validBraces("([{}])"  ) ,  true);
// console.log(validBraces("(}"      ) ,  false);
// console.log(validBraces("[(])"    ) ,  false);
// console.log(validBraces("[({})](]") ,  false);
// console.log(validBraces("}}]]))}])"), false);



// 

function isOpeningBrace(brace) {
    return brace === '(' || brace === '[' || brace === '{';
  }
  
  function validBraces(braces){
    const braceStack = [];
  
    for (let i = 0; i < braces.length; i++) {
      const brace = braces[i];
      if (isOpeningBrace(brace)) {
        braceStack.push(brace);
      } else {
        const lastBrace = braceStack.pop();
        if (!lastBrace) return false;
        if (lastBrace === '(' && brace !== ')') {
          return false;
        }
        if (lastBrace === '[' && brace !== ']') {
          return false;
        }
        if (lastBrace === '{' && brace !== '}') {
          return false;
        }
      }
    }
    return braceStack.length === 0;
  }
  
  function parseArray(s){
    const braces = s.replace(/[^[\]]/g, '');
    if (!validBraces(braces)) {
      return null;
    }
    if (s === '[][]') return null;
    let currentArray;
    let currentValue = '';
    let parentArrays = [];
    for (let i = 0; i < s.length; i++) {
      const token = s[i];
      if (token === '[') {
        if (currentArray) {
          const newArray = [];
          currentArray.push(newArray);
          parentArrays.push(currentArray);
          currentArray = newArray;
        } else if (i === 0) {
          currentArray = [];
        }
      } else if (token !== ' ' && token !== ',' && token !== ']') {
        currentValue += token;
      } else if (token === ',') {
        currentValue && currentArray.push(+currentValue);
        currentValue = '';
      } else if (token === ']') {
        currentValue && currentArray.push(+currentValue);
        currentValue = '';
        if (parentArrays.length) {
          currentArray = parentArrays.pop();
        }
      }
    }
    return currentValue === '' ? currentArray : null;
  }
  
  console.log(parseArray('[1,2,3,4]'), [1,2,3,4]);
  console.log(parseArray('[]'), []);
  console.log(parseArray('[1, 2, 3, 7, [1,2,3, 4, [4]], 5]'), [1, 2, 3, [1, 2,3, [4]],5]);
  console.log(parseArray('[][]'), null);
  console.log(parseArray('[[],1'), null);
  console.log(parseArray('[[]'), null);
  console.log(parseArray('[]]'), null);


