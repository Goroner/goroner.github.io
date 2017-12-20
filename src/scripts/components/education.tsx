import * as React from 'react';
import '../../styles/components/educations';

interface EducationProps {
    educations: Education[]
}

function renderEducation(education: Education, index: number) {
    return (
        <li key={index} className="education">
            <section className="education__timeline">
                {/* <h4 className="education__title">Software Engineer</h4> */}
                <time className="education__timeline-time">May, 2017 - Jun, 2017</time>
            </section>
            <section>
                <h4 className="education__institution">{education.institution}</h4>
                <p className="education__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique optio dolore minima autem reiciendis repudiandae. Unde sequi eveniet, esse vitae temporibus tenetur officiis similique consequuntur, quasi inventore eaque nihil eos! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, reiciendis quo! Id ipsum nemo necessitatibus, sunt consequuntur aliquid ea dicta.</p>
            </section>
        </li>
    );
}

export default ({ educations }: EducationProps) => {
    return (
        <div className="widget">
            <h2 className="widget__title">Education</h2>
            <ol className="educations">
                {educations.map(renderEducation)}
            </ol>
        </div>
    );
};
