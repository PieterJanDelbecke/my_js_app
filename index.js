function processInput (input, callback){
    callback(input)
}

function greet(name) {
    console.log(`Hello ${name}`)
}

function excitedGreet(name) {
    console.log ("HI THERE " + name.toUpperCase() + "!!!")
}

processInput("Alex", greet)
processInput("John", excitedGreet)