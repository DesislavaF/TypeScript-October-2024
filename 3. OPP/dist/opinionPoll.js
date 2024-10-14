class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printInfo() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}
function opinionPoll(input) {
    input.forEach(data => {
        const [name, age] = data.split(" ");
        const person = new Person(name, Number(age));
        person.printInfo();
    });
}
opinionPoll(["Peter 12", "Sofia 33"]);
