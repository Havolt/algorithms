// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only
// store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
// For the purpose of this problem, assume that your function returns 0 when 
// the reversed integer overflows.
        
var reverse = function(x) {

    x = x.toString().split('');
    let y = [];
    
    for(let i = x.length-1; i >= 0; i--) {
        if(x[i] != '-') {
            y.push(x[i]);
        }
        else {
            y.unshift(x[i])
        } 
    }
    y = parseInt(y.join(''));
    if( y < -2147483648 || y > 2147483647) {
        return 0;
    }
    return y;
};

console.log(reverse(15369))
        