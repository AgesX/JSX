import React from 'react';



class View extends React.Component {


    render() {

        return (
            <div>
                {this.props.children}
            </div>
        )


    }


}


export default View;




