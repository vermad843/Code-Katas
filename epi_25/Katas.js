// 
function reverseWords(str) {
let reversedStr = '';
let reversedWord = '';
 
for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if(char !== ' '){
       reversedWord = char + reversedWord;
       console.log(reversedWord); 
    }else {
        reversedStr +=reversedWord + ' ';
        reversedWord = ''; 
    }
  }
  return reversedStr + reversedWord;
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
console.log(reverseWords('apple'), 'elppa');
console.log(reverseWords('a b c d'), 'a b c d');
console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');