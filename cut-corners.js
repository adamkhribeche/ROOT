const nums = [30.7, -30.7, 30.1, -30.1];

function trunc(input) {
    let isPositif = input > 0 ? true : false;
    let nbr = isPositif ? input : -input;
    let count = 0;

    while (nbr >= 10) {
        nbr -= 10;
        count++;
    }
    if (nbr >= 1) {
        count *= 10;
        while (nbr >= 1) {
            count++;
            nbr -= 1;
        }
    }
    return isPositif ? count : -count;
}

function floor(input) {
    let output = trunc(input);

    return (output < 0) ? output - 1 : output;
}

function ceil(input) {
    let output = trunc(input);

    return (output < 0) ? output : output + 1;
}

function round(input) {
    let ceill = ceil(input);
    let floorr = floor(input);

    return ceill - input <= input - floorr ? ceill : floorr;
}


// console.log(round(-853462.6));
// console.log(Math.round(-853462.6));
// console.log(round(853462.6));
// console.log(Math.round(853462.6));
// console.log(123.4 / 10);
console.log(nums.map(round));
console.log(nums.map(floor));
console.log(nums.map(trunc));
console.log(nums.map(ceil));
console.log("#######");
console.log(nums.map(round));
console.log(nums.map(floor));
console.log(nums.map(trunc));
console.log(nums.map(ceil));