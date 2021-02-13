"use strict";
let age = 22;
let club = 'real madrid';
const isFamous = false;
console.log(age, club);
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(fullName('shafi', 'imam'));
const user = fullName('priyanaka', 'akter');
function doubleItAndConsole(num1) {
    const result = num1 * 2;
    console.log(result);
}
const output = doubleItAndConsole(10);
console.log(output);
const multiply = (x, y) => x * y;
console.log(multiply(25, 6));
