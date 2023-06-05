function isPositive(nbr) {
    return nbr > 0;
}

function abs(nbr) {
    return isPositive(nbr) || nbr === 0 ? nbr : -nbr;
}

console.log(abs(6));

