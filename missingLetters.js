

// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// Remember to use Read-Search-Ask if you get stuck. Try to pair 
// program. Write your own code.

function fearNotLetter(str) {
  const alph = 'abcdefghijklmnopqrstuvwxyz'.split('');
  str = str.split("");

  for(let i = 0; i < alph.length; i++) {
    if(str[0] == alph[i]) {
      return getMissing(i);
    }
  }
  
  function getMissing(alphNum) {
    for(let j = 0; j < str.length; j++) {
    	if(str[j] != alph[alphNum + j]) {
      	return alph[alphNum+j]
      }
    }
    return undefined;
  }
}

console.log(fearNotLetter("abcde"));