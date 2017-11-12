import * as React from 'react';
import Skills, { TYPE as SKILLS_TYPE } from './items/skills';

type ItemsProps = {
    items: Item[];
};

function renderItem(item: Item) {
    switch (item.type) {
        case SKILLS_TYPE:
            return <Skills key={Math.random()} item={item} />;
    }
}

export default (props: ItemsProps) => {
    const items = props.items;

    if (items) {
        return (
            <div className="items">
                {items.map(item => renderItem(item)).filter(item => !!item)}
            </div>
        );
    }

    return null;
}