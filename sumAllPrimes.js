// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only 
// two divisors, one and itself. For example, 2 is a prime number because it's 
// only divisible by one and two.

// The provided number may not be a prime.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. 
// Write your own code.

    
function sumPrimes(num) {
    let addPrimes = 2;
    
    //loop through numbers between 3 and num
    for(let i = 3; i <= num; i++) {
        //loops through numbers between 2 and num-1
        for(let j = 2; j < i; j++) {
            //Adds number to addPrimes if a prime
            if(j == i-1) {
                if(i % j != 0) {
                    addPrimes += i;
                    break;
                }
            } else if(i == j) {
                continue;
            } else if(i % j == 0) {
                break;
            }
        }
    }
    return addPrimes;
}

sumPrimes(10);
    
