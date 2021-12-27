function Person(name, age){
    this.name = name
    this.age = age
    this.awesome = true
}

let instructor = new Person ('Pieter-Jan','40')


function Hero(name,level){
    this.name = name;
    this.level = level;
    this.shout = function (){
        return `My name is ${this.name}!`
    }
}

// let trooper = new Hero("King Kong", 4)
// // console.log(trooper.shout())

// let student = new Person ("Bo",22)
// Person.prototype.role = 'student'
// let newStudent = new Person ("Joe",25)
// console.log(newStudent.role)

function Hero2(name,level){
    this.name = name
    this.level = level
}
Hero2.prototype.shout = function(){
    return `my name is ${this.name}!`
}

let pieter = new Hero("Pieter", 40)
let alessandra = new Hero2("Ale",38)
console.log(pieter.shout())
console.log(alessandra.shout())