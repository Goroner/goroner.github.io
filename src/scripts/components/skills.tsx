import '../../styles/components/skills';
import * as React from 'react';

type SkillsProps = {
    skills: Skill[];
};

const renderSkills = (skills: Skill[]) => {
    if (skills && skills.length) {
        return skills.map(renderSkill);
    } else if (skills && !skills.length) {
        return <h2>No skilles!</h2>;
    }

    return <h2>Loading skills...</h2>;
};

const renderSkill = (skill: Skill, index: number) => {
    return (
        <div key={index} className="skill">
            <div className="skill__level">
                <div style={{ width: `${skill.level}%` }}>
                    <label className="skill__name">{skill.name}</label>
                </div>
            </div>
        </div>
    );
}

export default ({ skills }: SkillsProps) => {
    return (
        <div className="widget">
            <h2 className="widget__title">Skills</h2>
            <div className="widget__body">
                {renderSkills(skills)}
            </div>
        </div>
    );
}
