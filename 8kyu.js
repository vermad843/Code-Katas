import { stringify } from "querystring";

// 	//    circumference  of  a circle = 2 PI r 
// 	//    A = 2 PI r/4 (because we are talking about 1/4 part of a circle)
// 	//      2 PI r  = A * 4 //look at this  carefully 


// function squareArea(A){//A is a length of a arc 
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
//     const wolfPosition =  wolfAtIndex0.indexOf('wolf');
//   return wolfPosition === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ wolfPosition}! You are about to be eaten by a wolf!`;
//   }


// console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]),
//  "Oi! Sheep number 2! You are about to be eaten by a wolf!");
// console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 5! You are about to be eaten by a wolf!");
// console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!");
// console.log(warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
// console.log(warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep");




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
//     return   this.split("")
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



// function move (position, roll) {
//     let value = roll  * 2;
//     return position + value;
//   }



// console.log(move(0, 4), 8);
// console.log(move(3, 6), 15);
// console.log(move(2, 5), 12);



// function setAlarm(employed, vacation){
//   return (employed && !vacation) ? true : false;
// }


// console.log(!setAlarm(true, true), "Should be false.");
// console.log(!setAlarm(false, true), "Should be false.");
// console.log(setAlarm(true, false), "Should be true.");
 


 

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





// function greet (name, owner) {
// return name === owner ? 'Hello boss' : 'Hello guest';
// }

// console.log(greet('Daniel', 'Daniel'), 'Hello boss')
// console.log(greet('Greg', 'Daniel'), 'Hello guest')



// function howManyDalmatians(number){

//     let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
               
//      let respond = number <= 10 ? dogs[0] :  (number <= 50 ? dogs[1] : (number == 101 ? dogs[3] : dogs[2]));
    
//   return respond;
// }
  



// console.log(howManyDalmatians(26), "More than a handful!");
// console.log(howManyDalmatians(8), "Hardly any");
// console.log(howManyDalmatians(14), "More than a handful!");
// console.log(howManyDalmatians(80), "Woah that's a lot of dogs!");
// console.log(howManyDalmatians(100), "Woah that's a lot of dogs!");
// console.log(howManyDalmatians(101), "101 DALMATIANS!!!");




// const summation = function (num) {

//     let output = 0;
//     for (let i = 1; i <= num; i++) {
//       value =   i;
//       output+=value;
//     }
    
//     return output;
// }

// console.log(summation(1), 1)
// console.log(summation(8), 36)







// function countSheeps(sheep) {
//    let noOfSheeps = sheep.filter(Boolean).length;
//    return noOfSheeps;
// }



// var array1 = [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true ];
  
// console.log(countSheeps(array1) == 17, "There are 17 sheeps in total")




// function seatsInTheater(nCols, nRows, col, row) {
//    let myNewCol = col - 1
//    noOfRowsAndColsYouHaveToPass =(nCols - myNewCol ) * (nRows - row);
//    return noOfRowsAndColsYouHaveToPass; 
// }


//   //  nCols = 16, nRows = 11, col = 5 and row = 3,
// console.log(seatsInTheater(16,11,5,3) , 96)
// console.log(seatsInTheater(1,1,1,1) , 0)
// console.log(seatsInTheater(13,6,8,3) , 18)
// console.log(seatsInTheater(60,100,60,1) , 99)
// console.log(seatsInTheater(1000,1000,1000,1000) , 0)





// function finalGrade (exam, projects) {
//     if(exam > 90 || projects > 10) {
//       return 100;
//     }else if(exam > 75 && projects >= 5){
//       return 90;
//     }else if(exam > 50 && projects >= 2) {
//      return 75
//     }else {
//       return 0;
//     }  
// }




// console.log(finalGrade(100, 12), 100);
// console.log(finalGrade(85, 5), 90);
// console.log(finalGrade(100, 12),100);  // 100
// console.log(finalGrade(99, 0), 100);    // 100
// console.log(finalGrade(10, 15), 100);   // 100
// console.log(finalGrade(85, 5), 90);    // 90
// console.log(finalGrade(55, 3), 75);    // 75
// console.log(finalGrade(55, 0), 0);    // 0
// console.log(finalGrade(20, 2), 0);    // 



// function monkeyCount(n) {
//      let monkeys = [];
//      for (let i = 1; i < n+1; i++) {
//          const  array  =  i;
//          monkeys.push(array);
//      }
//      return monkeys;
//     }

 
//   console.log((monkeyCount(5)), [1, 2, 3, 4, 5]);
//   console.log((monkeyCount(3)), [1, 2, 3]);
//   console.log((monkeyCount(9)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
//   console.log((monkeyCount(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//   console.log((monkeyCount(20)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);










