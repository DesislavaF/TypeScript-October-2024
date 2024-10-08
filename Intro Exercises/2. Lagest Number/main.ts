function largestNumber(num1: number, num2: number, num3: number): number {
    const largest = Math.max(num1, num2, num3);
    return largest;
}

const largest1 = largestNumber(5, -3, 16);
console.log(`The largest number is ${largest1}.`);

const largest2 = largestNumber(-3, -5, -22.5);
console.log(`The largest number is ${largest2}.`);