let newObject = {
    firstName: "Pieter-Jan",
    lastName: "Delbecke",
    address:{
        unit: 10,
        number: 11,
        street: 'Westminster Avenue',
        suburb: 'Dee Why',
        state: 'NSW'
    }
}

newObject.address.state = "QLD"

console.log(newObject)