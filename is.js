// let is = {};

is.num = (a) => typeof a == "number";
is.nan = (a) => typeof a == "NaN";
is.str = (a) => typeof a == "string";
is.bool = (a) => typeof a == "boolean";
is.undef = (a) => typeof a == "undefined";
is.def = (a) => typeof a !== "undefined";
is.arr = (a) => Array.isArray(a);
is.obj = (a) => typeof a == "object";
is.fun = (a) => typeof a == "function";
is.truthy = (a) => !!a;
is.falsy = (a) => !a;


// console.log(is.truthy(null));