
function loops(input){
    let condition = true
    while (condition){
        num = Math.floor(Math.random() * 5 + 1)
        if (num === input){
            console.log(`YEAH, random number: ${num}, is equal to input number: ${input}`)
            condition = false
        } else {
            console.log(`NO, random number: ${num} and input number: ${input} are not the same`)
        }
    }
}

loops(4)