// function HQ9(code) {
//   let n = code;
//   if(n == 'H') {
//     return ('Hello World!');
//    } else if(n == 'Q') {
//     return ('Q'); 
//    } else if(n == '9') {
//     return ('99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n98 bottles of beer on the wall, 98 bottles of beer.\nTake one down and pass it around, 97 bottles of beer on the wall.\n97 bottles of beer on the wall, 97 bottles of beer.\nTake one down and pass it around, 96 bottles of beer on the wall.\n96 bottles of beer on the wall, 96 bottles of beer.\nTake one down and pass it around, 95 bottles of beer on the wall.\n95 bottles of beer on the wall, 95 bottles of beer.\nTake one down and pass it around, 94 bottles of beer on the wall.\n94 bottles of beer on the wall, 94 bottles of beer.\nTake one down and pass it around, 93 bottles of beer on the wall.\n93 bottles of beer on the wall, 93 bottles of beer.\nTake one down and pass it around, 92 bottles of beer on the wall.\n92 bottles of beer on the wall, 92 bottles of beer.\nTake one down and pass it around, 91 bottles of beer on the wall.\n91 bottles of beer on the wall, 91 bottles of beer.\nTake one down and pass it around, 90 bottles of beer on the wall.\n90 bottles of beer on the wall, 90 bottles of beer.\nTake one down and pass it around, 89 bottles of beer on the wall.\n89 bottles of beer on the wall, 89 bottles of beer.\nTake one down and pass it around, 88 bottles of beer on the wall.\n88 bottles of beer on the wall, 88 bottles of beer.\nTake one down and pass it around, 87 bottles of beer on the wall.\n87 bottles of beer on the wall, 87 bottles of beer.\nTake one down and pass it around, 86 bottles of beer on the wall.\n86 bottles of beer on the wall, 86 bottles of beer.\nTake one down and pass it around, 85 bottles of beer on the wall.\n85 bottles of beer on the wall, 85 bottles of beer.\nTake one down and pass it around, 84 bottles of beer on the wall.\n84 bottles of beer on the wall, 84 bottles of beer.\nTake one down and pass it around, 83 bottles of beer on the wall.\n83 bottles of beer on the wall, 83 bottles of beer.\nTake one down and pass it around, 82 bottles of beer on the wall.\n82 bottles of beer on the wall, 82 bottles of beer.\nTake one down and pass it around, 81 bottles of beer on the wall.\n81 bottles of beer on the wall, 81 bottles of beer.\nTake one down and pass it around, 80 bottles of beer on the wall.\n80 bottles of beer on the wall, 80 bottles of beer.\nTake one down and pass it around, 79 bottles of beer on the wall.\n79 bottles of beer on the wall, 79 bottles of beer.\nTake one down and pass it around, 78 bottles of beer on the wall.\n78 bottles of beer on the wall, 78 bottles of beer.\nTake one down and pass it around, 77 bottles of beer on the wall.\n77 bottles of beer on the wall, 77 bottles of beer.\nTake one down and pass it around, 76 bottles of beer on the wall.\n76 bottles of beer on the wall, 76 bottles of beer.\nTake one down and pass it around, 75 bottles of beer on the wall.\n75 bottles of beer on the wall, 75 bottles of beer.\nTake one down and pass it around, 74 bottles of beer on the wall.\n74 bottles of beer on the wall, 74 bottles of beer.\nTake one down and pass it around, 73 bottles of beer on the wall.\n73 bottles of beer on the wall, 73 bottles of beer.\nTake one down and pass it around, 72 bottles of beer on the wall.\n72 bottles of beer on the wall, 72 bottles of beer.\nTake one down and pass it around, 71 bottles of beer on the wall.\n71 bottles of beer on the wall, 71 bottles of beer.\nTake one down and pass it around, 70 bottles of beer on the wall.\n70 bottles of beer on the wall, 70 bottles of beer.\nTake one down and pass it around, 69 bottles of beer on the wall.\n69 bottles of beer on the wall, 69 bottles of beer.\nTake one down and pass it around, 68 bottles of beer on the wall.\n68 bottles of beer on the wall, 68 bottles of beer.\nTake one down and pass it around, 67 bottles of beer on the wall.\n67 bottles of beer on the wall, 67 bottles of beer.\nTake one down and pass it around, 66 bottles of beer on the wall.\n66 bottles of beer on the wall, 66 bottles of beer.\nTake one down and pass it around, 65 bottles of beer on the wall.\n65 bottles of beer on the wall, 65 bottles of beer.\nTake one down and pass it around, 64 bottles of beer on the wall.\n64 bottles of beer on the wall, 64 bottles of beer.\nTake one down and pass it around, 63 bottles of beer on the wall.\n63 bottles of beer on the wall, 63 bottles of beer.\nTake one down and pass it around, 62 bottles of beer on the wall.\n62 bottles of beer on the wall, 62 bottles of beer.\nTake one down and pass it around, 61 bottles of beer on the wall.\n61 bottles of beer on the wall, 61 bottles of beer.\nTake one down and pass it around, 60 bottles of beer on the wall.\n60 bottles of beer on the wall, 60 bottles of beer.\nTake one down and pass it around, 59 bottles of beer on the wall.\n59 bottles of beer on the wall, 59 bottles of beer.\nTake one down and pass it around, 58 bottles of beer on the wall.\n58 bottles of beer on the wall, 58 bottles of beer.\nTake one down and pass it around, 57 bottles of beer on the wall.\n57 bottles of beer on the wall, 57 bottles of beer.\nTake one down and pass it around, 56 bottles of beer on the wall.\n56 bottles of beer on the wall, 56 bottles of beer.\nTake one down and pass it around, 55 bottles of beer on the wall.\n55 bottles of beer on the wall, 55 bottles of beer.\nTake one down and pass it around, 54 bottles of beer on the wall.\n54 bottles of beer on the wall, 54 bottles of beer.\nTake one down and pass it around, 53 bottles of beer on the wall.\n53 bottles of beer on the wall, 53 bottles of beer.\nTake one down and pass it around, 52 bottles of beer on the wall.\n52 bottles of beer on the wall, 52 bottles of beer.\nTake one down and pass it around, 51 bottles of beer on the wall.\n51 bottles of beer on the wall, 51 bottles of beer.\nTake one down and pass it around, 50 bottles of beer on the wall.\n50 bottles of beer on the wall, 50 bottles of beer.\nTake one down and pass it around, 49 bottles of beer on the wall.\n49 bottles of beer on the wall, 49 bottles of beer.\nTake one down and pass it around, 48 bottles of beer on the wall.\n48 bottles of beer on the wall, 48 bottles of beer.\nTake one down and pass it around, 47 bottles of beer on the wall.\n47 bottles of beer on the wall, 47 bottles of beer.\nTake one down and pass it around, 46 bottles of beer on the wall.\n46 bottles of beer on the wall, 46 bottles of beer.\nTake one down and pass it around, 45 bottles of beer on the wall.\n45 bottles of beer on the wall, 45 bottles of beer.\nTake one down and pass it around, 44 bottles of beer on the wall.\n44 bottles of beer on the wall, 44 bottles of beer.\nTake one down and pass it around, 43 bottles of beer on the wall.\n43 bottles of beer on the wall, 43 bottles of beer.\nTake one down and pass it around, 42 bottles of beer on the wall.\n42 bottles of beer on the wall, 42 bottles of beer.\nTake one down and pass it around, 41 bottles of beer on the wall.\n41 bottles of beer on the wall, 41 bottles of beer.\nTake one down and pass it around, 40 bottles of beer on the wall.\n40 bottles of beer on the wall, 40 bottles of beer.\nTake one down and pass it around, 39 bottles of beer on the wall.\n39 bottles of beer on the wall, 39 bottles of beer.\nTake one down and pass it around, 38 bottles of beer on the wall.\n38 bottles of beer on the wall, 38 bottles of beer.\nTake one down and pass it around, 37 bottles of beer on the wall.\n37 bottles of beer on the wall, 37 bottles of beer.\nTake one down and pass it around, 36 bottles of beer on the wall.\n36 bottles of beer on the wall, 36 bottles of beer.\nTake one down and pass it around, 35 bottles of beer on the wall.\n35 bottles of beer on the wall, 35 bottles of beer.\nTake one down and pass it around, 34 bottles of beer on the wall.\n34 bottles of beer on the wall, 34 bottles of beer.\nTake one down and pass it around, 33 bottles of beer on the wall.\n33 bottles of beer on the wall, 33 bottles of beer.\nTake one down and pass it around, 32 bottles of beer on the wall.\n32 bottles of beer on the wall, 32 bottles of beer.\nTake one down and pass it around, 31 bottles of beer on the wall.\n31 bottles of beer on the wall, 31 bottles of beer.\nTake one down and pass it around, 30 bottles of beer on the wall.\n30 bottles of beer on the wall, 30 bottles of beer.\nTake one down and pass it around, 29 bottles of beer on the wall.\n29 bottles of beer on the wall, 29 bottles of beer.\nTake one down and pass it around, 28 bottles of beer on the wall.\n28 bottles of beer on the wall, 28 bottles of beer.\nTake one down and pass it around, 27 bottles of beer on the wall.\n27 bottles of beer on the wall, 27 bottles of beer.\nTake one down and pass it around, 26 bottles of beer on the wall.\n26 bottles of beer on the wall, 26 bottles of beer.\nTake one down and pass it around, 25 bottles of beer on the wall.\n25 bottles of beer on the wall, 25 bottles of beer.\nTake one down and pass it around, 24 bottles of beer on the wall.\n24 bottles of beer on the wall, 24 bottles of beer.\nTake one down and pass it around, 23 bottles of beer on the wall.\n23 bottles of beer on the wall, 23 bottles of beer.\nTake one down and pass it around, 22 bottles of beer on the wall.\n22 bottles of beer on the wall, 22 bottles of beer.\nTake one down and pass it around, 21 bottles of beer on the wall.\n21 bottles of beer on the wall, 21 bottles of beer.\nTake one down and pass it around, 20 bottles of beer on the wall.\n20 bottles of beer on the wall, 20 bottles of beer.\nTake one down and pass it around, 19 bottles of beer on the wall.\n19 bottles of beer on the wall, 19 bottles of beer.\nTake one down and pass it around, 18 bottles of beer on the wall.\n18 bottles of beer on the wall, 18 bottles of beer.\nTake one down and pass it around, 17 bottles of beer on the wall.\n17 bottles of beer on the wall, 17 bottles of beer.\nTake one down and pass it around, 16 bottles of beer on the wall.\n16 bottles of beer on the wall, 16 bottles of beer.\nTake one down and pass it around, 15 bottles of beer on the wall.\n15 bottles of beer on the wall, 15 bottles of beer.\nTake one down and pass it around, 14 bottles of beer on the wall.\n14 bottles of beer on the wall, 14 bottles of beer.\nTake one down and pass it around, 13 bottles of beer on the wall.\n13 bottles of beer on the wall, 13 bottles of beer.\nTake one down and pass it around, 12 bottles of beer on the wall.\n12 bottles of beer on the wall, 12 bottles of beer.\nTake one down and pass it around, 11 bottles of beer on the wall.\n11 bottles of beer on the wall, 11 bottles of beer.\nTake one down and pass it around, 10 bottles of beer on the wall.\n10 bottles of beer on the wall, 10 bottles of beer.\nTake one down and pass it around, 9 bottles of beer on the wall.\n9 bottles of beer on the wall, 9 bottles of beer.\nTake one down and pass it around, 8 bottles of beer on the wall.\n8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n7 bottles of beer on the wall, 7 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall.\n6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n5 bottles of beer on the wall, 5 bottles of beer.\nTake one down and pass it around, 4 bottles of beer on the wall.\n4 bottles of beer on the wall, 4 bottles of beer.\nTake one down and pass it around, 3 bottles of beer on the wall.\n3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.');
//    } else {
//     return undefined;
//    }
//  }


 
// console.log(HQ9('H'), 'Hello World!', '\'H\' should return \'Hello World!\'');
// console.log(HQ9('Q'), 'Q', '\'Q\' should return \'Q\'');
// console.log(HQ9('9'), '99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n98 bottles of beer on the wall, 98 bottles of beer.\nTake one down and pass it around, 97 bottles of beer on the wall.\n97 bottles of beer on the wall, 97 bottles of beer.\nTake one down and pass it around, 96 bottles of beer on the wall.\n96 bottles of beer on the wall, 96 bottles of beer.\nTake one down and pass it around, 95 bottles of beer on the wall.\n95 bottles of beer on the wall, 95 bottles of beer.\nTake one down and pass it around, 94 bottles of beer on the wall.\n94 bottles of beer on the wall, 94 bottles of beer.\nTake one down and pass it around, 93 bottles of beer on the wall.\n93 bottles of beer on the wall, 93 bottles of beer.\nTake one down and pass it around, 92 bottles of beer on the wall.\n92 bottles of beer on the wall, 92 bottles of beer.\nTake one down and pass it around, 91 bottles of beer on the wall.\n91 bottles of beer on the wall, 91 bottles of beer.\nTake one down and pass it around, 90 bottles of beer on the wall.\n90 bottles of beer on the wall, 90 bottles of beer.\nTake one down and pass it around, 89 bottles of beer on the wall.\n89 bottles of beer on the wall, 89 bottles of beer.\nTake one down and pass it around, 88 bottles of beer on the wall.\n88 bottles of beer on the wall, 88 bottles of beer.\nTake one down and pass it around, 87 bottles of beer on the wall.\n87 bottles of beer on the wall, 87 bottles of beer.\nTake one down and pass it around, 86 bottles of beer on the wall.\n86 bottles of beer on the wall, 86 bottles of beer.\nTake one down and pass it around, 85 bottles of beer on the wall.\n85 bottles of beer on the wall, 85 bottles of beer.\nTake one down and pass it around, 84 bottles of beer on the wall.\n84 bottles of beer on the wall, 84 bottles of beer.\nTake one down and pass it around, 83 bottles of beer on the wall.\n83 bottles of beer on the wall, 83 bottles of beer.\nTake one down and pass it around, 82 bottles of beer on the wall.\n82 bottles of beer on the wall, 82 bottles of beer.\nTake one down and pass it around, 81 bottles of beer on the wall.\n81 bottles of beer on the wall, 81 bottles of beer.\nTake one down and pass it around, 80 bottles of beer on the wall.\n80 bottles of beer on the wall, 80 bottles of beer.\nTake one down and pass it around, 79 bottles of beer on the wall.\n79 bottles of beer on the wall, 79 bottles of beer.\nTake one down and pass it around, 78 bottles of beer on the wall.\n78 bottles of beer on the wall, 78 bottles of beer.\nTake one down and pass it around, 77 bottles of beer on the wall.\n77 bottles of beer on the wall, 77 bottles of beer.\nTake one down and pass it around, 76 bottles of beer on the wall.\n76 bottles of beer on the wall, 76 bottles of beer.\nTake one down and pass it around, 75 bottles of beer on the wall.\n75 bottles of beer on the wall, 75 bottles of beer.\nTake one down and pass it around, 74 bottles of beer on the wall.\n74 bottles of beer on the wall, 74 bottles of beer.\nTake one down and pass it around, 73 bottles of beer on the wall.\n73 bottles of beer on the wall, 73 bottles of beer.\nTake one down and pass it around, 72 bottles of beer on the wall.\n72 bottles of beer on the wall, 72 bottles of beer.\nTake one down and pass it around, 71 bottles of beer on the wall.\n71 bottles of beer on the wall, 71 bottles of beer.\nTake one down and pass it around, 70 bottles of beer on the wall.\n70 bottles of beer on the wall, 70 bottles of beer.\nTake one down and pass it around, 69 bottles of beer on the wall.\n69 bottles of beer on the wall, 69 bottles of beer.\nTake one down and pass it around, 68 bottles of beer on the wall.\n68 bottles of beer on the wall, 68 bottles of beer.\nTake one down and pass it around, 67 bottles of beer on the wall.\n67 bottles of beer on the wall, 67 bottles of beer.\nTake one down and pass it around, 66 bottles of beer on the wall.\n66 bottles of beer on the wall, 66 bottles of beer.\nTake one down and pass it around, 65 bottles of beer on the wall.\n65 bottles of beer on the wall, 65 bottles of beer.\nTake one down and pass it around, 64 bottles of beer on the wall.\n64 bottles of beer on the wall, 64 bottles of beer.\nTake one down and pass it around, 63 bottles of beer on the wall.\n63 bottles of beer on the wall, 63 bottles of beer.\nTake one down and pass it around, 62 bottles of beer on the wall.\n62 bottles of beer on the wall, 62 bottles of beer.\nTake one down and pass it around, 61 bottles of beer on the wall.\n61 bottles of beer on the wall, 61 bottles of beer.\nTake one down and pass it around, 60 bottles of beer on the wall.\n60 bottles of beer on the wall, 60 bottles of beer.\nTake one down and pass it around, 59 bottles of beer on the wall.\n59 bottles of beer on the wall, 59 bottles of beer.\nTake one down and pass it around, 58 bottles of beer on the wall.\n58 bottles of beer on the wall, 58 bottles of beer.\nTake one down and pass it around, 57 bottles of beer on the wall.\n57 bottles of beer on the wall, 57 bottles of beer.\nTake one down and pass it around, 56 bottles of beer on the wall.\n56 bottles of beer on the wall, 56 bottles of beer.\nTake one down and pass it around, 55 bottles of beer on the wall.\n55 bottles of beer on the wall, 55 bottles of beer.\nTake one down and pass it around, 54 bottles of beer on the wall.\n54 bottles of beer on the wall, 54 bottles of beer.\nTake one down and pass it around, 53 bottles of beer on the wall.\n53 bottles of beer on the wall, 53 bottles of beer.\nTake one down and pass it around, 52 bottles of beer on the wall.\n52 bottles of beer on the wall, 52 bottles of beer.\nTake one down and pass it around, 51 bottles of beer on the wall.\n51 bottles of beer on the wall, 51 bottles of beer.\nTake one down and pass it around, 50 bottles of beer on the wall.\n50 bottles of beer on the wall, 50 bottles of beer.\nTake one down and pass it around, 49 bottles of beer on the wall.\n49 bottles of beer on the wall, 49 bottles of beer.\nTake one down and pass it around, 48 bottles of beer on the wall.\n48 bottles of beer on the wall, 48 bottles of beer.\nTake one down and pass it around, 47 bottles of beer on the wall.\n47 bottles of beer on the wall, 47 bottles of beer.\nTake one down and pass it around, 46 bottles of beer on the wall.\n46 bottles of beer on the wall, 46 bottles of beer.\nTake one down and pass it around, 45 bottles of beer on the wall.\n45 bottles of beer on the wall, 45 bottles of beer.\nTake one down and pass it around, 44 bottles of beer on the wall.\n44 bottles of beer on the wall, 44 bottles of beer.\nTake one down and pass it around, 43 bottles of beer on the wall.\n43 bottles of beer on the wall, 43 bottles of beer.\nTake one down and pass it around, 42 bottles of beer on the wall.\n42 bottles of beer on the wall, 42 bottles of beer.\nTake one down and pass it around, 41 bottles of beer on the wall.\n41 bottles of beer on the wall, 41 bottles of beer.\nTake one down and pass it around, 40 bottles of beer on the wall.\n40 bottles of beer on the wall, 40 bottles of beer.\nTake one down and pass it around, 39 bottles of beer on the wall.\n39 bottles of beer on the wall, 39 bottles of beer.\nTake one down and pass it around, 38 bottles of beer on the wall.\n38 bottles of beer on the wall, 38 bottles of beer.\nTake one down and pass it around, 37 bottles of beer on the wall.\n37 bottles of beer on the wall, 37 bottles of beer.\nTake one down and pass it around, 36 bottles of beer on the wall.\n36 bottles of beer on the wall, 36 bottles of beer.\nTake one down and pass it around, 35 bottles of beer on the wall.\n35 bottles of beer on the wall, 35 bottles of beer.\nTake one down and pass it around, 34 bottles of beer on the wall.\n34 bottles of beer on the wall, 34 bottles of beer.\nTake one down and pass it around, 33 bottles of beer on the wall.\n33 bottles of beer on the wall, 33 bottles of beer.\nTake one down and pass it around, 32 bottles of beer on the wall.\n32 bottles of beer on the wall, 32 bottles of beer.\nTake one down and pass it around, 31 bottles of beer on the wall.\n31 bottles of beer on the wall, 31 bottles of beer.\nTake one down and pass it around, 30 bottles of beer on the wall.\n30 bottles of beer on the wall, 30 bottles of beer.\nTake one down and pass it around, 29 bottles of beer on the wall.\n29 bottles of beer on the wall, 29 bottles of beer.\nTake one down and pass it around, 28 bottles of beer on the wall.\n28 bottles of beer on the wall, 28 bottles of beer.\nTake one down and pass it around, 27 bottles of beer on the wall.\n27 bottles of beer on the wall, 27 bottles of beer.\nTake one down and pass it around, 26 bottles of beer on the wall.\n26 bottles of beer on the wall, 26 bottles of beer.\nTake one down and pass it around, 25 bottles of beer on the wall.\n25 bottles of beer on the wall, 25 bottles of beer.\nTake one down and pass it around, 24 bottles of beer on the wall.\n24 bottles of beer on the wall, 24 bottles of beer.\nTake one down and pass it around, 23 bottles of beer on the wall.\n23 bottles of beer on the wall, 23 bottles of beer.\nTake one down and pass it around, 22 bottles of beer on the wall.\n22 bottles of beer on the wall, 22 bottles of beer.\nTake one down and pass it around, 21 bottles of beer on the wall.\n21 bottles of beer on the wall, 21 bottles of beer.\nTake one down and pass it around, 20 bottles of beer on the wall.\n20 bottles of beer on the wall, 20 bottles of beer.\nTake one down and pass it around, 19 bottles of beer on the wall.\n19 bottles of beer on the wall, 19 bottles of beer.\nTake one down and pass it around, 18 bottles of beer on the wall.\n18 bottles of beer on the wall, 18 bottles of beer.\nTake one down and pass it around, 17 bottles of beer on the wall.\n17 bottles of beer on the wall, 17 bottles of beer.\nTake one down and pass it around, 16 bottles of beer on the wall.\n16 bottles of beer on the wall, 16 bottles of beer.\nTake one down and pass it around, 15 bottles of beer on the wall.\n15 bottles of beer on the wall, 15 bottles of beer.\nTake one down and pass it around, 14 bottles of beer on the wall.\n14 bottles of beer on the wall, 14 bottles of beer.\nTake one down and pass it around, 13 bottles of beer on the wall.\n13 bottles of beer on the wall, 13 bottles of beer.\nTake one down and pass it around, 12 bottles of beer on the wall.\n12 bottles of beer on the wall, 12 bottles of beer.\nTake one down and pass it around, 11 bottles of beer on the wall.\n11 bottles of beer on the wall, 11 bottles of beer.\nTake one down and pass it around, 10 bottles of beer on the wall.\n10 bottles of beer on the wall, 10 bottles of beer.\nTake one down and pass it around, 9 bottles of beer on the wall.\n9 bottles of beer on the wall, 9 bottles of beer.\nTake one down and pass it around, 8 bottles of beer on the wall.\n8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n7 bottles of beer on the wall, 7 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall.\n6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n5 bottles of beer on the wall, 5 bottles of beer.\nTake one down and pass it around, 4 bottles of beer on the wall.\n4 bottles of beer on the wall, 4 bottles of beer.\nTake one down and pass it around, 3 bottles of beer on the wall.\n3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.', '\'9\' should return the full lyrics of 99 Bottles of Beer');
// console.log(HQ9('X'), undefined, 'Everything else should not return anything');





