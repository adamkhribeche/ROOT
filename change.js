const sourceObject = {
    num: 42,
    bool: true,
    str: 'some text',
    log: console.log,
}

function get(key) {
    return sourceObject[key];
}

function set(key, value) {
    return (sourceObject[key] = value);
}

// set("str", "adam");
// console.log(get("str"));