let str = "  255.24.54.2:55536 61111 60000 65535 654 45.5.66.8:1002 ";

function findIP(str) {
    let ip = new RegExp(/\b(2[0-5][0-5]|1\d\d|[1-9]\d|\d)\b(\.\b(2[0-5]\d|1\d\d|[1-9]\d|\d)\b){3}/);//on peut factoriser par \d
    let port = new RegExp(/(:\b(6[0-5][0-5][0-3][0-5]|[1-5]\d{4}|[1-9]\d{1,3}|\d)\b)?/);
    let ipPort = new RegExp(ip.source + port.source, 'g');

    // return str.match(/2(?=4)/g);
    return str.match(ipPort);
}

console.log(findIP(str));