// function findNeedle(haystack) {
//   console.log(haystack);
//   const indexOfNeedle = haystack.indexOf('needle');
//   return `found the needle at position ${indexOfNeedle}`
// } 



// var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
// var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
// var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

// console.log(findNeedle(haystack_1), 'found the needle at position 3')
// console.log(findNeedle(haystack_2), 'found the needle at position 5') 
// console.log(findNeedle(haystack_3), 'found the needle at position 30')



// // 
// function checkForFactor (base, factor) {
//        return base % factor == 0 ? true : false;
// }



// console.log(checkForFactor(10,2), true)
// console.log(checkForFactor(63,7), true)
// console.log(checkForFactor(2450,5), true)
// console.log(checkForFactor(24612,3), true)
// console.log(checkForFactor(9,2), false)
// console.log(checkForFactor(653,7), false)
// console.log(checkForFactor(2453,5), false)
// console.log(checkForFactor(24617,3), false)



// // 
// function nthEven(n){
//     console.log(n)
//     return (n-1)* 2;
//   }


// console.log(nthEven(1), 0, "Wrong Value!");
// console.log(nthEven(2), 2, "Wrong Value!");
// console.log(nthEven(3), 4, "Wrong Value!");
// console.log(nthEven(100), 198, "Wrong Value!");
// console.log(nthEven(1298734), 2597466, "Wrong Value!");


