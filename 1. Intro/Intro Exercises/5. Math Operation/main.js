function mathOperation(num1, num2, operator) {
    var result;
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
            result = Math.pow(num1, num2);
            break;
        default:
            console.log('Invalid operator');
            return;
    }
    console.log(result);
}
mathOperation(5, 6, '+');
mathOperation(3, 5.5, '*');
