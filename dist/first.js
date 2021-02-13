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
let multiply2;
multiply2 = (x, y) => x * y;
const multiply = (x, y) => x * y;
console.log(multiply(25, 6));
const numbers = [2, 3, 4, 5, 6, 7];
const friends = ['goni', 'moni', 'poni', 'loni', 'toni'];
let megaName = '';
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
// object 
const friend = {
    name: 'samuel david',
    age: 61
};
friend.age = 57;
let player;
player = {
    club: 'real madrid',
    salary: 50000
};
const messy = {
    name: 'messy',
    club: 'barselona',
    salary: 4500000,
    wife: 'someone',
    isPlaying: true
};
const ronaldo = {
    name: 'ronaldo',
    club: 'psg',
    salary: 5000000,
    isPlaying: true
};
function getBonus(player) {
    return player.salary * .1;
}
const poorPlayer = { salary: 10000 };
getBonus(messy);
class Person {
    constructor(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName() {
        return this.name + ' ' + this.fatherName;
    }
}
const simam = new Person('shafi', 'shafiqul islam');
console.log('name', simam.name);
const simamName = simam.getName();
console.log(simamName);
