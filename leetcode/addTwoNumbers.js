// Given a string, find the length of the longest substring without 
// repeating characters.
        
var lengthOfLongestSubstring = function(s) {

    s = s.split('');
    let currChars = [];
    let currSub = [];

    function compareCurrListToString(pos, curr, str, sub) {
        curr = [];
        curr.push(str[pos]);
        for(let j = pos+1; j < str.length; j++) {
            let charDiff = true;
            for(let k = 0; k < curr.length; k++) {
                if(str[j] == curr[k]) {
                    charDiff = false;
                    break;
                }
            }
            if(charDiff) {
                curr.push(str[j]);
            } else {
                break;
            }
        }
        if(curr.length > sub.length) {
            sub.splice(0);
            sub.push(...curr);
        }
    }

    for(let i = 0; i < s.length; i++) {
        if(s.length - i < currSub) {
            break;
        }
        compareCurrListToString(i, currChars, s, currSub);
    }

    return currSub.length;
};


    console.log(lengthOfLongestSubstring("pwwkew"));
    
