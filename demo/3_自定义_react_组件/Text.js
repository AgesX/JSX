import React from 'react';


class Text extends React.Component {


    render() {

        return (
            <h5> {
                this.props.children
            } </h5>
        )


    }


}


export default Text;
