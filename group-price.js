let str = "MAD124.00 jghgj USD4.0";

function groupPrice(str) {
    let arr = [];
    let regx = /[A-Z]{3}(\d+)\.(\d+)/g;
    
    str.replace(regx, (str, $1, $2) => {
        arr.push([str, $1, $2]);
    });
    return arr;
}

console.log(groupPrice(str));