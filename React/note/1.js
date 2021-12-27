// 函数组件

function show(prop){

    return <h1>{prop.name}</h1>;
}




const container = document.getElementById('root');

// 调用的是，自定义的组件 show
ReactDOM.render(<show name="123"/>, container);



