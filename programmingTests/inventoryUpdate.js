// Compare and update the inventory stored in a 2D array against a second
//  2D array of a fresh delivery. Update the current existing inventory item 
//  quantities (in arr1). If an item cannot be found, add the new item and 
//  quantity into the inventory array. The returned inventory array should 
//  be in alphabetical order by item.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program.
//  Write your own code.


function updateInventory(currInv, newInv) {
    // All inventory must be accounted for or you're fired!

    if(currInv.length < 1) {
        sortArrByAlph(newInv);
        return newInv;
    }
    
    for(let i = 0; i < newInv.length; i++) {
        for(let j = 0; j < currInv.length; j++) {
            if(newInv[i][1] == currInv[j][1]) {
                currInv[j][0] += newInv[i][0];
                newInv.splice(i, 1);
                i--;
                break;
            } else if(j == currInv.length-1) {
                console.log(newInv[i]);
                currInv.push(newInv[i]);
                newInv.splice(j, 1);
                break;
            }
        }
    }

    function sortArrByAlph(arr) {
       arr.sort((a, b) => {
           return checkGreaterLetter(a, b, 0)
       })
    }

    function checkGreaterLetter(a, b, ind) {
        if(a[1].charAt(ind) > b[1].charAt(ind)) {
               return 1
           } else if(a[1].charAt(ind) == b[1].charAt(ind)) {
                return checkGreaterLetter(a, b, ind+1);
           }
           else {
               return -1;
           }
    }

    sortArrByAlph(currInv);
    
    return currInv;
}

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])