function squareDigits(num){
    // return num.toString().split('').map(element =>{return (square = Number(element) ** 2).toString()}).join('')
    return Number((num.toString().split('').map(element =>{return (square = Number(element) ** 2).toString()}).join('')))
}

squareDigits(3212)
squareDigits(2112)