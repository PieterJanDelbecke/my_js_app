function add(a,b) {
    console.log(a+b)
}

function multiply(x,y){
    console.log(x*y)
}

function doMath (num1, num2, cb) {
    console.log("Processing")
    cb(num1, num2)
}

doMath(10,5, add)
doMath(2,8, multiply)