let user = {
    firstName: "Adam",
    lastName: "Ant",
    age: 35
}

let str = JSON.stringify(user,null, 4)
console.log(str)

/*
user converted to JSON:

{
    "fistName": "Adam",
    "lastName": "Ant",
    "age": 35
}

*/
