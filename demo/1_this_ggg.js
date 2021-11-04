// 构造函数
function Warrior(){
    this.age = 40;
    // 每隔 1 s
    setInterval(function goBy(){
        // 这个 this, 不是 Warrior,

        // 是全局的一个对象 

        this.age++;
    }, 1000);
}


let p = new Warrior();

setTimeout(function(){
    console.log(p.age);

    // 3 秒后
}, 3000);




