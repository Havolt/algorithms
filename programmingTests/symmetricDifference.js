// Create a function that takes two or more arrays and returns an array of 
// the symmetric difference (△ or ⊕) of the provided arrays.

// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), 
// the mathematical term "symmetric difference" of two sets is the set of
//  elements which are in either of the two sets, but not 
//  in both (A △ B = C = {1, 4}). For every additional symmetric difference 
//  you take (say on a set D = {2, 3}), you should get the set with elements 
//  which are in either of the two the sets but not 
//  both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). 
//  The resulting array must contain only unique values (no duplicates).

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. 
// Write your own code.
    
function sym(args) {

    const allArr = [...arguments];
    const diffArr = [];

    function checkRepeatInSameArr(arr) {
        arr.map( subArr => {
            for(let i = 0; i < subArr.length; i++) {
                for(let j = i+1; j < subArr.length; j++) {
                    if(subArr[i] == subArr[j]) {
                        subArr.splice(j, 1);
                        j--;
                    }
                }   
            }
        })
    }

    function compareAndFindDiff(arr1, arr2) {
        console.log(arr1, arr2)
        for(let i = 0; i < arr1.length; i++) {
            for(let j = 0; j < arr2.length; j++) {
                if(arr1[i] == arr2[j]) {
                    arr1.splice(i, 1);
                    arr2.splice(j, 1);
                    i--;
                    j--;
                }
            }
        }
        console.log(arr1, arr2);
        setDiffArr([...arr1, ...arr2]);
    }

    function setDiffArr(arr) {
        diffArr.splice(0, diffArr.length);
        arr.map(el => {
            diffArr.push(el);
        })
        console.log(diffArr);
    }

    checkRepeatInSameArr(allArr)
    for(let i = 0; i < allArr.length-1; i++) {
        if(i != 0) {
            compareAndFindDiff(diffArr, allArr[i+1]);
        } else {
            compareAndFindDiff(allArr[i], allArr[i+1]);
        }
    }


    return args;
}

sym([1, 1, 2], [1, 3, 5, 7], [7, 8]);
    
    
  