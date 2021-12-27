function Person(name, age){
    this.name = name
    this.age = age
    this.awesome = true
}

let instructor = new Person ('Pieter-Jan','40')


function Hero (name,level){
    this.name = name;
    this.level = level;
    this.shout = function (){
        return `My name is ${this.name}!`
    }
}

let trooper = new Hero("King Kong", 4)
console.log(trooper.shout())