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


function warnTheSheep(queue) {
    const wolfAtIndex0 =  queue.reverse();
    const wolfPosition =  wolfAtIndex0.indexOf('wolf')
  return wolfPosition === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ wolfPosition}! You are about to be eaten by a wolf!`;
  }


console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]),
 "Oi! Sheep number 2! You are about to be eaten by a wolf!");
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 5! You are about to be eaten by a wolf!");
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!");
console.log(warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
console.log(warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep");