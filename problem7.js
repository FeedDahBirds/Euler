/**
 *  By listing the first six prime numbers:
 *  2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
    What is the 10 001st prime number?
    Jun 27th 2022 - 1:34 AM
 */
    console.log(((n) => {
        let sieve = [];
        for(let i = 1; i < 500000; i++){
            if((i == 2 || i == 3 ) || (i % 2 !== 0 && i % 3 !== 0)){
                sieve.push(i);
            }
        }
        for(let i = 1; i < sieve.length; i++) {
            const num = sieve[i];
            for(let j = i; j < sieve.length; j++) {
                const nextNum = sieve[j];
                if(num == 1) break;
                if(nextNum == num) continue;
                if(nextNum % num === 0){
                    sieve.splice(j,1);
                }
            }
        }
        return sieve[n];
    })(10001));