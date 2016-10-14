import React from 'react';

class Skills extends React.Component {
    render() {
        return (
            <div className="skills widget">
                <h2><i className="icon-tasks"></i> Skills</h2>
                <ul className="skills__list">{this._renderSkills()}</ul>
            </div>
        );
    }

    _renderSkills() {
        return this.props.skills.map(skill => {
            var levelBarStyle = {
                width: skill.level + '%'
            };

            return (
                <li key={skill.id}>
                    <div className="level-bar">
                        <div className="level-bar__indicator {skill.level === 100 ? 'level-bar__indicator--full' : ''}" style={levelBarStyle}>
                            <label>{skill.name}</label>
                        </div>
                    </div>
                </li>
            );
        });
    }
}

export default Skills;