// function count (string) {  
//     const counts = {};

//     for (let i = 0; i < string.length; i++) {
//         const letter = string[i];
//         console.log(letter);

//        //if the current letter is not a property in the object 
//        //set it 0 
//        //if current letter is there keep it the same
//       counts[letter] = counts[letter] || 0;
//       counts[letter]++;

   
//     }
//      return counts;
//   }


  function count (string) {  
    const counts = {};

    for (let i = 0; i < string.length; i++) {
        const letter = string[i];
        console.log(letter);
                           
   if(counts.hasOwnProperty(letter)) {
     counts[letter]++;
   }else {
     counts[letter] = 1;
   }
    }
     return counts;
  }





console.log(count("aba"), { a: 2, b: 1 }); 
console.log(count(""), {});  