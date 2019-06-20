// There are 100 doors in a row that are all initially closed. You make 100 
// passes by the doors. The first time through, visit every door and 
// 'toggle' the door (if the door is closed, open it; if it is open, 
// close it). The second time, only visit every 2nd door (i.e., door 
// #2, #4, #6, ...) and toggle it. The third time, visit every 3rd 
// door (i.e., door #3, #6, #9, ...), etc., until you only visit the 
// 100th door.


// Implement a function to determine the state of the doors after the last pass. 
// Return the final result in an array, with only the door number included in 
// the array if it is open.
    
function getFinalOpenedDoors (numDoors) {
    
    const doorArr = [];

    for(let i = 0; i < numDoors; i++) {
        doorArr.push(-1);
    }

    function toggleDoor(arr, iterateAmt) {
        for(let i = iterateAmt-1; i < arr.length; i += iterateAmt) {
            arr[i] = -arr[i];
            console.log(i)
        }
        if(iterateAmt < doorArr.length) {
            return toggleDoor(arr, iterateAmt+1);
        }
        else {
            return checkDoors(arr);
        }
    }

    function checkDoors(arr) {
        const openDoors = [];
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] == 1) {
                openDoors.push(i+1);
            }
        }
        return openDoors;
    }
    return toggleDoor(doorArr, 1)

}

console.log(getFinalOpenedDoors(100));
