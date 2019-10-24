//weirdCase is our Accumulator Here:


function toWeirdCase(string, isUpperCase = true){
 return string.split('').reduce((weirdCase, letter) => {
     if(letter !== ' ') {
         if(isUpperCase) {
             weirdCase+= letter.toUpperCase();
         }else {
             weirdCase+= letter.toLowerCase();
         }
         isUpperCase = !isUpperCase;
      
     }else {
       weirdCase+= ' ';
       isUpperCase =true;
     }
      return weirdCase;
 }, '');


}



console.log(toWeirdCase('This'), 'ThIs');
console.log(toWeirdCase('is'), 'Is');
console.log(toWeirdCase('This is a test'), 'ThIs Is A TeSt');