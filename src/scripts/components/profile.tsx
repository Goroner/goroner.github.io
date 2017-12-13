import * as React from 'react';
import '../../styles/components/profile';

export default () => {
    return (
        <div className="widget profile">
            <img className="profile__avatar" src="https://placebear.com/200/200" />
            <ul className="profile__details">
                <li>
                    <span className="profile__details-item">
                        Phone:
                    </span>
                    <a href="tel:+38970289611">(+389) (0) 70 289 611</a>
                </li>
                <li>
                    <span className="profile__details-item">
                        Email:
                    </span>
                    <a href="mailto:stefomitev@gmail.com">stefomitev@gmail.com</a>
                </li>
                <li>
                    <span className="profile__details-item">
                        Web:
                    </span>
                    <a href="http://mitevs.github.io">http://mitevs.github.io</a>
                </li>
            </ul>
        </div>
    );
};
