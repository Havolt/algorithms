//String
const S = "abppplee";
//Dictionary
const D = ["able", "ale", "apple", "bale", "kangaroo"];

//Function for finding word
function findLongestWord(string, arr) {

	const matchedWords = [];
  
  //Loop through words
  arr.map(word => {
    let charLoc = 0;
    let counter = 0;
    //Loop through string
    string.split('').map(char => {
    	//Loop through word characters
      for(let i = charLoc; i < word.length; i++) {
        if(word[i] == char) {
        	charLoc = i;
          counter++;
          if(counter == word.length) {
          	matchedWords.push(word);
          }
        	break;
        }
      }
    })
  })
  
  let longestWord = '';
  
  matchedWords.map(el => {
  	if(el.length > longestWord.length) {
    	longestWord = el;
    }
  });
  
  return longestWord;
  
};


console.log(findLongestWord(S, D));





