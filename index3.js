let user = {
    firstName: "Adam",
    lastName: "Ant",
    age: 35,
    isAdmin: false,
    courses: ["html", "css","js"],
    wife: null,
    hobbies:{
        indoors: "yoga",
        outdoors: "cycling"
    }
}
 function replacer (key, value){
    if (typeof value === 'string'){
        return "updated"
    }
    return value
 }

let str = JSON.stringify(user, replacer)
console.log(str)

/*
user converted to JSON:

{
    "fistName": "updated",
    "lastName": "updated",
    "age": 35,
    isAdmin: false,
    courses: ["html","css","js"],
    hobbies:{"indoors": "updated", "outdoors":"updated"}
}

*/
