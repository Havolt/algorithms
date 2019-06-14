// Create a function that sums two arguments together. If only one argument is
//  provided, then return a function that expects one argument and returns
//   the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should 
// return a function.

// Calling this returned function with a single argument will then return 
// the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. 
// Write your own code.

function addTogether(a,b) {
  //Function checks if passed value is number
  function checkNum(num) {
    return typeof num == 'number' ? true : false;
  }
  //Function checks two values are numbers and adds them if they are/returns undefined if not
  function checkBothNum(numA, numB) {
    if(checkNum(numA) && checkNum(numB)) {
      return numA + numB;
    }else {
      return undefined;
    }
  }
  //Checks if one or two values passed and solves problem accordinly
  if(!b) {
    if(checkNum(a)) {
      return (c) => {
        console.log(checkNum(c))
        return checkBothNum(a, c);
      }
    } else {
      return undefined;
    }
  }else {
    return checkBothNum(a, b)
  } 

}

addTogether(2)(3);
   