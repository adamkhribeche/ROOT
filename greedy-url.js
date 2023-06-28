let dataSet = "qqq http:// qqqq q qqqqq https://something.com/hello/adam/cv qqqqqqq qhttp://example.com/hello?you=something&something=you&ad=56"

function getURL(dataSet) {
    let protocol = new RegExp(/(https?:\/\/)?/);
    let domain = new RegExp(/(www\.)?\w+\.\w{1,6}/);
    let port = new RegExp(/(:\d+)?/);
    let path = new RegExp(/(\/\w+)+(\.\w{1,6})?/);

    let url = new RegExp(protocol.source + domain.source + port.source 
        + path.source, "ig");

    return dataSet.match(url);
}

function greedyQuery(dataSet) {
    let protocol = new RegExp(/(https?:\/\/)?/,);
    let domain = new RegExp(/(www\.)?\w+\.\w{1,6}/);
    let port = new RegExp(/(:\d+)?/);
    let path = new RegExp(/(\/\w+)+(\.\w{1,6})?/);
    let parameters = new RegExp(/\?\w+=\w+(&\w+=\w+){2,}/);
    
    let url = new RegExp(protocol.source + domain.source + port.source 
        + path.source + parameters.source, "ig");

    return dataSet.match(url);
}
function notSoGreedy(dataSet) {
    let protocol = new RegExp(/(https?:\/\/)?/);
    let domain = new RegExp(/(www\.)?\w+\.\w{1,6}/);
    let port = new RegExp(/(:\d+)?/);
    let path = new RegExp(/(\/\w+)+(\.\w{1,6})?/);
    let parameters = new RegExp(/\?\w+=\w+(&\w+=\w+){1,2}/);

    let url = new RegExp(protocol.source + domain.source + port.source 
        + path.source + parameters.source, "ig");

    return dataSet.match(url);
}
console.log(greedyQuery(dataSet));