function processInput(input, callback){
    callback(input)
}

function greet(name) {
    console.log(`Hello ${name}`)
}

function exitedGreet(name) {
    console.log(`HI THERE ${name.toUpperCase()} GLAD THAT YOU'RE HERE!`)
}

processInput("Pieter-Jan", greet)
processInput("Alessandra", exitedGreet)