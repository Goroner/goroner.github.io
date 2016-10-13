import React from 'react';

class Columns extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render () {
        var cols = [];

        if (this.props.single) {
            cols.push(<div key={'area_0'} className="col col--full">{this._getChildrenForArea(0)}</div>);
        } else {
            cols.push(<div key={'area_0'} className="col">{this._getChildrenForArea(0)}</div>);
            cols.push(<div key={'area_1'} className="col">{this._getChildrenForArea(1)}</div>);
        }

        return <div className="row">{cols}</div>;
    }

     _getChildrenForArea(area) {
        return React.Children.map(this.props.children, child => {
            if (child.props.area === area) {
                return child;
            }
        });
    }
}

export default Columns;