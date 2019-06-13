// Given a positive integer num, return the sum of all odd Fibonacci
//  numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every 
// additional number in the sequence is the sum of the two previous
//  numbers. The first six numbers of the Fibonacci sequence are 
//  1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci
//  numbers less than or equal to 10 are 1, 1, 3, and 5.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program.
//  Write your own code.
    
    function sumFibs(num) {
        const fibSeq = [1];
        let oddGreater = false;
        let oddSum = 0;

        while(!oddGreater) {
            if(fibSeq.length > 1 && fibSeq[fibSeq.length-1]+fibSeq[fibSeq.length-2] <= num) {
                fibSeq.push(fibSeq[fibSeq.length-1]+fibSeq[fibSeq.length-2]);
            } else if(fibSeq.length == 1) {
                fibSeq.push(1);
            } else {
                for(let i = 0; i < fibSeq.length; i++) {
                    if(fibSeq[i] % 2 != 0) {
                        oddSum += fibSeq[i];
                    }
                }
                oddGreater = true;
            }
        }

        return oddSum;
        }

        sumFibs(1000);
    
    