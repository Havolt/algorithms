// Compare two arrays and return a new array with any items only found 
//in one of the two given arrays, but not both. In other words, return the 
//symmetric difference of the two arrays.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. 
//Write your own code.

// Note
// You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
    // Same, same; but different.
    let myArr = arr1.concat(arr2);
    for(let i = 0; i < myArr.length; i++){
        for(let j = i+1; j < myArr.length; j++) {
        if(myArr[j] == myArr[i]) {
            myArr.splice(j, 1);
          myArr.splice(i, 1);
          i--;
          break;
        }
      }
    }
    return myArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);