// function take(arr, n) {
//   return arr.slice(0 , n)     
// }
  

// console.log(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2], "should return the first 3 items");



// // 
// function expressionMatter(a, b, c) {
//     return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c))
// }



//   console.log(expressionMatter(2, 1, 2), 6);
//   console.log(expressionMatter(2, 1, 1), 4);
//   console.log(expressionMatter(1, 1, 1), 3);
//   console.log(expressionMatter(1, 2, 3), 9);
//   console.log(expressionMatter(1, 3, 1), 5);
//   console.log(expressionMatter(2, 2, 2), 8);
//   console.log(expressionMatter(5, 1, 3), 20);
//   console.log(expressionMatter(3, 5, 7), 105);
//   console.log(expressionMatter(5, 6, 1), 35);
//   console.log(expressionMatter(1, 6, 1), 8);
//   console.log(expressionMatter(2, 6, 1), 14);
//   console.log(expressionMatter(6, 7, 1), 48);
//   console.log(expressionMatter(2, 10, 3), 60);
//   console.log(expressionMatter(1, 8, 3), 27);
//   console.log(expressionMatter(9, 7, 2), 126);
//   console.log(expressionMatter(1, 1, 10), 20);
//   console.log(expressionMatter(9, 1, 1), 18);
//   console.log(expressionMatter(10, 5, 6), 300);
//   console.log(expressionMatter(1, 10, 1), 12);




