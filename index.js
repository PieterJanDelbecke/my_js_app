function solution(str){
    let arr = []

    for (let i=0; i<str.length;i++){
        arr.unshift(str.charAt(i))
    }
    let newArr = arr.join('')
    return newArr
}

solution('world')
solution('hello')
solution('word')
solution('')
solution('h')