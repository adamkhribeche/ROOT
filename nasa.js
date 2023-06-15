function nasa(nbr) {
    let str = "";

    for (let i = 1; i <= nbr; i++) {
        if (i % 3 == 0)
            str += ' ' + "NA";
        else if (i % 5 == 0)
            str += ' ' + "SA";
        else if (i % 3 == 0 && i % 5 == 0)
            str += ' ' + "NASA";
        else
            str += ' ' + i;
    }
    return str;
}

console.log(nasa(9));