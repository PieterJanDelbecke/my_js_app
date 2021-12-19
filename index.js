const array1 = [1,2,3,4]

const reducer = (previousValue, currentValue) =>{
    return previousValue + currentValue
}
console.log(array1.reduce(reducer,5))