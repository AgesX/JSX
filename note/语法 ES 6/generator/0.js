
// 有一个，星号

function * gen(){
    console.log('录音');
    yield 660 + 6;
}



//

// 使用变量，保存执行 generator 函数，之后的值
let prepare = gen();

//

// 调用 generator 函数，

// 不会立即执行 generator 函数体，里面的代码


//



// 此时， 执行 generator 函数体，里面的代码
let fight = prepare.next();



// value, 和 done
//  done , false
//  表示，generator 函数， 还没有执行完

// 在 yield 语句这里，

// 暂停了
console.log(fight);



//
let warrior = prepare.next();



// value, 和 done
//  done , true
//  表示，generator 函数， 已经执行完了

console.log(warrior);


//

//

//
//  function* + 函数名 + 函数体



function* genX(){


}




