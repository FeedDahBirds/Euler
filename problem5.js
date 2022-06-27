/**
 * 2520 is the smallest number that can be divided 
 * by each of the numbers from 1 to 10 without any remainder.
   What is the smallest positive number that is evenly 
   divisible by all of the numbers from 1 to 20?
    Jun 27th 2022 - 12:36 AM
 */

    console.log(((max) => {
        const reset = max;
        let num = 2520;
        while(max > 0) { 
            if(num % max === 0) {
                max--;
                continue;
            } else {
                num++;
                max = reset;
            }
        }
        return num;
    })(20));