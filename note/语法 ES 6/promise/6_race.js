// 数据竞争的场景


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




// race, 可以传进去，一个数组

// 数组里面的元素 （ 每一个 ），都是 Promise 的实例

    Promise.race([getUsr, getRole]).then( (result) => {

         console.log(result);
    }).catch( (err) => {
            // 失败，
            // 返回的事，最先失败的 promise 的值


            console.log(err);
        }
    );









}







// 添加入参， 
// 作为超时时间 500 毫秒


function timeoutAjax(promise, ms = 500){

    return Promise.race([promise, new Promise( (resolve, reject) => {

            setTimeout( () => {

                    reject(new Error('操作失败，请求超时'));
              

            }, 500)



    })]);
}




// getList(66666);




// 并发多个请求，都完成之后，再做事情



let getUsr = mockAjax('GET', '/user?usrID=' + 888, null)



timeoutAjax(getUsr).then( (result) => {

    console.log(result);
}).catch( (err) => {

       console.log(err);
   }
);








