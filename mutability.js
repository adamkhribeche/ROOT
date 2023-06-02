// const person = {
//     name: 'Rick',
//     age: 77,
//     country: 'US',
// };

let clone1 = {};
let clone2 = {};
let samePerson = Object.create(person);

Object.assign(clone1, person);
Object.assign(clone2, person);

person.age++;
person.country = 'FR';

// console.log(samePerson.country);

// we can use this also
// let clone1 = { ...person };
// let clone2 = Object.assign({}, person);
// let samePerson = person;

// person.age += 1;
// person.country = "FR";

// console.log(samePerson);
