

function* genX(){
    console.log('录音');
    let aa = yield 660 + 6;
    console.log(aa);
    return "干"
}



let prepare = genX();



// 调用 generator 函数，
// 的  next() 方法，
// 返回一个对象
let fight = prepare.next(555);
console.log(fight);

let warrior = prepare.next(55);




console.log(warrior);



console.log(prepare.next());

console.log(prepare.next());
