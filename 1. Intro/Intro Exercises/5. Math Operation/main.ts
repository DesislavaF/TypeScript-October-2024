function mathOperation(num1: number, num2: number, operator: string): void {
    let result: number;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '**':
            result = num1 ** num2;
            break;
        default:
            console.log('Invalid operator');
            return;
    }

    console.log(result);
}


mathOperation(5, 6, '+');  
mathOperation(3, 5.5, '*');  