let arr = [1, 2, 3, 4, 5, 6];
let str = "adamnaji";

function reverseStr(input) {
    let len = input.length;
    let output = "";
    
    for (let i = len - 1; i >= 0; i--)
        output += input[i];
    return output;
}

function reverse(input) {
    let len = input.length;
    let halfLen = len / 2;

    if (typeof input === 'string')
        return reverseStr(input);
    for (let i = 0; i < halfLen; i++)
        [input[i], input[len - i - 1]] = [input[len - i - 1], input[i]];
    return input;
}

// console.log(str);
// console.log(reverse(str));
// console.log(str);
// console.log(arr);
// console.log(reverse(arr));
// console.log(arr);