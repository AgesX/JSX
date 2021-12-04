function mockAjax(method, url, data){

    return new Promise( (resolve, reject) => {

        //   传递一个箭头函数
        //   一秒钟之后，执行
        setTimeout( () => {

            let time = Math.random() * 10;

            if( time < 5 ){
                // 字面量对象
                let result = {
                    status: 200,
                    msg: 'ok',
                    data: []
                };

                resolve(result + '\n' + url + '\n\n');
            }
            else{

                reject('接口地址错误' + '\n' + url + '\n\n');
            }



        }, 1000)



    });
}









function getList(userK){



    let getUsr = mockAjax('GET', '/user?usrID=' + userK, null)

    let getRole = mockAjax('GET', '/role?usrID=' + userK, null)


//  .all(), 
//  是一个函数

//  可以传进去，一个数组

// 数组里面的元素 （ 每一个 ），都是 Promise 的实例

    Promise.all([getUsr, getRole]).then( (results) => {

         console.log(results);
    }).catch( (err) => {
            // 失败，
            // 返回的事，最先失败的 promise 的值


            console.log(err);
        }
    );




// 出结果，都 ok

// 或者，有一个出错了




}








getList(66666);




// 并发多个请求，都完成之后，再做事情



