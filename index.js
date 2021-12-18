const numbers = [1,2,3,4,5]

function addOne(number){
    return number + 1
}

function double(number){
    return number * 2
}

newNumbers = numbers.map(addOne)
newDouble = numbers.map(double)

console.log(newNumbers)
console.log(newDouble)

