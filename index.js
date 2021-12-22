function sayHi(name){
    console.log(name[0].toUpperCase()+ name.substring(1))
}

function greet(name, callback){
    callback(name)
}

greet('emma', sayHi)
