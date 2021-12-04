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

                resolve(result);
            }
            else{

                reject('接口地址错误');
            }



        }, 1000)



    });
}












// 回调地狱
// 的改造




// 串形操作

function getList(userK){

    let pro = mockAjax('GET', '/role?usrID=' + userK, null)
    pro.then( (data) => {
      
	    console.log('1 >>> ')
        console.log(data);
        return mockAjax('GET', '/product/list?usrID=' + data.roleK, null);
    }).then( (secondData) => {
        console.log('2 >>> ');
        console.log(secondData);
    }).catch(
        (firstErr) => {
            console.log(firstErr);
        }
    );

}






getList(666);




