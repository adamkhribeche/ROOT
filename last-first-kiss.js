function first(arr_or_str) {
    return arr_or_str[0];
}

function last(arr_or_str) {
    return arr_or_str[arr_or_str.length - 1];
}

function kiss(arr_or_str) {
    return [last(arr_or_str), first(arr_or_str)];
}

// console.log(kiss([1, 2, 3, 4]));