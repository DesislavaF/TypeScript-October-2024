function largestNumber(num1, num2, num3) {
    var largest = Math.max(num1, num2, num3);
    return largest;
}
var largest1 = largestNumber(5, -3, 16);
console.log("The largest number is ".concat(largest1, "."));
var largest2 = largestNumber(-3, -5, -22.5);
console.log("The largest number is ".concat(largest2, "."));
