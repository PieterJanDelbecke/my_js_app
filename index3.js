let user = {
    firstName: "Adam",
    lastName: "Ant",
    age: 35,
    isAdmin: false,
    courses: ["html", "css","js"],
    wife: null
}
let str = JSON.stringify(user)
console.log(str)
console.log(typeof str)

/*
the JSON encoded object:
{
    "firstName": "Adam",
    "lastName": "Ant",
    "age": 35,
    "isAdmin": false,
    "courses": ["html", "css", "js"]
    "wife": null
}

typeof str is string

*/