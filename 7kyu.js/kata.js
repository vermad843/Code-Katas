// 

function sumCubes(n){
 
 return n == 1 ? n**3 : n**3 + sumCubes(n-1)
}
    


[ [1, 1], [2, 9], [3, 36], [4, 100], [10, 3025], [123, 58155876] ].forEach(([n,exp]) => 
    console.log(sumCubes(n), exp))





// 

function growingPlant(upSpeed, downSpeed, desiredHeight) {  
    let i = 1;
    for (let height = upSpeed; height < desiredHeight; height = height + upSpeed){
      height = height - downSpeed;
       i++ ;
    }
    return i;
  }


console.log(growingPlant(100,10,910),10)
console.log(growingPlant(10,9,4),1)