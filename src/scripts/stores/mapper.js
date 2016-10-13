import React from 'react';

import Columns from '../components/containers/columns';
import Content from '../components/content';
import Skills from '../components/skills';
import Experience from '../components/experience';

export default {
    map(items) {
        return items.map(item => {
            return this._getComponent(item);
        });
    },
    _getComponent(item) {
        switch(item.type) {
            case 'columns': {
                return (
                    <Columns key={item.id} area={item.props.area} single={item.props.single}>
                        {this.map(item.children)}
                    </Columns>
                );
            }
            case 'content': {
                return (
                    <Content key={item.id} area={item.props.area} content={item.data} />
                );
            }
            case 'skills': {
                return (
                    <Skills key={item.id} area={item.props.area} skills={item.data} />
                );
            }
            case 'experience': {
                return (
                    <Experience key={item.id} area={item.props.area} items={item.data} />
                );
            }
        }
    }
};