class Car {
    public brand: string;
    public model: string;
    public horsePower: number;

    constructor(brand: string, model: string, horsePower: number) {
        this.brand = brand;
        this.model = model;
        this.horsePower = horsePower;
    }

    getBrand(): string {
        return this.brand;
    }

    setBrand(brand: string): void {
        this.brand = brand;
    }

    getModel(): string {
        return this.model;
    }
    setModel(model: string): void {
        this.model = model;
    }

    gethorsePower(horsePower: number): void {
        this.horsePower = horsePower;
    }

    sethorsePower(horsePower: number): void {
        this.horsePower = horsePower;
    }

    printCarInfo(): void {
        console.log(`The car is: ${this.brand} ${this.model} - ${this.horsePower} HP.`)
    }
}

function testCarInfoProgram(input: string): void {
    const [brand, model, horsepowerStr] = input.split(" ");
    const horsepower = Number(horsepowerStr);

    const car = new Car(brand, model, horsepower);
    car.printCarInfo();
}

testCarInfoProgram("Chevrolet Impala 390");
testCarInfoProgram("Skoda Karoq 150");