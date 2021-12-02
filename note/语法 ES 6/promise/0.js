function mockAjax(method, url, data, success , error){


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

            success(result);
        }
        else{


            error('接口地址错误');
        }



    }, 1000)


}









function getList(userK){


    mockAjax('GET', '/role?usrID=' + userK, null , (data) => {

    }, (msg) => {

    } )



}


