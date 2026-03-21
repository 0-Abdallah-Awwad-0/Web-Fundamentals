var sentence = "I love solving algorithms";
var words = sentence.split(" "); // Splits the sentence 

let longestWord = "";

for (let i = 0; i < words.length; i++) {
  // If the current word is longer than longestWord, update it
  if (words[i].length > longestWord.length) {
    longestWord = words[i];
  }
}

console.log(longestWord); 