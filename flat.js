let arr = [1, [2, [3], [4]], [3, [8, [90, 99]], 5], 9];

function flat(arr, depth = 1) {
    let output = [...arr];
    let deleted;

    while (depth-- > 0) {
        for (let i = 0; i < output.length; i++) {
            if (Array.isArray(output[i])) {
                deleted = output[i];
                output.splice(i, 1, ...output[i]);
                i += deleted.length - 1;
            }
        }
    }
    return output;
}


// console.log(arr[1]);
// console.log(...arr.splice(1, 1, 3));
// console.log(...arr[2]);
console.log(arr.flat(2));
console.log(flat(arr, 2));
// // console.log(arr);