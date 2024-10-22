
class Box<T> {
    private data: T;

    constructor(data: T) {
        this.data = data;
    }

    
    public toString(): string {
        return `${this.data} is of type ${typeof this.data}`;
    }
}


let box1 = new Box(['test']);   
let box2 = new Box(20);         
let box3 = new Box('Hello');    

console.log(box1.toString());   
console.log(box2.toString());   
console.log(box3.toString());   