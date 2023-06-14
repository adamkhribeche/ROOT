let arr = [0, 3, 4, 6, 6, 6];

function slice(input, start, end = input.length) {
    let output = [];
    let len = input.length;

    start = start >= 0 ? start : len + start;
    end = end >= 0 ? end : len + end;
    end = end > len ? len : end;
    for (let i = 0; start < end; i++)
        output[i] = input[start++];
    return output;
}

console.log(arr);
console.log(slice(arr, 2, 1));
console.log(arr.slice(2, 1));
// console.log(arr);
