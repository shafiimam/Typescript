let age: number = 22;
let club: string = 'real madrid';
const isFamous : boolean = false;

console.log(age,club);

function add (num1: number, num2: number){
    return num1 + num2;
}

add(2,3);

function fullName(firstName: string, lastName: string):string{
    return firstName + ' ' + lastName;
}

console.log(fullName('shafi','imam'));
const user = fullName('priyanaka','akter');

function doubleItAndConsole(num1:number):void{
    const result = num1*2;
    console.log(result);
}

const output = doubleItAndConsole(10);
console.log(output);


let multiply2:(x:number,y:number)=> number;

multiply2= (x,y)=> x*y;

const multiply =(x:number, y:number):number =>  x*y;
console.log(multiply(25,6));