function squareNumber(number){
    return new Promise ((resolve,reject) =>{
        if (typeof number !== 'number'){
            reject(new Error("Input must be a number"))
        }
        resolve (number  * number)
    })
}

squareNumber(10)
    .then(squaredNumber => console.log("The squredNumber is: " + squaredNumber))
    .catch(error => console.log(error.message))