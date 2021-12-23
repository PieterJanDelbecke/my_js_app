function median (array){
    array.sort((a,b)=> a-b)
    let i = Math.floor(array.length/2)
    if ((array.length%2) == 0) {
        return (array[i-1] + array[i])/2
    } else {
        return array[i]
    }
}


console.log(median([3,2,1]))
console.log(median([3,2,1,7,9]))
console.log(median([33,99,100,30,29,50]))