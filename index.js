function getCount(str) {
    var vowelsCount = 0;
    let vowels = ['a','e','i','o','u']
    let newStr = str.split('')
    for (let i = 0; i< vowels.length; i++){
        newStr.forEach(item =>{
            if (item === vowels[i]){
                vowelsCount++
            }
        })
    }
    // console.log(vowelsCount)
    return vowelsCount;
  }

  getCount("abracadabra")