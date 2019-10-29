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





 