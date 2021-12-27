let calculate = {
    add(b){
        return this.value + b
    },
    subtract(b){
        return this.value - b
    },
    multiply(b){
        return this.value * b
    },
    divide(b){
        return this.value / b
    }
}
let Number = function(value){
    this.value = value
}

let numberOfDays = new Number(15)
numberOfDays = Object.assign(numberOfDays, calculate)
console.log(numberOfDays.add(5))