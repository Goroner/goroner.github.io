import React from 'react';

class Container extends React.Component {
    constructor(name, props) {
        super(props);
        this.itemName = name;

        this.state = {
            areas: []
        }

        this._distributeChildrenInAreas();
    }

    render(body) {
        return <div className={`container ${this.itemName}`}>{body}</div>;
    }

    eachArea(wrapper) {
        var wrappedAreas = [];

        this.state.areas.forEach((children, index) => {
            wrappedAreas.push(wrapper(children, index));
        });
        
        return wrappedAreas;
    }

    _distributeChildrenInAreas() {
        if (this.props.children) {
            this.props.children.forEach(item => {
                let areaIndex = item.props.area || 0;
                let area = this.state.areas[areaIndex] = this.state.areas[areaIndex] || [];
                area.push(item);
            });
        }
    }
}

export default Container;