let pro = new Promise( (resolve, reject) => {

    setTimeout( () => {

        console.log('异步请求 ，   hahaha');

        resolve('下面  then  函数的数据');
    }, 1000 );




});






pro.then( (data) => { 


    console.log('data:  ', data);

},  () => {



});



