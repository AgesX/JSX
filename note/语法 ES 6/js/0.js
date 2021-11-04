function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !! right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}

function _classCallCheck(instance, Constructor) {
    if (! _instanceof(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) 
            descriptor.writable = true;
        
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) 
        _defineProperties(Constructor.prototype, protoProps);
    
    if (staticProps) 
        _defineProperties(Constructor, staticProps);
    
    return Constructor;
}


/*  */
var Dog = /*#__PURE__*/
function () {
    "use strict";

    function Dog(n, year) {
        _classCallCheck(this, Dog);

        this.name = n;
        this.age = year;
    }

    _createClass(Dog, [{
            key: "hello",
            value: function hello() {
                return this.name;
            }
        }]);

    return Dog;
}();

var aa = new Dog('11', 22);
