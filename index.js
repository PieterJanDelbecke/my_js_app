function doMath(num1,num2, callback){
    if (typeof num1 !== 'number' || typeof num2 !=='number'){
        const err = new Error("Can only perform on numbers")
        return callback(err)
    }
    callback(null, num1, num2)
}

function multiply(err, a,b){
    if(err){
        return console.error(err.messsage)
    }
    console.log(a*b)
}

function add(err, x,y){
    if (err){
        return console.error(err.message)
    }
    console.log (x + y)
}

doMath(4,8, multiply)
doMath(3,17, add)