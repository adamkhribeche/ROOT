let str = "najiadam";
let str1 = "*";

function triangle(str, nbr) {
    let arr = [];
    let chartInLastLine = 1 + (2 * (nbr - 1));//suite arithmetique Un = Ui + 2(n - i), U1 = 1
    let charInTriangle = ((1 + chartInLastLine) * nbr / 2);
    let start = 0;
    let end = 1;

    while (charInTriangle > str.length)
        str = str + str;
    for (let hight = 1; hight <= nbr; hight++) {
        arr.push(" ".repeat(nbr - hight) +
        str.slice(start, end) +
         " ".repeat(nbr - hight));
        start = end;
        end += 2 * hight + 1;
    }
    return arr.join("\n");
}

console.log(triangle(str1, 20));