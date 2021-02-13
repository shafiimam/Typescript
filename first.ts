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

const numbers:number[] = [2,3,4,5,6,7]

const friends:string[] = ['goni','moni','poni','loni','toni'];
let megaName:string = '';
for (let i = 0; i < friends.length; i++) {
    const friend:string = friends[i];
    if(friend.length>megaName.length){
        megaName = friend;
    }
}

// object 

const friend:{
    name:string, age:number
}={
    name: 'samuel david',
    age:61

}

friend.age = 57;

let player: {
club:string
salary:number
}

player={
club: 'real madrid',
salary: 50000
}

// interface

interface Player {
    club:string,
    name:string,
    salary:number,
    wife?:string,
    isPlaying:boolean
}

const messy:Player= {
    name:'messy',
    club:'barselona',
    salary:4500000, 
    wife:'someone',
    isPlaying:true
}

const ronaldo:Player={
    name:'ronaldo',
    club:'psg',
    salary:5000000,
    isPlaying:true
}

function getBonus(player:Player){
    return player.salary*.1;
}
 const poorPlayer ={salary:10000}
getBonus(messy);

class Person {
    name:string;
    private _partner:string;
    readonly fatherName : string;
    constructor(name:string,father:string){
        this.name = name
        this._partner = name;
        this.fatherName = father;
    }
    getName(){
        return this.name+' '+this.fatherName;
    }
}

const simam = new Person('shafi','shafiqul islam')
console.log('name', simam.name);
const simamName = simam.getName();
console.log(simamName);