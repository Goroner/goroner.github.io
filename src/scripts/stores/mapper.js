import React from 'react';

import Columns from '../components/containers/columns';
import Content from '../components/widgets/content';
import Skills from '../components/widgets/skills';
import Experience from '../components/widgets/experience';

export default {
    map(items) {
        if (items) {
            return items.map(item => {
                return this._getComponent(item);
            });
        }
    },
    _getComponent(item) {
        switch(item.type) {
            case 'columns': {
                return (
                    <Columns key={item.id} single={item.props.single} {...item.props}>
                        {this.map(item.children)}
                    </Columns>
                );
            }
            case 'content': {
                return (
                    <Content key={item.id} content={item.data} {...item.props} />
                );
            }
            case 'skills': {
                return (
                    <Skills key={item.id} skills={item.data} {...item.props} />
                );
            }
            case 'experience': {
                return (
                    <Experience key={item.id} items={item.data} {...item.props} />
                );
            }
        }
    }
};