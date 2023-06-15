const src = { nested: { key: 'peekaboo' } };
const path = 'nested.key';
// const path = 'nested';

function get(src, path) {
    let output = src;
    let splitedPath = path.split('.');
    let len = splitedPath.length;

    for (let i = 0; i < len; i++)
        output = output[splitedPath[i]];
    return output;
}

console.log(get(src, path)); // -> 'peekaboo'