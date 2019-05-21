const W = 'Code';

function explodeString(word) {
	const wordArr = [];
  word.split('').map((el,ind) => {
  	for(let i = 0; i <= ind; i++) {
    	wordArr.push(word[i]);
    }
 	})
  return wordArr.join('');
}
console.log(explodeString(W));