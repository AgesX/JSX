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


// 参数是，一个 generator 函数
function run(genX){


    let g = genX();


    // next 执行之后的，结果


    // 自执行，递归函数



    let result;


    (function iterator(params){




        result = g.next(params);

        // 是一个  Promise 对象， 的实例
        if( result.value() instanceof  Promise ){

            result.value().then(iterator);


        }




    })();




    return result;
}














