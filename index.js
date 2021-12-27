let arr1 = [2, 1, 88, 111, 201,3]
let arr2 = arr1.sort()
console.log(arr2)   // will return [ 1, 111, 2, 201, 3, 88 ]


let arr3 = arr1.sort((a,b)=> a - b)     // when a < b : will return a negative value
                                        // when a > b : will return a positive value
                                        // when a = b : will return 0

console.log(arr3)   // [ 1, 2, 3, 88, 111, 201 ]