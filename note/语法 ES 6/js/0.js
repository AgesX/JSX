function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !! right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}







// 做类型的校验， 的函数


function _classCallCheck(instance, Constructor) {
    if (! _instanceof(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}







function _defineProperties(target, props) {

    /*
        做一个遍历，



        遍历的是，


        [{
            key: "hello",
            value: function hello() {
                return this.name;
            }
        }]
    
    
    */


    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) 
            descriptor.writable = true;
        
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}





//  protoProps， 对象属性

//  staticProps， 类属性
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) 
        _defineProperties(Constructor.prototype, protoProps);
    
    if (staticProps) 
        _defineProperties(Constructor, staticProps);
    
    return Constructor;
}


/*  */
var Dog = /*#__PURE__*/




// 自执行函数，


// 返回 Dog 函数
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
