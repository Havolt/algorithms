// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. 
// Write your own code.



function convertToRoman(num) {

    num = num.toString().split('').reverse();
    let romanString = "";
    let tenPos = num.length-1;
    //Roman numerals organized into arrays based on tens, hundred, thousands
    const romanVal = [
        ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
      ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
      ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
      ["M", "MM", "MMM"]
    ];
    //for loop goes through to num length and assigns correct later based on romanVal arr
    for(let i = num.length-1; i >= 0; i--) {
        if(num[i] != "0" ) {
          romanString += romanVal[tenPos][parseInt(num[i]-1)]
      }
      tenPos--;
    }
    
     return romanString;
}
    
convertToRoman(52);