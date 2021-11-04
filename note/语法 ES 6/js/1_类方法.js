`` `
let Cat = class {

    // 公有属性

    addr = 'IP'
    constructor(n, year){
      
      
            this.name = n;
          this.age = year;
    
    }
    
    
    static hello(){
            console.log(this);
    }
  
  }
  
  
  
  let aa = new Cat('11', 22);
  
  
```





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

var Cat = /*#__PURE__*/
function () {
    "use strict";

    function Cat(n, year) {
        _classCallCheck(this, Cat);

        this.name = n;
        this.age = year;
    }


    // 这里的参数，有区别
    _createClass(Cat, null, [{
            key: "hello",
            value: function hello() {
                console.log(this);
            }
        }]);

    return Cat;
}();

var aa = new Cat('11', 22);
