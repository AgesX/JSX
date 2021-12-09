// 数据竞争的场景


function mockAjax(method, url, data){

    return new Promise( (resolve) => {

        //   传递一个箭头函数
        //   一秒钟之后，执行
        setTimeout( () => {

                // 字面量对象
            let result = {
                status: 666 + "    _     " +url,
                msg: '干',
                data: data
            };

            resolve(result);
            

        }, 1000)



    });
}


function * gen(){
   
    let getRole = yield mockAjax('GET', '/role?usrID=' + 666,  { kk : 13 } )

    // getRole , 是调用 .next 方法， 传入的 data
    console.log(getRole);
    let words = yield mockAjax('GET', '/product?roleK=' + getRole.data.kk,  [{ words: '不要怂' }])


    console.log(words);
}




let g = gen();

// console.log(g.next());



// promise.value

g.next().value.then( (data) => {
    
    
    // data 是
    
    //  promise . call back . result


    console.log(data.data.kk);
    console.log(data);
    let haha = g.next(data);
      console.log(haha);
      
      // 返回一个 Promise 对象
    return haha.value;
}).then( (data) => {

    console.log(data);

    
    
});


// 









