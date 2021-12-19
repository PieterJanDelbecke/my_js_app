function userName(name, callback){
    if (typeof name !== 'string'){
        const error = new Error("Name must be a string")
        callback(error)
    } else {
        callback(null, name)
    }
}

function greet(error, name){
    if (error){
        console.log("Name must be a string")
    } else {
        console.log(`Hello ${name}, welcome!`)
    }
}

userName("Pieter-Jan", greet)