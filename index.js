function evaluateNum (num){
    if (typeof num === 'number'){
        if (num > 100){
            console.log(`${num} is greater than 100`)
        }else if(num === 100){
            console.log(`${num} is equal to 100`)
        }else {
            console.log(`${num} is smaller than 100`)
        }
    } else {
        console.log(`${num} is not a number`)
    }

}

evaluateNum(101)
evaluateNum(99)
evaluateNum("a")

