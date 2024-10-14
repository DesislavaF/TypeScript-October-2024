class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    printInfo(): void {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}
function opinionPoll(input: string[]): void {
    input.forEach(data => {
        const [name, age] = data.split(" ");
        const person = new Person(name, Number(age));

        person.printInfo();
    })
}
opinionPoll(["Peter 12", "Sofia 33"]);