let str = "najiadam";

// function triangle(str, nbr) {
//     let arr = [...str];
//     let charInTriangle = ((1 + nbr) * nbr / 2);
//     let len = arr.length;
//     let pos = 0;

//     if (nbr <= 0)
//         return "";
//     while (charInTriangle > len)
//         len = arr.push(...str);
//     for (let i = 0; pos < charInTriangle; pos += i) {
//         arr.splice(++pos , 0, '\n');
//         pos++;
//         i++;
//     }
//     return arr.slice(0, charInTriangle + nbr - 1).join("");
// }

function triangle(str, nbr) {
    let arr = [];
    let charInTriangle = ((1 + nbr) * nbr / 2);
    let start = 0;
    let end = 1;

    while (charInTriangle > str.length)
        str = str + str;
    for (let hight = 1; hight <= nbr; hight++) {
        arr.push(str.slice(start, end));
        start = end;
        end += hight + 1;
    }
    return arr.join("\n");
}


console.log(triangle(str, 10));