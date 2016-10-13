import React from 'react';

class Experience extends React.Component {
    render() {
        <div className="experience widget">
            <h2>Experience</h2>
            {this._renderExperienceItems()}
        </div>
    }

    _renderExperienceItems() {
        var items = [];

        for(var item in this.props.items) {
            var responsibilities = [];

            for(var resp in item.responsibilities) {
                responsibilities.push(
                    <li>{resp}</li>
                );
            }

            items.push(
                <div className="experience__item">
                    <h3>{item.title}</h3>
                    <p>{item.company}</p>
                    <div>
                        <div><i></i> {item.dates}</div>
                        <div><i></i> {item.location}</div>
                    </div>
                    <p>{item.description}</p>
                    <ul>{responsibilities}</ul>
                </div>
            );
        }

        return items;
    }
}

export default Experience;