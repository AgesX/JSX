// 构造函数
function Warrior(){
    this.age = 40;
    // 每隔 1 s
    let that = this
    setInterval(function goBy(){
        that.age++;
    }, 1000);
}


let p = new Warrior();

setTimeout(function(){
    console.log(p.age);

    // 3 秒后
}, 3000);




