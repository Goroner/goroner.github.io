import * as React from 'react';
import '../../../styles/components/single/generic-content';

interface GenericContentProps {
    title: string;
    subtitle: string;
    description: string;
}

export default ({ title, subtitle, description }: GenericContentProps) => {
    return (
        <div className="generic-content">
            <h3 className="generic-content__title">{title}</h3>
            <h4 className="generic-content__subtitle">{subtitle}</h4>
            <p className="generic-content__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus ea omnis nesciunt neque libero nihil vitae iure officia totam.
            </p>
        </div>
    );
};
