function wordsToMarks(string) {
    return string.split('').reduce((sum, alphabet) => {
      return sum + alphabet.charCodeAt() - 96;
    }, 0);
  }

//split('') : looking at each alphabet(a,b,c)
//  charCodeAt() =charCodeAt(0) = 97, charCodeAt(1) = 98;
// so a = 97-96 =1, b = 98-96 = 2;and so on  


console.log(wordsToMarks("attitude"), 100);
console.log(wordsToMarks("friends"), 75);
console.log(wordsToMarks("family"), 66);
console.log(wordsToMarks("selfness"), 99);
console.log(wordsToMarks("knowledge"), 96);
