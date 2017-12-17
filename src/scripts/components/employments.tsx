import * as React from 'react';
import '../../styles/components/employments';

interface EmploymentsProps {
    employments: Employment[]
}

function renderEmployment(employment: Employment, index) {
    return (
        <li key={index} className="employment">
            <section>
                <h4 className="employment__company-name">6PM PLC</h4>
                <time className="employment__time">May, 2017 - Jun, 2017</time>
            </section>
            <section>
                <h4 className="employment__title">{employment.title}</h4>
                <p className="employment__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique optio dolore minima autem reiciendis repudiandae. Unde sequi eveniet, esse vitae temporibus tenetur officiis similique consequuntur, quasi inventore eaque nihil eos! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, reiciendis quo! Id ipsum nemo necessitatibus, sunt consequuntur aliquid ea dicta.</p>
            </section>
        </li>
    );
}

export default ({ employments }: EmploymentsProps) => {
    return (
        <div className="widget">
            <h2 className="widget__title">Employments</h2>
            <ol className="employments">
                {employments.map(renderEmployment)}
            </ol>
        </div>
    );
};
