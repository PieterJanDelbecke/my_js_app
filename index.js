const people = ["Alex","Harry","Bianca","Janel","Michael", "Jairo","Vancha"]

// people.forEach(person => console.log(person))

// function logger(element){
//     console.log(element)
// }

// people.forEach(logger)

people.forEach((person, index) => {
    console.log(`${index + 1}. ${person}`)
})