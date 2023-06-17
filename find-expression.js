//use back tracking strategi
const add4 = '+4';
const mul2 = '*2';

function find(nbr, result, expr) {
    if (result == nbr)
        return expr.join(" ");
    if (result + 4 <= nbr) {
        expr.push(add4);
        return find(nbr, result + 4, expr);
    }
    if (result * 2 <= nbr) {
        expr.push(mul2)
        return find(nbr, result * 2, expr);
    }
    while (expr[expr.length - 1] == mul2) {
        expr.pop();
        result /= 2;
    }
    if (result == 1)
        return undefined;
    expr.pop();
    expr.push(mul2)
    return find(nbr, (result - 4) * 2, expr);
}

function findExpression(nbr) {
    let expr = ["1"];
    let result = 1;

    if (nbr <= 0)
        return undefined;
    return find(nbr, result, expr);
}


console.log(findExpression(68));