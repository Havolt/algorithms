
// The DNA strand is missing the pairing element. Take each character, get its
//  pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the 
// provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays 
// are grouped into one encapsulating array.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. 
// Write your own code.


function pairElement(str) {
    const basePairs = {"C":"G", "G":"C", "A":"T","T":"A"}
    const arr = [];
  
    str = str.split("");
    str.map(el => {
      let newArr = [el];
      newArr.push(basePairs[el]);
      arr.push(newArr);
    })
  
    return arr;
  }
  
  pairElement("GCG");