function sumNumbers(nStr, mStr) {
    var n = parseInt(nStr);
    var m = parseInt(mStr);
    var sum = 0;
    for (var i = n; i <= m; i++) {
        sum += i;
    }
    console.log(sum);
}
sumNumbers('1', '5');
sumNumbers('-8', '20');
