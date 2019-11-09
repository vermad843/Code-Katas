// 

function sumCubes(n){
 
 return n == 1 ? n**3 : n**3 + sumCubes(n-1)
}
    


[ [1, 1], [2, 9], [3, 36], [4, 100], [10, 3025], [123, 58155876] ].forEach(([n,exp]) => 
    console.log(sumCubes(n), exp))