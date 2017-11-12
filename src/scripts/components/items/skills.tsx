import '../../../styles/components/items/skills';
import * as React from 'react';

export const TYPE = 'skills';

type SkillsProps = {
    item: Item;
};

export default (props: SkillsProps) => {
    const item: Item = props.item;

    return (
        <div className="skills">
            <h1>Skills</h1>
            <p>
                { item.name }
            </p>
        </div>
    );
}
