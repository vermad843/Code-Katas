// function stringToArray(string){
//    return  string.split(' ');
// }



// console.log(stringToArray("Robin Singh"), ["Robin", "Singh"]);
// console.log(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);


// // split returns an array 



// 

// TODO: Refactor and shorten the function

function describeAge(age) {
	if (age <= 12) {
	  return "You're a(n) kid";
	} else if (age >= 13 && age <= 17) {
	  return "You're a(n) teenager";
	} else if (age >= 18 && age <= 64) {
	  return "You're a(n) adult";
	} else {
	  return "You're a(n) elderly";
	}
  }

  function describeAge(age) {
   const ternary=age<=12?'kid':age>=13&&age<=17?'teenager':age>=18&&age<=64?'adult':'elderly';
    return `You're a(n) ${ternary}`
  }

   


  
 console.log(describeAge(9), "You're a(n) kid");
 console.log(describeAge(10), "You're a(n) kid");
 console.log(describeAge(11), "You're a(n) kid");
 console.log(describeAge(12), "You're a(n) kid");
 console.log(describeAge(13), "You're a(n) teenager");
 console.log(describeAge(14), "You're a(n) teenager");
 console.log(describeAge(15), "You're a(n) teenager");
 console.log(describeAge(16), "You're a(n) teenager");
 console.log(describeAge(17), "You're a(n) teenager");
 console.log(describeAge(18), "You're a(n) adult");
 console.log(describeAge(19), "You're a(n) adult");
 console.log(describeAge(63), "You're a(n) adult");
 console.log(describeAge(64), "You're a(n) adult");
 console.log(describeAge(65), "You're a(n) elderly");
 console.log(describeAge(66), "You're a(n) elderly");
 console.log(describeAge(100), "You're a(n) elderly");