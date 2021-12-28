function evenChars(string){
    if (2 > string.length || string.length > 100 ) return 'invalid string'
    return string.split('').filter((item, index) =>{
        return index % 2 !=0
    })
}
    

console.log(evenChars("a"))
console.log(evenChars ("abcdefghijklm"))