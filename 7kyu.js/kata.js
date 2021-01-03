// // 

// function sumCubes(n){
 
//  return n == 1 ? n**3 : n**3 + sumCubes(n-1)
// }
    


// [ [1, 1], [2, 9], [3, 36], [4, 100], [10, 3025], [123, 58155876] ].forEach(([n,exp]) => 
//     console.log(sumCubes(n), exp))





// // 

// function growingPlant(upSpeed, downSpeed, desiredHeight) {  
//     let i = 1;
//     for (let height = upSpeed; height < desiredHeight; height = height + upSpeed){
//       height = height - downSpeed;
//        i++ ;
//     }
//     return i;
//   }


// console.log(growingPlant(100,10,910),10)
// console.log(growingPlant(10,9,4),1)


// 

// const burner = function(carbon, hydrogen, oxygen) {
  
//   const H2O = Math.min(oxygen, parseInt(hydrogen / 2))
//   const CO2 = Math.min(carbon, parseInt((oxygen - H2O) / 2))
//   const CH4 = Math.min(carbon - CO2, parseInt((hydrogen - H2O * 2) / 4))

//   return [ H2O, CO2, CH4 ]
// }



// console.log(burner(45, 11, 100), [5, 45, 0]);
// console.log(burner(354, 1023230, 0), [0, 0, 354]);
// console.log(burner(939, 3, 694), [1, 346, 0]);
// console.log(burner(215, 41, 82100), [20, 215, 0]);
// console.log(burner(113, 0, 52), [0, 26, 0]);



// 

// function amaroPlan(pirateNum){
//     const result = Array(pirateNum).fill(0);
//     result[0]  = pirateNum * 20 ;
//     for (let i = 2; i < pirateNum; i+=2) {
//        result[0]--;
//        result[i]++;    
//     }
//      return result;
//   }
  
//   console.log(amaroPlan(2), [40, 0]);
//   console.log(amaroPlan(3), [59, 0, 1]);
//   console.log(amaroPlan(4), [79, 0, 1, 0]);
//   console.log(amaroPlan(5), [98, 0, 1, 0, 1]);

