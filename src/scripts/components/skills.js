import React from 'react';

class Skills extends React.Component {
    render() {
        return (
            <div className="skills widget">
                <h2>Skills</h2>
                <ul className="skills__list">{this._renderSkills()}</ul>
            </div>
        );
    }

    _renderSkills() {
        return this.props.skills.map(skill => {
            var conditionalClasses = [];

            var levelBarStyle = {
                width: skill.level + '%'
            };

            if (skill.level === 100) {
                conditionalClasses.push('level-bar__indicator--full');
            }

            return (
                <li key={skill.id}>
                    <div className="level-bar">
                        <div className="level-bar__indicator {conditionalClasses.join(' ')}" style={levelBarStyle}>
                            <label>{skill.name}</label>
                        </div>
                    </div>
                </li>
            );
        });
    }
}

export default Skills;