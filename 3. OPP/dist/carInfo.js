class Car {
    constructor(brand, model, horsePower) {
        this.brand = brand;
        this.model = model;
        this.horsePower = horsePower;
    }
    getBrand() {
        return this.brand;
    }
    setBrand(brand) {
        this.brand = brand;
    }
    getModel() {
        return this.model;
    }
    setModel(model) {
        this.model = model;
    }
    gethorsePower(horsePower) {
        this.horsePower = horsePower;
    }
    sethorsePower(horsePower) {
        this.horsePower = horsePower;
    }
    printCarInfo() {
        console.log(`The car is: ${this.brand} ${this.model} - ${this.horsePower} HP.`);
    }
}
function testCarInfoProgram(input) {
    const [brand, model, horsepowerStr] = input.split(" ");
    const horsepower = Number(horsepowerStr);
    const car = new Car(brand, model, horsepower);
    car.printCarInfo();
}
testCarInfoProgram("Chevrolet Impala 390");
testCarInfoProgram("Skoda Karoq 150");
