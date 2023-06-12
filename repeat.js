function repeat(str, nbr) {
    if (nbr == 0)
        return "";
    else
        return str + repeat(str, nbr - 1);
}

console.log(repeat("adam", 2));