function incrementer(nums) { 
    return nums.map((value,index)=>{
            return (value + index + 1)%10
    })
  }

console.log(incrementer([3, 6, 9, 8, 9]))