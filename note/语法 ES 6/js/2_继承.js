function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}

var Dog = /*#__PURE__*/
function () {
    "use strict";

    function Dog(a, b) {
        this.a = a;
        this.b = b;
    }

    var _proto = Dog.prototype;

    _proto.vv = function vv() {
        console.log(this.a);
    };

    return Dog;
}();

var SuperDog = /*#__PURE__*/
function (_Dog) {
    "use strict";

    _inheritsLoose(SuperDog, _Dog);

    function SuperDog(a, b, c) {
        var _this;

        // super , 调用的是 Dog 的 construct 方法
        _this = _Dog.call(this, a, b) || this;
        _this.c = c;
        return _this;
    }

    var _proto2 = SuperDog.prototype;

    _proto2.fire = function fire() {
        console.log("gg");
    };

    return SuperDog;
}(Dog);

var ddd = new SuperDog(6, 66);
ddd.vv();
ddd.fire();
var dd___d = new Dog(6, 66);