// function squareSum(numbers){
//   return numbers.reduce((sum, num) => {
//       return (num*num) + sum 
//   }, 0)
// }


// console.log(squareSum([1,2]), 5)
// console.log(squareSum([0, 3, 4, 5]), 50)




// function sumMix(x){
//   return x.reduce((sum, num) => {
//       sum+= parseInt(num)
//       return sum
//   }, 0);
// }



// console.log(sumMix([9, 3, '7', '3']), 22);
// console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);



// ((P-1)! + 1) / (P * P)
// function amIWilson(p) {
// let factorial = p - 1;
//       for (i = factorial; i > 1; i--) {
//     factorial = factorial * (i - 1)
//    }
//      let wilson = (factorial + 1) / (p * p);
//      if (wilson % 1 === 0) {
//        return true;
//      } else {
//        return false;
//      }
// }
  




// console.log(amIWilson(5), true)
// console.log(amIWilson(9), false)
// console.log(amIWilson(6), false)



// function integrate(coefficient, exponent) {
//  let newExponent = exponent + 1;
//  return `${coefficient/newExponent}x^${newExponent}`;
// }



// console.log(integrate(3,2), "1x^3");
// console.log(integrate(12,5), "2x^6");
// console.log(integrate(20,1), "10x^2");
// console.log(integrate(40,3), "10x^4");
// console.log(integrate(90,2), "30x^3");




