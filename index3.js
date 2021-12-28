function isMonotone(arr){
    for(let i=0; arr.length-1; i++){
        if(arr[i]> arr[i+1]) {
            return false
        }
    }
    return true
}

// console.log(isMonotone([1,2,3]))
// console.log(isMonotone([3,2,1]))
console.log("Hello World")