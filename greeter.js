"use strict";
exports.__esModule = true;
var Greeter = /** @class */ (function () {
    function Greeter() {
        this.name = "Hello World";
    }
    Greeter.prototype.greet = function () {
        console.log(this.name);
    };
    return Greeter;
}());
exports.Greeter = Greeter;
