let obj ={
    firstName: "Pieter",
    lastName: "Delbecke",
    address: {
        street: 'George Street',
        number: '99',
        city: "Sydney"
    }
}
// update a value of a property 
console.log(obj.address.city)
obj.address.city = 'Melbourne'
console.log(obj.address.city)
console.log(obj)

// delete a property
delete obj.lastName
console.log(obj)

// add a property
obj.lastName = 'back'
obj.address.postcode = 2000
console.log(obj)

// iterate through the object
// for in loop

for (variable in obj){
    console.log(variable)
    console.log(obj[variable])
}

