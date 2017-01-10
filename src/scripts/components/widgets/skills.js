import Widget from './base';

class Skills extends Widget {
    constructor() {
        super();
        this.icon = 'tasks';
        this.title = 'Skills'
    }
    
    render() {
        return super.render(
            <ul className="skills__list">{this._renderSkills()}</ul>
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
                        <div className={'level-bar__indicator' + (skill.level === 100 ? ' level-bar__indicator--full' : '')} style={levelBarStyle}>
                            <label>{skill.name}</label>
                        </div>
                    </div>
                </li>
            );
        });
    }
}

export default Skills;