let arr = [0, 3, 4, 6, 6, 6];

function indexOf(arr, value, start = 0) {
    let len = arr.length;
    let i = start >= 0 ? start : len + start;
    
    while (i < len) {
        if (arr[i] === value)
            return i;
        i++;
    }
    return -1;
}

function lastIndexOf(arr, value, start = 0) {
    let end = start >= 0 ? start : len + start;
    let i = arr.length;

    while (--i >= end) {
        if (arr[i] === value)
            return i;
    }
    return -1;
}

function includes(arr, value) {
    return indexOf(arr, value) == -1 ? false : true;
}
// console.log(lastIndexOf(arr, 6));
// console.log(arr.lastIndexOf(6));
// console.log(indexOf(arr, 6));
// console.log(arr.indexOf(6));
// console.log(includes(arr, 7));
// console.log(arr.includes(7));