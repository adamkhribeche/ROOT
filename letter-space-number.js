function letterSpaceNumber(str) {
    return str.match(/[a-z] [0-9](?!(\d|[a-z]))/gi)
}

console.log(letterSpaceNumber('example 1, example 20'));
// output: ['e 1']