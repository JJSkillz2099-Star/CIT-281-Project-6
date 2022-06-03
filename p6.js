// Some code for class Shape comes from 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce 
class Shape {
    constructor(sides = []) {
        this.sides = sides;
    }
    perimeter() {
        const initialValue = 0;
        return this.sides.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
    }
}

/*
console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0
*/

class Rectangle extends Shape {
    constructor(length = 0, width = 0) {
        super([length, width, length, width]);
        this.length = length;
        this.width = width;
    }
    area() {
        return this.length * this.width;
    }
}

/*
console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0 
*/

class Triangle extends Shape {
    constructor(side1 = 0, side2 = 0, side3 = 0) {
        super([side1, side2, side3]);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    area() {
        let s = ((this.side1 + this.side2 + this.side3)/2);
        return Math.sqrt(s* (s - this.side1) * (s - this.side2) * (s - this.side3));
    }
}

/*
console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0
*/

// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

for(const element of data) {
    newArr = element.length;
    switch(newArr) {
        case 2:
            console.log(`${element[0] == element[1]? "Square": "Rectangle"} with sides ${element.toString()} has a perimeter of ${new Rectangle(element[0], element[1]).perimeter().toString()} and an area of ${new Rectangle(element[0], element[1]).area().toString()}`);
            break;
        case 3:
            console.log(`Triangle with sides ${element.toString()} has a perimeter of ${new Triangle(element[0], element[1], element[2]).perimeter().toString()} and an area of ${new Triangle(element[0], element[1], element[2]).area().toString()}`);
            break;
        case 1:
            console.log("Shape with 1 side unsupported");
            break;
        default:
            console.log("Shape with 0 sides unsupported");
    }
}