// function getASCII(c){
//    let number= c.charCodeAt();
//    return number;
// }


// console.log(getASCII('A'),65)
// console.log(getASCII(' '),32)
// console.log(getASCII('!'),33)




// function findDifference([i,j,k],[m,n,o]) {
//    return Math.abs(i*j*k - m*n*o); 
// }



// console.log(findDifference([3, 2, 5], [1, 4, 4]), 14);
// console.log(findDifference([9, 7, 2], [5, 2, 2]), 106);
// console.log(findDifference([11, 2, 5], [1, 10, 8]), 30);
// console.log(findDifference([4, 4, 7], [3, 9, 3]), 31);
// console.log(findDifference([15, 20, 25], [10, 30, 25]), 0);



// function correct(string){
//     let regex1 = /5/gi;
//     let regex2 = /0/gi;
//     let regex3 = /1/gi;
//   return string.replace(regex1,'S').replace(regex2, 'O').replace(regex3, 'I');  
// }
// // S is misinterpreted as 5
// // O is misinterpreted as 0
// // I is misinterpreted as 1

// console.log(correct("L0ND0N"),"LONDON");
// console.log(correct("DUBL1N"),"DUBLIN");
// console.log(correct("51NGAP0RE"),"SINGAPORE");
// console.log(correct("BUDAPE5T"),"BUDAPEST");
// console.log(correct("PAR15"),"PARIS");





// function abbrevName(name){
//  return name.split(' ').map((letter) => {
//      return letter[0].toUpperCase();
//  }).join('.')
// };
   


// console.log(abbrevName("Sam Harris"), "S.H");
// console.log(abbrevName("Patrick Feenan"), "P.F");
// console.log(abbrevName("Evan Cole"), "E.C");
// console.log(abbrevName("P Favuzzi"), "P.F");
// console.log(abbrevName("David Mendieta"), "D.M");




// function divisibleBy(numbers, divisor){
//   return numbers.filter((num) => {
//       return num % divisor == 0;
//   })
// }



// console.log(divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
// console.log(divisibleBy([1,2,3,4,5,6], 3), [3,6]);
// console.log(divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
// console.log(divisibleBy([0], 4), [0]);
// console.log(divisibleBy([1,3,5], 2), []);





// function countPositivesSumNegatives(input) {
//    return input && input.length ?
//     [ input.filter((num) => {
//        return num > 0
//    }).length,
//     input.filter((num) => {
//        return num < 0
//    }).reduce((sum , n) => {
//      sum+=n
//     return sum      
//    },0)]
//    : []
// }




// let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// let actual = countPositivesSumNegatives(testData);
// let expected = [10, -65];

// console.log(actual[0] == expected[0] && actual[1] == expected[1], "Wrong return value.");

// testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
// actual = countPositivesSumNegatives(testData);
// expected = [8, -50];

// console.log(actual[0] == expected[0] && actual[1] == expected[1], "Wrong return value.");




// function boolToWord( boolean ){
//    return boolean ? 'Yes' : 'No'
//   }

// console.log(boolToWord(true), 'Yes')
// console.log(boolToWord(false), 'No')





// function enough(cap, on, wait) {
//     let excessPassengers =   Math.abs(wait + on - cap);
//     let totalPassengers = wait + on;
//     if(cap > totalPassengers) {
//         return 0
//     }else {
//         return excessPassengers
//     } 
// }


// console.log(enough(10, 5, 5), 0);
// console.log(enough(100, 60, 50), 10);
// console.log(enough(20, 5, 5), 10);






// function makeNegative(num) {
//  return - Math.abs(num);
// }

// console.log(makeNegative(42), -42);





// function elevator(left, right, call){
//    let a =  Math.abs(call - left );
//    console.log(a);//0 , 1, 2, 0, 1
//    let b =  Math.abs(call - right );
//    console.log(b);//1, 0, 1, 0, 1
//    return  Math.abs(call - left ) < Math.abs(call - right ) ? 'left' : 'right'; 
// }


