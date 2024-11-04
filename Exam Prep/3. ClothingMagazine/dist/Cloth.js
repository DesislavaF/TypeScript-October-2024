"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloth = void 0;
var Cloth = /** @class */ (function () {
    function Cloth(color, size, type) {
        this.color = color;
        this.size = size;
        this.type = type;
    }
    Cloth.prototype.toString = function () {
        return "Product: ".concat(this.type, " with size ").concat(this.size, ", color ").concat(this.color);
    };
    return Cloth;
}());
exports.Cloth = Cloth;
