function sumNumbers(nStr: string, mStr: string): void {
    const n = parseInt(nStr);
    const m = parseInt(mStr)

    let sum = 0;

    for (let i = n; i <= m; i++) {
        sum += i;
    }

    console.log(sum)
}

sumNumbers('1', '5');
sumNumbers('-8', '20')
