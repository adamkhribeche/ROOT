let str = "najiadamkhribeche"

function cutFirst(str) {
    return str.slice(2);
}

function cutLast(str) {
    return str.slice(0, -2);
}

function cutFirstLast(str) {
    return str.slice(2, -2);
}

function keepFirst(str) {
    return str.slice(0,2);
}

function keepLast(str) {
    return str.slice(-2);
}

function keepFirstLast(str) {
    return keepFirst(str) + keepLast(str);
}

console.log(str);
console.log(cutFirst(str));
console.log(cutLast(str));
console.log(cutFirstLast(str));
console.log(keepFirst(str));
console.log(keepLast(str));
console.log(keepFirstLast(str));