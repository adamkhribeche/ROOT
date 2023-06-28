function sameAmount(str, rex1, rex2) {
    rex1 = new RegExp(rex1,'g');
    rex2 = new RegExp(rex2,'g');

    let amount1 = str.match(rex1) === null ? 0 : str.match(rex1).length;
    let amount2 = str.match(rex2) === null ? 0 : str.match(rex2).length;
    return amount1 === amount2;
}

let str = "naji naji adam naji ada ad najj naji";

console.log(sameAmount(str, /adam/, /ad/));