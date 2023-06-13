let arr = [0, 3, 4, 6, 6, 6];

function slice(input, start, end = input.length) {
    let output = [];

    start = start >= 0 ? start : input.length + start;
    end = end >= 0 ? end : input.length + end;
    if (end <= start)
        return [];
    for (let i = 0; start < end; i++)
        output[i] = input[start++];
    return output;
}

console.log(arr);
console.log(slice(arr, 3));
console.log(arr.slice(3));
console.log(arr);
