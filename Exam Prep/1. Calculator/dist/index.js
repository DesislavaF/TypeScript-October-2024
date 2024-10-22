function solve(first, operator, second) {
    var result = 0;
    switch (operator) {
        case "+":
            result = first + second;
            break;
        case "-":
            result = first - second;
            break;
        case "/":
            result = first / second;
            break;
        case "*":
            result = first * second;
            break;
    }
    return result;
}
console.log(solve(4, "+", 4));
