import * as React from 'react';
import '../../styles/components/profile';

export default () => {
    return (
        <div className="widget profile">
            <img className="profile__avatar" src="https://placebear.com/200/200" />
            <h2 className="widget__title">Stefan Mitev</h2>
            <ul>
                <li>
                    Phone Icon: (+389) (0) 70 289 611 
                </li>
                <li>
                    Mail Icon: stefomitev@gmail.com
                </li>
                <li>
                    Address Icon: http://mitevs.github.io
                </li>
                <li>
                    DOB Icon: 9th of May, 1990
                </li>
            </ul>
        </div>
    );
};
