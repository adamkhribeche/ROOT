let str = "GCCcgCCCCCmmmmmmmCTTTTTTT"


function RNA(dnaStrand) {
    return dnaStrand
    .toUpperCase()
    .split('')
    .map(ele => "CGAU".charAt("GCTA".indexOf(ele)))
    .join("");
}

function DNA(rnaStrand) {
    return rnaStrand
    .toUpperCase()
    .split('')
    .map(ele => "GCTA".charAt("CGAU".indexOf(ele)))
    .join("");
}

console.log(str);
console.log(RNA(str));
// console.log(DNA(RNA(str)));