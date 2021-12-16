function useName (name, callback){
    if( typeof name != 'string'){
        const error = new Error("Name must be a string")
        callback(error)
    } else if (name.length < 1) {
        const error = new Error("name cannot be empty")
        callback(error)
    } else {
        callback(null, name)
    }
}

function greet(error, name){
    if (error){
        console.log(error.message)
        return
    }
    console.log("hello " + name)
}

useName("Pieter",greet)