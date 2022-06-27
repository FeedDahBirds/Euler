/**
 * 
 * A palindromic number reads the same both ways. 
 * The largest palindrome made from the product of two 2-digit 
 * numbers is 9009 = 91 × 99.
    Find the largest palindrome made from the product of 
    two 3-digit numbers.
    Jun 27th 2022 - 1:20 AM
 */
    console.log(((max, min) => {
        for(let i = max; i > min; i--) {
            for(let j = max; j > min; j--) {
                const product = i * j;
                const productArr = new String(product).split('');
                const firstHalf = productArr.slice(0, productArr.length/2);
                const secondHalf = productArr.slice(productArr.length/2, productArr.length).reverse();
                var success = true;
                for(let k = 0; k < firstHalf.length; k++) {
                    if(firstHalf[k] != secondHalf[k]) {
                        success = false;
                        break;
                    }
                }
                if(success) {
                    return product;
                }
            }
        }
    })(999,900));