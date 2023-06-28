let vowels = /[aeiou]/ig;

// function vowelDots(str) {
//     let a = str.split("");

//     a.forEach(ele => {
//         if (vowels.test(ele))
//             a[a.indexOf(ele)] = ele + '.';
//     });
//     return a.join("");
// }

function vowelDots(str) {
    return str.replace(vowels, v => v + '.');
}
console.log(vowelDots("najiadamkhribeche"));