import React, { Component } from  'React';


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

        return <Button style={{ color }} onClick={this.onClick} > 点击 </Button>

    }





}





