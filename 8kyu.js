function squareArea(A){//A is a length of a arc 
//    circumference  of  a circle = 2 PI r 
//    A = 2 PI r/4 (because we are talking about 1/4 part of a circle)
//      2 PI r  = A * 4 //look at this  carefully 
	const circumference = A * 4 ;
	const radius = circumference/(2 * Math.PI);
	const areaOfSquare = radius**2;  
	return Math.floor(areaOfSquare*100)/100
}





console.log(squareArea(2), 1.62);
console.log(squareArea(0), 0);
console.log(squareArea(14.05), 80);
