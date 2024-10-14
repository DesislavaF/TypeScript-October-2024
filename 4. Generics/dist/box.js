// Generic клас Box
class Box {
    constructor(data) {
        this.data = data;
    }
    // Метод toString, който връща съобщение за типа на данните
    toString() {
        return `${this.data} is of type ${typeof this.data}`;
    }
}
// Примери за използване:
let box1 = new Box(['test']); // Масив от стринг - ще бъде тип object
let box2 = new Box(20); // Число
let box3 = new Box('Hello'); // Стринг
console.log(box1.toString()); // Output: test is of type object
console.log(box2.toString()); // Output: 20 is of type number
console.log(box3.toString()); // Output: Hello is of type string
