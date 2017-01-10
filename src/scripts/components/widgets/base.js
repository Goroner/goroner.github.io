import React from 'react';

class Widget extends React.Component {
    render(body) {
        return (
            <div className={'widget ' + this.constructor.name.toLowerCase()}>
                {this._getHeader()}
                <section className="widget__body">{body}</section>
            </div>
        );
    }

    _getHeader() {
        if (this.title) {
            let icon;
            
            if (this.icon) {
                icon = <i className={'icon-' + this.icon}></i>;
            }
            
            return (
                <header>
                    <h2 className="widget__title">{icon} {this.title}</h2>
                </header>
            );
        }
    }
}

export default Widget;