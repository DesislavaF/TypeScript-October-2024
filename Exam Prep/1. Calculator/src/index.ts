function solve(first: number, operator: string, second: number): string {
    let result = 0;

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

    return result.toFixed(2);
}

console.log(solve(4, "+", 4));