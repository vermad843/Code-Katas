// 

// function removeSmallest(numbers) {
//   if(numbers.length === 0) return [];
//   let smallestIndex = 0;
//   for (let i = 1; i < numbers.length; i++) {
//     const smallestValue = numbers[smallestIndex];
//     const currentValue = numbers[i];
//     if(currentValue < smallestValue) {
//         smallestIndex = i;
//     }
//   }
//    const newNumbers = numbers.slice();
//    newNumbers.splice(smallestIndex, 1)
//   return newNumbers;  
// }


// console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
// console.log(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
// console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
// console.log(removeSmallest([]), [], "Wrong result for []");




// 

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
 
function titleCase(title, minorWords = '') {
   if(title.trim() === '') return '';

const checkMinorWords = minorWords
   .toLowerCase()
   .split(' ')
   .reduce((words, word) => {
       words[word] = true;
        return words;
   }, {});
   
return  title
   .toLowerCase()
   .split(' ')
   .map((word, i) => {
       if(i === 0 )return capitalize(word);
       if(checkMinorWords[word]) return word
       return capitalize(word);
   }).join(' ');

}


console.log(titleCase(''), '')
console.log(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
console.log(titleCase('the quick brown fox'), 'The Quick Brown Fox')