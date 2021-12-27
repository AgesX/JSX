import React, { Component } from  'react';


class Button extends Component{

    state = {
        color: 'red',
    };


    onClick = () => {

        // this 这个组件的一个实例

        this.setState({
            color: 'black',
        });

    }

    render(){
        const { color } = this.state;
        //  onClick, C 大写， react 的写法
        return <button style={{ color }} onClick={this.onClick} > 点击 </button>

    }





}



export default Button;




