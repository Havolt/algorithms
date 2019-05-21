const arr = [1, 4, 2, 1, 4, 1, 4];

function maxSpan(ar) {

    let maxDistance = 0;
  
    ar.map((el,ind) => {
        for(let i = arr.length-1; i > ind; i--) {
            if(i-ind+1 < maxDistance) {
                return;
            }
            if(el == arr[i]) {
                if(i-ind+1 > maxDistance) {
                    maxDistance = i-ind+1;
                }
            }
        }
    })
    return maxDistance;
}

console.log(maxSpan(arr));
