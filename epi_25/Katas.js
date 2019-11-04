// // 
// function reverseWords(str) {
// let reversedStr = '';
// let reversedWord = '';
 
// for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     console.log(char)
//     console.log(reversedWord);
//     if(char !== ' '){
//         reversedWord = char + reversedWord;
//     }else {        
//         reversedStr +=reversedWord + ' ';
//         reversedWord = ''; 
//     }
//   }
//   return reversedStr + reversedWord;
// }

// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
// console.log(reverseWords('apple'), 'elppa');
// console.log(reverseWords('a b c d'), 'a b c d');
// console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');




// sentence which contains every letter from a to z ;

function isPangram(string) {
    const allLetters = {};
    for (let i = 97; i <=122; i++) {  //ASCII a = 97 ,z = 122
        allLetters[String.fromCharCode(i)] === true;
    }
    for (let i = 0; i < string.length; i++) {
        const character = string[i].toLowerCase();
        delete allLetters[character];
    }
    return Object.keys(allLetters).length === 0;
}

const input1 = 'The quick brown fox jumps over the lazy dog.';
console.log(isPangram(input1) === true);


const input2 = 'This is not a pangram.';
console.log(isPangram(input2) === false);