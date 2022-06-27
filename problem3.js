/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
   What is the largest prime factor of the number 600851475143 ?
    Jun 27th 2022 - 12:56 AM
 */
    const isPrime = (n) => {
        if(n%2 === 0 || n%3=== 0) return false;
        for(let i = 4; i * i < n; i++){
            if(n%i === 0) return false;
        }
        return true;
    }
    console.log(((num) => {
        const factors = [];
        for(let i = 2; i < (num / 2); i++) {
            if(num % i === 0){
                if(factors.indexOf(num/i) > 0 || factors.indexOf(i) > 0) {
                    break;
                }
                factors.push(i);
                factors.push(num / i);
            }

        }
        return factors.reverse().find((n) => isPrime(n));
    })(600851475143));