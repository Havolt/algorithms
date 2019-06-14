// 



function smallestCommons(arr) {
    //Sort arr from small to largest
    arr.sort((a, b)=> a - b);

    const numsBetween = [];
    let multiple = arr[1];
    //Push all numbers between into numsBetween array
    for(let i = arr[0]; i <= arr[1]; i++) {
        numsBetween.push(i)
    }
    //Check that multiple is divisible by all nums and if not reset arr and add to multiple
    for(let i = numsBetween.length-1; i >= 0; i--) {
        if(multiple % numsBetween[i] != 0) {
            i = numsBetween.length-1;
            multiple += numsBetween[numsBetween.length-1];
        } else if(i == 0) {
            return multiple;
        }
    } 
}


smallestCommons([23, 18]);
    
