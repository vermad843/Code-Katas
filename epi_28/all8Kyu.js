// function litres(time) {
//     return Math.floor(time * 0.5);   
//   }


// console.log(litres(2), 1, 'should return 1 litre');
// console.log(litres(1.4), 0, 'should return 0 litres');
// console.log(litres(12.3), 6, 'should return 6 litres');
// console.log(litres(0.82), 0, 'should return 0 litres');
// console.log(litres(11.8), 5, 'should return 5 litres');
// console.log(litres(1787), 893, 'should return 893 litres');
// console.log(litres(0), 0, 'should return 0 litres');


// // 
// function solution(str){
//   return [...str].reverse().join('');
// }

// console.log(solution('world'), 'dlrow');



// // 
// function removeChar(str){
// return str.slice(1, str.length -1);  //slice take the index (1, secondLast) => these are the indices you want to keep. 
// }
   
   


// console.log(removeChar('eloquent'), 'loquen');
// console.log(removeChar('country'), 'ountr');
// console.log(removeChar('person'), 'erso');
// console.log(removeChar('place'), 'lac');




// 
function isLockNessMonster(s) {
 return  s.includes('tree fiddy') || s.includes(3.50) ? true : false; 
}



console.log("Your girlscout cookies are ready to ship. Your total comes to tree fiddy");
console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"));
console.log("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.");
console.log(!isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."));
      

    
