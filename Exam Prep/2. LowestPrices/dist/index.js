var inputCollection = [
    "New York | Sample Product | 1000.1",
    "Sample Town | Sample Product | 1000",
    "Sofia | Orange | 3",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Peach | 2",
    "New York | Burger | 10",
];
var generateProductTownPriceMap = function (input) {
    var result = {};
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var line = input_1[_i];
        var _a = line.split(" | "), town = _a[0], product = _a[1], price = _a[2];
        var parsedPrice = Number(price);
        if (!result[product]) {
            result[product] = {};
        }
        if (!result[product][town]) {
            result[product][town] = parsedPrice;
        }
        else {
            if (result[product][town] > parsedPrice) {
                result[product][town] = parsedPrice;
            }
        }
    }
    return result;
};
var printResult = function (result) {
    var tuples = Object.entries(result);
    for (var _i = 0, tuples_1 = tuples; _i < tuples_1.length; _i++) {
        var _a = tuples_1[_i], product = _a[0], townPriceMap = _a[1];
        var townPricesTuple = Object.entries(townPriceMap);
        var sorted = townPricesTuple.sort(function (a, b) { return a[1] - b[1]; });
        var _b = sorted[0], town = _b[0], price = _b[1];
        // Sample Product -> 1000 (Sample Town)
        console.log("".concat(product, " -> ").concat(price, " (").concat(town, ")"));
    }
};
function solve(input) {
    var result = generateProductTownPriceMap(input);
    printResult(result);
}
solve(inputCollection);
