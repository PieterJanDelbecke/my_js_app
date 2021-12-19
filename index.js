const people = ["Alex","Harry","Bianca","Michael"]

function nameLength(name){
    return name.length < 5
}

// console.log(people.filter(name => name.length < 5 ))

console.log(people.filter(nameLength))