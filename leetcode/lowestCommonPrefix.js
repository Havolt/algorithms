// Write a function to find the longest common prefix string amongst an
// array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z
        
var longestCommonPrefix = function(strs) {

    let prefix = [];

    if(strs.length < 1) {
        return "";
    }
    if(strs.length < 2) {
        return strs[0];
    }

    for(let i = 0; i < strs[0].length; i++) {
        if(strs[0].charAt(i) == strs[1].charAt(i)) {
            prefix.push(strs[0].charAt(i));
        } else {
            break;
        }
    }

    function checkPrefix(pref) {
        for(let i = 2; i < strs.length; i++) {
            for(let j = 0; j < prefix.length; j++) {
                if(strs[i][j] == pref[j]) {
                    continue;
                } else {
                    pref.pop();
                    return checkPrefix(pref);
                }
            }
        }
        if(prefix.length < 1) {
            return "";
        }
        return prefix.join('');
    }
    
    return checkPrefix(prefix);
};

console.log(longestCommonPrefix(["dog"]));
 