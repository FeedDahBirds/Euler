/**
 * The sum of the squares of the first ten natural numbers is,
    The square of the sum of the first ten natural numbers is,
    Hence the difference between the sum of the squares of the 
    first ten natural numbers and the square of the sum is 
    Find the difference between the sum of the squares of 
    the first one hundred natural numbers and the square of the sum.
    Jun 27th 2022 - 12:46 AM
 */
console.log(((max) => {
    let squaredSum = 0;
    for(let i = 0; i <= max; i++) {
        squaredSum += i*i;
    }
    let sum = (max * (max + 1)) / 2;
    return (sum * sum) - squaredSum;
})(100));