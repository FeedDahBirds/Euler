// The sum of the primes below 10 is 17
// Find the sum of all the primes below two million.

function getPrimes(max) {
    let sieve = [];
    for(let i = 1; i < max; i++){
        if(i != 1 && ((i == 2 || i == 3 || i == 5 ) || (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0))){
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
    return sieve;
}

let primes = getPrimes(2000000);
console.log("Total Number of primes: ", primes.length);
let sum = primes.reduce((acc, val) => {
    return acc + val;
}, 0);

console.log("Sum of primes: ", sum);