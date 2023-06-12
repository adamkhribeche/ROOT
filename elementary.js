function multiply(a, b) {
    if (a == 0 || b == 0)
        return 0;
    else {
        let res = 0;

        let i = (b >= 0) ? b : -b;
        while (i-- > 0)
            res += a;
        return b > 0 ? res : -res;
    }
}

function divide(a, b) {
    if (a == 0)
        return (b == 0) ? NaN : 0;
    else if (b == 0)
        return (a > 0) ? Infinity : -Infinity;
    else {
        let count = 0
        let isPositif = (a >= 0 && b >= 0)
            || (a <= 0 && b <= 0) ? true : false;

        a = (a >= 0) ? a : -a;
        b = (b >= 0) ? b : -b;
        while (multiply(b, count + 1) <= a)
            count++;
        return isPositif ? count : -count;
    }
}

function modulo(a, b) {
    return (b == 0) ? NaN : a - multiply(b, divide(a, b));
}
// console.log(multiply(7, -4), 7 * -4);

console.log(divide(7, -4), 7 / -4);
console.log(divide(-7, 4), -7 / 4);
console.log(divide(-7, -4), -7 / -4);
console.log(divide(7, 4), 7 / 4);

console.log(divide(4, -7), 4 / -7);
console.log(divide(-4, 7), -4 / 7);
console.log(divide(-4, -7), -4 / -7);
console.log(divide(4, 7), 4 / 7);

console.log(divide(0, -4), 0 / -4);
console.log(divide(-7, 0), -7 / 0);
console.log(divide(-0, -0), -0 / -0);
// console.log(modulo(7, 4), 7 % 4); 