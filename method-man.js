function words(str) {
    return str.split(" ");
}

function sentence(strArr) {
    return strArr.join(" ");
}

function yell(str) {
    return str.toUpperCase();
}

function whisper(str) {
    return "*" + str.toLowerCase() + "*";
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// console.log(capitalize("aDAm najI"));
