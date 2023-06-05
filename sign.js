function sign(nbr) {
    if (nbr > 0) {
        return 1;
    } else if (nbr === 0) {
        return 0;
    } else return -1;
}

function sameSign(a, b) {
    return sign(a) === sign(b);
}

console.log(sameSign(0, 0));
