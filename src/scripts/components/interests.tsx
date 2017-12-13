import * as React from 'react';
import '../../styles/components/interests';

interface InterestsProps {
    interests: string[]
}

export default ({ interests }: InterestsProps) => {
    return (
        <div className="widget">
            <h3 className="widget__title">Interests</h3>
            {interests.map((interest, index) => {
                return <span key={index} className="interest">{interest}</span>
            })}
        </div>
    );
};
