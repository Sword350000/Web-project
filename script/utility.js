var Utility;
(function (Utility) {
    var useful = /** @class */ (function () {
        function useful() {
        }
        useful.prototype.el = function (n) {
            return n * 2;
        };
        return useful;
    }());
    Utility.useful = useful;
})(Utility || (Utility = {}));
var use = new Utility.useful();
console.log(use.el(10));
