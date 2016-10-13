import React from 'react';

class Content extends React.Component {
    render () {
        return (
            <div className="content widget">{this.props.content.text}</div>
        );
    }
}

export default Content;