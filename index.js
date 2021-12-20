let myFirstPromise = Promise.resolve("My first promise, yay!")
myFirstPromise.then(function(value){
    console.log(value + "!!!")
})