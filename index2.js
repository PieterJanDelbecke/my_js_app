function twoOldestAges(ages){
    let arr = [0,0]
    ages.forEach(element => {
        if (element > arr[1]){
            arr[0] = arr[1]
            arr[1] = element
        } else if ( element > arr[0]){
            arr[0] = element
        }
    })
    return arr
}

console.log(twoOldestAges([1,5,87,45,8,8]))
console.log(twoOldestAges([6,5,83,5,3,18]))
console.log(twoOldestAges([64,34,58,12,86,94,1,72,67,96,48,45,21,59,92,19,24,86,7,39,23,48,39,5,33,46,52,25,89]))