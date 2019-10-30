// function squareArea(A){//A is a length of a arc 
// 	//    circumference  of  a circle = 2 PI r 
// 	//    A = 2 PI r/4 (because we are talking about 1/4 part of a circle)
// 	//      2 PI r  = A * 4 //look at this  carefully 
// 		const circumference = A * 4 ;
// 		const radius = circumference/(2 * Math.PI);
// 		const areaOfSquare = radius**2;  
// 		return Math.floor(areaOfSquare*100)/100
// 	}
	
	
	
	
	
// 	console.log(squareArea(2), 1.62);
// 	console.log(squareArea(0), 0);
// 	console.log(squareArea(14.05), 80);


// function warnTheSheep(queue) {
//     const wolfAtIndex0 =  queue.reverse();
//     const wolfPosition =  wolfAtIndex0.indexOf('wolf')
//   return wolfPosition === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ wolfPosition}! You are about to be eaten by a wolf!`;
//   }


// console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]),
//  "Oi! Sheep number 2! You are about to be eaten by a wolf!");
// console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 5! You are about to be eaten by a wolf!");
// console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!");
// console.log(warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
// console.log(warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep");




// 
// volume = w * h * d 
// totalSurfaceArea =  2(h × W) + 2(h × L) + 2(W × L)
//  length l = depth(d)

// function getSize(w, h, d){
//  const volume = w*h*d;
//  const area =   2*(w*h) + 2*(h*d)  + 2*(w*d);
// return [area,volume];
// }




// console.log(getSize(4, 2, 6), 48);
// console.log(getSize(10, 10, 10), [600, 1000]);
// console.log(getSize(4, 2, 6), 88);
// console.log(getSize(4, 2, 6), 48);



// String.prototype.toAlternatingCase = function () {
//     return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
// }

// String.prototype.toAlternatingCase = function () {
//     return  this.split("")
//     .map((eachCharacter) => {
//          return  eachCharacter === eachCharacter.toUpperCase()? eachCharacter.toLowerCase(): eachCharacter.toUpperCase()
//      }).join('')
//     }
    
//     console.log("hello world".toAlternatingCase(), "HELLO WORLD");
//     console.log("HELLO WORLD".toAlternatingCase(), "hello world");
//     console.log("hello WORLD".toAlternatingCase(), "HELLO world");
//     console.log("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
//     console.log("12345".toAlternatingCase(), "12345");
//     console.log("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
//     console.log("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
//     console.log("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");




// function fixTheMeerkat(arr) {
//   return  arr.reverse();
// }



// console.log(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
// console.log(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
// console.log(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
// console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
// console.log(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);



// function well(x){
//     const arr = x.filter((arrValue) => {
//         if( arrValue == 'good') {
//             return arrValue;
//         }
//     }) ;
//     if(arr.length == 0){
//         return 'Fail!';
//     }
//     if(arr.length >= 3) {
//         return 'I smell a series!';
//     }else {
//         return 'Publish!'
//     }
//   }
  
//   // arr is a array of only 'good' string inside; 
  
  
//   console.log(well(['bad', 'bad', 'bad']), 'Fail!');
//   console.log(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
//   console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
  


// // 
// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//     return  (laLigaGoals + copaDelReyGoals + championsLeagueGoals);
//   }



// console.log(goals(0,0,0), 0)
// console.log(goals(43, 10, 5), 58)


// 
// function move (position, roll) {
//     let value = roll  * 2;
//     return position + value;
//   }



// console.log(move(0, 4), 8);
// console.log(move(3, 6), 15);
// console.log(move(2, 5), 12);


// 
// function setAlarm(employed, vacation){
//   return (employed && !vacation) ? true : false;
// }


// console.log(!setAlarm(true, true), "Should be false.");
// console.log(!setAlarm(false, true), "Should be false.");
// console.log(setAlarm(true, false), "Should be true.");
 


//  

// function century(year) {
//     let oneCentury = 100;
//     let noOfYears = year % oneCentury;
//     if(noOfYears == 0) {
//         return  year/oneCentury;
//     }else {
//         return Math.floor(year/oneCentury + 1)
//     }
//   }




// console.log(century(1705), 18, 'Testing for year 1705');
// console.log(century(1900), 19, 'Testing for year 1900');
// console.log(century(1601), 17, 'Testing for year 1601');
// console.log(century(2000), 20, 'Testing for year 2000');
// console.log(century(89), 1, 'Testing for year 89');


// 
// function even_or_odd(number) {
//     return number % 2 == 0 ? 'Even' : 'Odd';
//   }



// console.log(even_or_odd(2), "Even")
// console.log(even_or_odd(0), "Even")
// console.log(even_or_odd(7), "Odd")
// console.log(even_or_odd(1), "Odd")


// function sumOfDifferences(arr) {
//      let lengthOfAnArray = arr.length;
//      console.log(lengthOfAnArray);
//      if(lengthOfAnArray <= 0) {
//          return 0;
//      } else {
//          return Math.max(...arr) - Math.min(...arr)
//      }
// }



// console.log(sumOfDifferences([1, 2, 10]), 9);
// console.log(sumOfDifferences([-3, -2, -1]), 2);
// console.log(sumOfDifferences([]), 0);


// function combat(health, damage) {
//      let finalHealth = health - damage ;
//      return finalHealth > 0 ? finalHealth : 0
//   }

// console.log(combat(100, 5), 95);
// console.log(combat(92, 8), 84);
// console.log(combat(20, 30), 0, "Health cannot go below 0");



   

//     function firstNonConsecutive(arr) {
//         for (let i = 0; i < arr.length - 1; ++i) {
//           if (arr[i] + 1 !== arr[i + 1]) {
//             return arr[i + 1]
//           }
//         }
//         return null  
//   }


// function firstNonConsecutive(arr) {
//     for (let i = 0; i < arr.length - 1; ++i) {
//         if (arr[i] + 1 !== arr[i + 1]) {
//           return arr[i + 1]
//         }
//       }
//       return null  
// }



// const first = firstNonConsecutive([1,2,3,4,6,7,8])
// console.log(first, 6)



// function otherAngle(a, b) {
//      total = 180;
//      return total - (a + b);
//   }



// console.log(otherAngle(30, 60), 90);
// console.log(otherAngle(60, 60), 60);
// console.log(otherAngle(43, 78), 59);
// console.log(otherAngle(10, 20), 150);

// function betterThanAverage(classPoints, yourPoints) {
//     return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
//   }


// function betterThanAverage(classPoints, yourPoints) {
//   const classPointsSum =  classPoints.reduce((a ,b)  => {
//       return a + b ;
//   }, 0);
//   const  points  = classPointsSum + yourPoints;
//   const Average = points/classPoints.length 
//   if(Average<= yourPoints) {
//       return true;
//   } else {
//       return false;
//   }
// }



// console.log(betterThanAverage([2, 3], 5), true);
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);




// 
function greet (name, owner) {
return name === owner ? 'Hello boss' : 'Hello guest';
}

console.log(greet('Daniel', 'Daniel'), 'Hello boss')
console.log(greet('Greg', 'Daniel'), 'Hello guest')







