function modifySentence(sentence, modifier){
    return sentence.split(" ").map(modifier).join(" ")
}

function capitalise(word){
    return word[0].toUpperCase()+ word.substring(1)
}

function noCovid(word){
    return word.toLowerCase() === 'covid19'? "#####" : word
    }

console.log(modifySentence("hello there friend", capitalise))
console.log(modifySentence("covid19 is a big mess",noCovid))
