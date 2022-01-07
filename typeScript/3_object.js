// object 等价于
// new Object();
var usr = {
    name: 'disney'
};
// usr.name
//
//
// 数组
// let nums: [] = [1, 2, 3]
var digits = [1, 2, 3];
// digits[0].toString
// 来提示
//  digits[0].
//
// 元组
var infoW = [666, 'deng', 666666];
//
//
//
// 枚举
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var woXxx = Gender.Female;





var GenderXx;


// 下面这种写法，什么意思
(function (GenderXx) {
    GenderXx["Male"] = "\u7537";
    GenderXx["Female"] = "\u96CC\u6027";
})(GenderXx || (GenderXx = {}));
