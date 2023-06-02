const escapStr = `a/\\"'da\`m`;
const arr = [4, '2'];
const obj = {
    str: "String",
    num: 42,
    bool: true,
    undef: undefined,
};
const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: "adam",
        num: 13,
        bool: false,
    },
};
Object.freeze(arr);
Object.freeze(obj);
Object.freeze(nested);
Object.freeze(nested.arr);
Object.freeze(nested.obj);

// arr[2] = 24;
// // obj.x = 3;
// // nested.obj.x = 5;

// console.log(arr);