// console.log(elevator(0,1,0), 'left');
// console.log(elevator(0,1,1), 'right');
// console.log(elevator(0,1,2), 'right');
// console.log(elevator(0,0,0), 'right');
// console.log(elevator(0,2,1), 'right');






// function points(games) {
//  return games.map((game) => {
//      console.log(game);
//     let x = game[0];
//     let y = game[2]
//     if(x > y) {
//         return 3;
//     }else if(x < y){
//         return 0;
//     }else {
//         return 1;
//     }
//  }).reduce((sum, x) => {
//    sum+=x
//    return sum   
//  }, 0);
// }


// console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
// console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
// console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
// console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
// console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);





// function howManyLightsabersDoYouOwn(name) {
//     return name === 'Zach' ? 18 : 0; 
//   }


//   console.log( howManyLightsabersDoYouOwn(), 0 )
//   console.log( howManyLightsabersDoYouOwn("Adam"), 0 )
//   console.log( howManyLightsabersDoYouOwn("Zach"), 18 )





 
      
// function checkExam(array1, array2) {
//   let score = 0;
    
//     for (let i = 0; i < array1.length; i++){
//       if (array1[i] == array2[i]) {
//        score += 4;
//       }
//       else if (array2[i] === ""){
//         score += 0
//       } 
//       else {
//         score -= 1
//       }  
//     }
//      return score < 0 ? 0 : score
//   }
  




// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
// console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
// console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);



// function gooseFilter (birds) {
//     let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return birds.filter((bird) => {
//      return !geese.includes(bird);
//     })
//   };



//   console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),["Mallard", "Hook Bill", "Crested", "Blue Swedish"])
//   console.log(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
//   console.log(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]),[]);






// Write a function "greet" that returns "hello world!"
// function greet() {
//     return 'hello world!'
// }




// console.log(typeof greet, "function", "greet should be a function");
// console.log(greet(), "hello world!");





// const money = 10
// const candy = 1.42
// const chips = 2.4
// const soda = 1

// const change = money - (candy+chips+soda);
// console.log(change);//5.18

// console.log(money, 10);
// console.log(candy, 1.42);
// console.log(chips, 2.4);
// console.log(soda, 1);






// function invert(array) {
//     return array.map((arr ) => {
//         return -arr
//     });
//  }

//  console.log(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
//  console.log(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
//  console.log(invert([]), []);
//  console.log(invert([0]), [0]);




// a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or nurses run.

// function isPalindrome(x) {
//     let a =  x.split("").reverse().join('').toLowerCase();
//     let b = x.toLowerCase();
//     console.log(b);
//     if(a == b) {
//         return true;
//     }else {
//         return false
//     }
//   }


//   console.log((isPalindrome("a"), true));
//   console.log((isPalindrome("aba"), true));
//   console.log((isPalindrome("Abba"), true));
//   console.log((isPalindrome("hello"), false));
//   console.log((isPalindrome("Bob"), true));
//   console.log((isPalindrome("Madam"), true));
//   console.log((isPalindrome("AbBa"), true));
//   console.log((isPalindrome(""), true));





// function DNAtoRNA(dna) {
//   return dna.replace(/T/g, 'U');
//   }


// console.log(DNAtoRNA("TTTT"), "UUUU")
// console.log(DNAtoRNA("GCAT"), "GCAU")
// console.log(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC");






// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args);
//   }
// }

// var sif = new SmallestIntegerFinder();
// console.log(sif.findSmallestInt([78,56,232,12,8]),8,'Should return the smallest int 8');
// console.log(sif.findSmallestInt([78,56,232,12,18]),12,'Should return the smallest int 12');
// console.log(sif.findSmallestInt([78,56,232,412,228]),56,'Should return the smallest int 56');
// console.log(sif.findSmallestInt([78,56,232,12,0]),0,'Should return the smallest int 0');
// console.log(sif.findSmallestInt([1,56,232,12,8]),1,'Should return the smallest int 1');





// function simpleMultiplication(number) {
//    return  number % 2 == 0 ? number*8 : number * 9;
// }


// console.log(simpleMultiplication(2),16,'Should return given argument times eight...')
// console.log(simpleMultiplication(1),9,'Should return given argument times nine...')
// console.log(simpleMultiplication(8),64,'Should return given argument times eight...')
// console.log(simpleMultiplication(4),32,'Should return given argument times eight...')
// console.log(simpleMultiplication(5),45,'Should return given argument times nine...')





// function getChar(c){
//   return String.fromCharCode(c);
// }



// console.log(getChar(55),'7')
// console.log(getChar(56),'8')
// console.log(getChar(57),'9')
// console.log(getChar(58),':')
// console.log(getChar(59),';')
// console.log(getChar(60),'<')
// console.log(getChar(61),'=')
// console.log(getChar(62),'>')
// console.log(getChar(63),'?')
// console.log(getChar(64),'@')
// console.log(getChar(65),'A')





// Sum Numbers
// function sum (numbers) {
//   console.log(numbers);
//   return numbers.reduce((sum,number) => {
//     return sum + number 
//   }, 0); 
// };


// console.log(sum([]), 0);
// console.log(sum([1, 5.2, 4, 0, -1]), 9.2);






// function getAverage(marks){
//   return Math.floor(marks.reduce((sum, score ) => {
//     return sum+=score/marks.length;     
//   }, 0)
//   )}



// console.log(getAverage([2,2,2,2]),2);
// console.log(getAverage([1,2,3,4,5,]),3);
// console.log(getAverage([1,1,1,1,1,1,1,2]),1);




// function grow(x){
//  return x.reduce((product, num) => {
//    return product*num
//  }, 1)
// }


// console.log(grow([1, 2, 3]), 6);
// console.log(grow([4, 1, 1, 1, 4]), 16); 
// console.log(grow([2, 2, 2, 2, 2, 2]), 64); 





// function countBy(x, n) {
//   let Z = [];
//    for (let i = 1; i <= n; i++) {
//      const num = i;
//     Z.push(x * num)
//   }
//   return Z;
// }

