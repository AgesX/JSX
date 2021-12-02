// 实例化 Promise 的时候，



// 可以传入一个执行函数，作为参数



// 这个执行函数， 在 new 的时候，就会被执行



let pro = new Promise( () => {

    setTimeout( () => {

        console.log('异步请求 ，   hahaha');
    }, 1000 );




});












