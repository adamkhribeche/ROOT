const str = 'hello'
const arr = [1, 2, 1, 3]
const obj = { x: 45, y: 75, radius: 24 }
const set = new Set()
const map = new Map()
set.add(1)
set.add(2)
set.add(1)
set.add(3)
map.set('a', 1)
map.set('b', 2)
map.set(3, 'c')
map.set(4, 'd')

function arrToSet(arr) {
    return new Set(arr);
}

function arrToStr(arr) {
    return arr.join("");
}

function setToArr(set) {
    let arr = [];
    for (let ele of set) {
        arr.push(ele);
    }
    // return Array.from(set);
    return arr;
}

function setToStr(set) {
    let str = "";
    for (let ele of set) {
        str += ele;
    }
    return str;
}

function strToArr(str) {
    return [...str];
}

function strToSet(str) {
    return new Set(str);
}

function arrToObj(arr) {
    return { ...arr };
}

function strToObj(str) {
    return { ...str };
}

function mapToObj(map) {
    // let obj = {};
    // for (let [key, value] of map) {
    //     obj[key] = value;
    // }
    // return obj;
    return Object.fromEntries(map);
}

function objToArr(obj) {
    return Object.values(obj);
}

function objToMap(obj) {
    // let keys = Object.keys(obj);
    // let values = Object.values(obj);
    // let map = new Map();
    // let i = 0;
    // while (keys[i]) {
    //     map.set(keys[i], values[i]);
    //     i++;
    // }
    // return map;
    return new Map(Object.entries(obj));

}

console.log(map);
console.log(mapToObj(map));

// arrToSet(arr) // -> Set { 1, 2, 3 }
// arrToStr(arr) // -> '1213'
// setToArr(set) // -> [1, 2, 3]
// setToStr(set) // -> '123'
// strToArr(str) // -> ['h', 'e', 'l', 'l', 'o']
// strToSet(str) // -> Set { 'h', 'e', 'l', 'o' }
// mapToObj(map) // -> { a: 1, b: 2, '3': 'c', '4': 'd' }
// objToArr(obj) // -> [45, 75, 24]
// objToMap(obj) // -> Map { 'x' => 45, 'y' => 75, 'radius' => 24 }
// arrToObj(arr) // -> { '0': 1, '1': 2, '2': 1, '3': 3 }
// strToObj(str) // -> { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }

// superTypeOf(map) //         -> 'Map'
// superTypeOf(set) //         -> 'Set'
// superTypeOf(obj) //         -> 'Object'
// superTypeOf(str) //         -> 'String'
// superTypeOf(666) //         -> 'Number'
// superTypeOf(NaN) //         -> 'Number'
// superTypeOf(arr) //         -> 'Array'
// superTypeOf(null) //        -> 'null'
// superTypeOf(undefined) //   -> 'undefined'
// superTypeOf(superTypeOf) // -> 'Function'

function superTypeOf(data) {
    switch (typeof data) {
        case ("number"):
            return "number";
            break;
        case ("boolean"):
            return "boolean";
            break;
        case ("string"):
            return "string";
            break;
        case ("undefined"):
            return "undefined";
            break;
        case ("function"):
            return "Function";
            break;
        case ("object"): {
            if (Array.isArray(data))
                return "Array";
            else if (data === null)
                return "null";
            else if (data instanceof Map)
                return "Map";
            else if (data instanceof Set)
                return "Set";
            else (data)
            return "Object";
        }
        default:
            return "uknown";
    }
}

// function mapToObj(map) {
//     let obj = {};
//     // let iter = map.entries()
//     // for (let i = 0; i < 3; i++) {
//     //     // console.log("" + iter.next().value[0]);
//     //     let a = iter.next().value;
//     //     obj[a[0]] = a[1];
//     //     console.log(i);
//     // }
//     // map.forEach((value, key) => {
//     //     obj[key] = value;
//     // });
//     for (let [key, value] of map) {
//         obj[key] = value;
//     }
//     return obj;
// }