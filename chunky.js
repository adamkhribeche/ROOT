let arr = [1, 2, 'a', 4, 5, 6, 7];

// function chunk(arr, size) {
//     let output = [];
//     let len = arr.length;

//     if (size <= 0)
//         return output;
//     for (let i = 0; i < len / size; i++) {
//         output.push([]);
//         for (let j = 0; j < size && (j + i * size) < len; j++)
//             output[i][j] = arr[j + i * size];
//     }
//     return output;
// }
function chunk(arr, size) {
    let output = [];
    let len = arr.length;

    if (size <= 0)
        return output;
    for (let i = 0; i < len; i += size)
        output.push(arr.slice(i, i + size));
    return output;
}

// console.log(arr.slice(0, 11));
console.log(chunk(arr, 6));