let pro = new Promise( (resolve, reject) => {

    setTimeout( () => {

        console.log('异步请求 ，   hahaha');

        // 1 ～ 10 的，一个随机数
        let time = Math.random() * 10;

        if( time < 5 ){
            resolve('下面  then  函数的数据: ' + time);
        }
        else{
            reject('出现了 (下面  catch  函数的)   错误 : ' + time);
        }
    }, 1000 );




});




// Promise, 出错之后，不但会走 catch 方法，

// 还会走 then 的第二个参数回调

pro.then( (data) => { 
    // 第一个回调，
    // 对应上面的 resolve 方法

    console.log('data:  ', data);

},  (ggg) => {

    console.log('then 的第二个入参:  ', ggg);

})
.catch( (err) => { 
    // 对应上面的 reject 方法

    console.log('wrong:  ', err);

});