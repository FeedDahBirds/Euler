
let max = 1000;

let a = 0;
let b = 0;
let c = 0;

for(;a < max; a++) {
    for(; b < max; b++) {
        let temp_c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
        if(a + b + temp_c == max && a < b && b < temp_c) {
            c = temp_c;
            break;
        }
    }
    if(c) break;
    b = a + 1;
}
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
console.log("a^2 + b^2 = c^2 :",Math.pow(a,2) + Math.pow(b,2), '=', Math.pow(c,2));
console.log("SUM: (a + b + c):", a + b +c)
console.log("Product (abc): ", a * b * c);