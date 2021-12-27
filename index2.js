class Animal {
    constructor(name){
        this.name = name
    }
    speak(){
        return `My name is ${this.name}`
    }
}

class Dog extends Animal {
    constructor(name, breed){
        super(name)
        this.breed = breed
    }
    speak(){
        return `Woof! ${super.speak()}, I'm a ${this.breed}`
    }
}
let fran = new Animal("frog")
let ted = new Dog ("Ted", "Border Collie")
console.log(fran.speak())
console.log(ted.speak())