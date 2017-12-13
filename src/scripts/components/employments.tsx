import * as React from 'react';

interface EmploymentsProps {
    employments: Employment[]
}

function renderEmployment(employment: Employment, index) {
    return (
        <div className="employment">
            <h4>{employment.title}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique optio dolore minima autem reiciendis repudiandae. Unde sequi eveniet, esse vitae temporibus tenetur officiis similique consequuntur, quasi inventore eaque nihil eos!</p>
        </div>
    )
}

export default ({ employments }: EmploymentsProps) => {
    return (
        <div className="widget">
            <h2 className="widget__title">Employments</h2>
            {employments.map(renderEmployment)}
        </div>
    );
};
