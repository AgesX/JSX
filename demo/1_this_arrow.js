// 构造函数
function Warrior(){
    this.age = 40;
    // 每隔 1 s
    setInterval( () =>{
        // 箭头函数中，没有 this

        // 这个 this 是，上一个作用域 / 上下文的

        this.age++;
    }, 1000);
}


let p = new Warrior();

setTimeout(function(){
    console.log(p.age);

    // 3 秒后
}, 3000);




