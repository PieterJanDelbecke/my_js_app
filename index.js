function stringOrNumber(input){
    let dataType = typeof input
    switch(dataType){
        case 'number':
            console.log(`${input} is a number`)
            break
        case 'string':
            console.log(`${input} is a string`)
            break
        default:
            console.log(`The input is not a number or string`)
            break
    }
}

stringOrNumber(100)
stringOrNumber('Hello')
stringOrNumber([1,5,99])
stringOrNumber({firstName:'Adam', lastname: 'Ant'})

