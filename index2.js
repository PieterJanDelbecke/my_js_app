const area = {
    setUnits(units){
        this.units = units
    },
    getArea(){
        return this.length * this.width
    },
    areaToString(){
        return `${this.getArea()}${this.units}`
    }
}

class Rectangle{
    constructor(length, width){
        this.length = length
        this.width = width
    }
}

Object.assign(Rectangle.prototype,area)
let shape = new Rectangle(3,5)
shape.setUnits("cm")
console.log(shape.areaToString())