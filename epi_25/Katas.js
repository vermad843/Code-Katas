// 
function reverseWords(str) {
let reversedStr = '';
let reversedWord = '';
 
for (let i = 0; i < str.length; i++) {
    const char = str[i];
    console.log(char)
    console.log(reversedWord);
    if(char !== ' '){
        reversedWord = char + reversedWord;
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





// 
function isPangram(string){
 const allLetters = {};
 for (let i = 97; i <= 122; i++) {
     allLetters[String.fromCharCode(i)] = true;
 }
 for (let i = 0; i < string.length; i++) {
     const character = string[i].toLowerCase();
      delete allLetters[character];   
 }
 return Object.keys(allLetters).length === 0;
}


  var string = "The quick brown fox jumps over the lazy dog."
  console.log(isPangram(string), true)
  var string = "This is not a pangram."
  console.log(isPangram(string), false)
  


// 

var helloWorld = function () {
  const [,H] = [].shift.name.toUpperCase(); 
  const [e]  = [].every.name;
  const [,,l] =  [].filter.name;
  const [o] = Array.of.name;

  const [,a] = false.toString();
  const space = a.charCodeAt() - a.toUpperCase().charCodeAt();//97-65 = 32=> ' ' 

  const [,,,,W] = [].copyWithin.name;
  const [r] = [].reverse.name;
  const [,,,d] = [].find.name;

  const exclaim = space + [true].length  //33 => !
  return H + e + l + l + o + String.fromCharCode(space) + W + o + r + l + d + String.fromCharCode(exclaim)
}


console.log(helloWorld(), 'Hello World!')












  