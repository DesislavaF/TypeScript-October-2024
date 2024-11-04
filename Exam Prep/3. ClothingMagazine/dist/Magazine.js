"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
var Magazine = /** @class */ (function () {
    function Magazine(type, capacity) {
        this.clothes = [];
        this.type = type;
        this.capacity = capacity;
    }
    Magazine.prototype.addCloth = function (cloth) {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    };
    Magazine.prototype.removeCloth = function (color) {
        var index = this.clothes.findIndex(function (c) { return c.color === color; });
        if (index != -1) {
            this.clothes.splice(index, 1);
            return true;
        }
        return false;
    };
    Magazine.prototype.getSortedBySize = function () {
        return this.clothes.sort(function (a, b) { return a.size - b.size; });
    };
    //   Method getSmallestCloth() – returns the Cloth with the smallest Size
    Magazine.prototype.getSmallestCloth = function () {
        var _a, _b;
        if (((_a = this.clothes) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            return {};
        }
        if (((_b = this.clothes) === null || _b === void 0 ? void 0 : _b.length) === 1) {
            return this.clothes[0];
        }
        var sorted = this.getSortedBySize();
        return sorted[0];
    };
    Magazine.prototype.getCloth = function (color) {
        var cloth = this.clothes.find(function (c) { return c.color === color; });
        return cloth;
    };
    Magazine.prototype.getClothCount = function () {
        return this.clothes.length;
    };
    Magazine.prototype.report = function () {
        var sorted = this.getSortedBySize();
        var clothesReport = sorted.map(function (c) { return c.toString(); }).join("\n");
        return "".concat(this.type, " magazine contains:\n").concat(clothesReport);
    };
    return Magazine;
}());
exports.Magazine = Magazine;
