// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English
//  word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program.
//  Write your own code.
    
function translatePigLatin(str) {
    //Split String
    str = str.split('');
    //Array with vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    //If str starts with vowel add 'way' to end
    function vowelStart() {
        return str.join('') + 'way';
    }
    //If string starts with constonant (cluster) put it at end and ad 'ay'
    function constStart(letters){
        str.push(...str.splice(0, letters), 'a', 'y');
        return str = str.join('');
    }
    //Loops over vowels to check if first letter is vowel
    for(let i = 0; i < vowels.length; i++) {
        if(vowels[i] == str[0]) {
            return vowelStart();
        }else if(i == vowels.length-1) {
            //If loop reaches end without matching a vowel it searches for how many constonants are present at beginning
            for(let j = 1; j < str.length; j++) {
                for(let k = 0; k < vowels.length; k++) {
                    if(str[j] == vowels[k]) {
                        return constStart(j);
                    }
                }
            }
            return constStart(1)
        }
    }
}

translatePigLatin("clonsonant");
