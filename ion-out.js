let str = "adationa adam naji rhrition tionnna naji iontion"
let str2 = 'adam'

function ionOut(str) {
    let arr = str.match(/\w*tion\w*/gi);

    if (arr === null) return [];
    return arr.join(" ")
    .replaceAll(/tion/g, p => 't')
    .split(' ');
}

function ionOut2(str) {
    let arr = str.match(/\w*tion\w*/gi);

    if (arr === null) return [];
    return str.match(/\w*tion\w*/gi)
    .join(" ")
    .replaceAll(/(t)(ion)/g, "$1")
    .split(' ');
}
console.log(ionOut(str));
console.log(ionOut2(str));