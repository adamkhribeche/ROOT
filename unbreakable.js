let str = "ad,am n,aji khr,ibec,he";
let arr = [1, 2, 'a', 4, 5, 6];

function join(arr, sepr = ',') {
    let output = arr[0];
    let len = arr.length;

    for (let i = 1; i < len; i++) {
        output += sepr + arr[i];
    }
    return output;
}

function split(str, sepr, limit = str.length) {
    let output = [];
    let i = 0;
    let start = 0;
    let end = str.indexOf(sepr);

    if (sepr == '')
        return [...str.slice(0, limit)];
    while (end !== -1 && i < limit) {
        output[i++] = str.slice(start, end);
        start = end + 1;
        end = str.indexOf(sepr, start);
    }
    if (i < limit)
        output[i] = str.slice(start);
    return output;
}
// console.log(str.split("", 3));
console.log(str.split(','));
// console.log(str.slice(0, 0));
// console.log(str.indexOf('', 3));
console.log(split(str, ','));