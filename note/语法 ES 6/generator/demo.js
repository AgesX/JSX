// 数据竞争的场景


function mockAjax(method, url, data){

    return new Promise( (resolve) => {

        //   传递一个箭头函数
        //   一秒钟之后，执行
        setTimeout( () => {

                // 字面量对象
            let result = {
                status: 666,
                msg: '干',
                data: []
            };

            resolve(result + '\n' + url + '\n\n');
            

        }, 1000)



    });
}


function * gen(){
   
    let getRole = yield mockAjax('GET', '/role?usrID=' + 666,  { kk : 13 } )


    let words = yield mockAjax('GET', '/product?roleK=' + getRole.kk,  [{ words: '不要怂' }])


    console.log(words);
}







