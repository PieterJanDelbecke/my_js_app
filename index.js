function squareNumber(number){
    return new Promise((resolve,reject)=>{
        if (typeof number !=='number'){
            reject(new Error("Input must be a number"))
        }
        resolve(number * number)
    })
}

squareNumber("10")
    .then(sqauredNumber => console.log("The sauared number is " + sqauredNumber))
    .catch(error => console.log(error.message))
    .finally(() => console.log("The promise has finished"))