// // console.log(countBy(1,5), [1,2,3,4,5], "Array does not match")
// console.log(countBy(2,5), [2,4,6,8,10], "Array does not match")




// function maps(x){
// return x.map((num) => {
//   return num * 2
//  })
// }




// console.log(maps([1, 2, 3]), [2, 4, 6]);
// console.log(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
// console.log(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 



// // 

// function arrayPlusArray(arr1, arr2) {
//   let a = arr1.reduce((sum, num) => {
//     return sum+= num
//   }, 0);
//   let b = arr2.reduce((sum, num) => {
//     return sum+= num
//   }, 0);
//  return a + b;
// }


// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
// console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
// console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
// console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);




// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

// function getGrade (s1, s2, s3) {
//   let sum = s1+s2+s3
//   let score = Math.floor(Math.abs(sum/3))
//      if( score < 60) {
//       return 'F'
//      }else if ( score < 70	) {
//        return 'D'
//      }else if(score < 80) {
//        return 'C'
//      }else if (score < 90) {
//        return 'B'
//      }else {
//       return 'A';
//   }
// }


// console.log(getGrade(95,90,93), 'A')
// console.log(getGrade(100,85,96), 'A')
// console.log(getGrade(92,93,94), 'A')
// console.log(getGrade(70,70,100), 'B')
// console.log(getGrade(82,85,87), 'B')
// console.log(getGrade(84,79,85), 'B')
// console.log(getGrade(89,89,90), 'B') 
// console.log(getGrade(70,70,70), 'C')
// console.log(getGrade(75,70,79), 'C')
// console.log(getGrade(60,82,76), 'C')







// First Example:

// Input: true, true, false, operator: AND

// Steps: true AND true -> true, true AND false -> false

// Output: false

// Second Example:

// Input: true, true, false, operator: OR

// Steps: true OR true -> true, true OR false -> true

// Output: true

// Third Example:

// Input: true, true, false, operator: XOR

// Steps: true XOR true -> false, false XOR false -> false

// Output: false

// let operators = {
//   'AND': (a, b) => a && b,
//   'OR': (a, b) =>  a || b,
//   'XOR': (a, b) => a !== b
// }


// function logicalCalc(array, op){
//     console.log(op);
//   return array.reduce((operators[op]));
// }


// console.log(logicalCalc([true, true, true, false], "AND"), false);
// console.log(logicalCalc([true, true, true, false], "OR"), true);
// console.log(logicalCalc([true, true, true, false], "XOR"), true);
// console.log(logicalCalc([true, true, false, false], "AND"), false);
// console.log(logicalCalc([true, true, false, false], "OR"), true);
// console.log(logicalCalc([true, true, false, false], "XOR"), false);
// console.log(logicalCalc([true, false, false, false], "AND"), false);
// console.log(logicalCalc([true, false, false, false], "OR"), true);
// console.log(logicalCalc([true, false, false, false], "XOR"), true);
// console.log(logicalCalc([true, true], "AND"), true);
// console.log(logicalCalc([true, true], "OR"), true);
// console.log(logicalCalc([true, true], "XOR"), false);
// console.log(logicalCalc([false, false], "AND"), false);
// console.log(logicalCalc([false, false], "OR"), false);
// console.log(logicalCalc([false, false], "XOR"), false);
// console.log(logicalCalc([false], "AND"), false);
// console.log(logicalCalc([false], "OR"), false);
// console.log(logicalCalc([false], "XOR"), false);
// console.log(logicalCalc([true], "AND"), true);
// console.log(logicalCalc([true], "OR"), true);
// console.log(logicalCalc([true], "XOR"), true);




//
// function generateRange(min, max, step){
//    let output = [];
//    for (let i = min; i <= max; i+= step) {
//        output.push(i)   
//    }
//    return output;
// } 


// console.log(generateRange(2, 10, 2), [2,4,6,8,10]);
// console.log(generateRange(1, 10, 3),[1,4,7,10])



// // 
// function opposite(number) {
//     return -number
//   }

// console.log(opposite(1), -1,)



// 

// function oddCount(n){
//  /* let output = [];
//      for (let i = 1; i < n; i+=2) {
//               const  num  =  i;
//                 output.push(num)
//      }
//     return output.length;*/
//     return Math.floor(n/2);
// }


// // [1, 3, 5, 7, 9, 11, 13]
// console.log(oddCount(15), 7, "Oops! Wrong.");
// console.log(oddCount(15023), 7511, "Oops! Wrong.");




// 

// function repeatStr (n, s) {
//     return s.repeat(n);
//   }


// console.log(repeatStr(3, "*"), "***");
// console.log(repeatStr(5, "#"), "#####");
// console.log(repeatStr(2, "ha "), "ha ha ");



// 

// function spEng(sentence){
//   return sentence.toUpperCase().includes('ENGLISH');
// }

// console.log(spEng("english"), true);
// console.log(spEng("egnlish"), false);
  



// 

// function positiveSum(arr) {
//    return arr.filter((num) => {
//        return num > 0
//    }).reduce((sum, n) => {
//        return sum+=n
// }, 0)
// }


// console.log(positiveSum([1,2,3,4,5]),15);
// console.log(positiveSum([1,-2,3,4,5]),13);
// console.log(positiveSum([]),0);
// console.log(positiveSum([-1,-2,-3,-4,-5]),0);
// console.log(positiveSum([-1,2,3,4,-5]),9);



// 
// n < 5 => '0'
//  n > 5 => '1'

// function fakeBin(x){
//  let a = x.split('');
//  return a .map((n) => {
//      if(n < 5) {
//          return '0' 
//      }else {
//          return '1'
//      }
//  }).join('') 
// }



// console.log(fakeBin('45385593107843568'), '01011110001100111');
// console.log(fakeBin('509321967506747'), '101000111101101'); 
// console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011'); 



// 
function isVow(a){
 return a.map((n) => {
     if(n == 97) {
         return 'a'
     }else if (n == 101) {
         return 'e'
     }else if (n == 105) {
         return 'i'
     }else if (n == '111'){
         return 'o'
     }else if(n == '117') {
         return 'u'
     }else {
         return n
     }
 })
}


console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);
