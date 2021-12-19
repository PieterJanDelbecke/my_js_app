function doMath(num1, num2, callback){
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        const error = new Error("Can only be a number")
        callback (error)
    } else {
        callback(null, num1, num2)
    }
}

function multiply(err, num1, num2){
    if (err){
        console.log(err.message)
    } else {
        console.log (num1 * num2)
    }
}

function add(err, num1, num2){
    if(err){
        console.log(err.message)
    } else {
        console.log (num1 + num2)
    }
}

doMath(2, 5, multiply)
doMath(3, 3, add)

