const student = {
    name: "John",
    course: "none"
}
const genTechStudent = {
    course: "GenTech",
    start: "October",
}
const caStudent = {
    languages: ['Ruby','javascript'],
    speak: function(){
        console.log("I can do it")
    }
}

let john = Object.assign(student, genTechStudent,caStudent)
console.log(john)
john.speak()