// Flatten a nested array. You must account for varying levels of nesting.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. 
// Write your own code.
    

    function steamrollArray(arr) {

        const flatArr = [];

        //Recursive function that checks if item is array and breaks it down if true
        function flatten(arr) {
           for(let i = 0; i < arr.length; i++) {
               if(arr[i].constructor != Array) {
                   flatArr.push(arr[i]);
               } else {
                   flatten(arr[i]);
               }
           }
        }
        flatten(arr);
        // I'm a steamroller, baby
        return arr;
    }

steamrollArray([1, [2], [3, [[4]]]]);
    
