let pro = new Promise( (resolve, reject) => {

    setTimeout( () => {

        console.log('异步请求 ，   hahaha');
        let time = Math.random() * 10;

        if( time < 5 ){
            resolve('下面  then  函数的数据: ' + time);
        }
        else{
            reject('出现了 错误 ');
        }
    }, 1000 );




});






pro.then( (data) => { 


    console.log('data:  ', data);

},  () => {



});



