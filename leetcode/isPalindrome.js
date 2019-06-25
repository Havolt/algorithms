// Determine whether an integer is a palindrome. An integer is a palindrome 
// when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, 
// it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
        
var isPalindrome = function(x) {

    if(x < 0) { return false;}
    let y = [];
    x = x.toString().split('');
    for(let i = x.length-1; i >= 0; i--) {
        y.push(x[i]);
    };

    return parseInt(x.join('')) - parseInt(y.join('')) == 0 ? true : false;

};

console.log(isPalindrome(3004003));
