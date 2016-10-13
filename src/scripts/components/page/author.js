import React from 'react';

class Author extends React.Component {
    render() {
        return (
            <section className="author">
                <img src="/images/sm_avatar.jpeg" alt="Author Avatar" className="author__avatar"/>
                
                <h4 className="author__name">Stefan Mitev</h4>
                <span className="author__sub">Software Engineer</span>
                
                <ul className="author__social">
                    <li>
                        <a href="https://twitter.com/stefomitev">
                            <i className="icon-twitter-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/mitevs">
                            <i className="icon-github-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://mk.linkedin.com/in/stefomitev">
                            <i className="icon-linkedin-square"></i>
                        </a>
                    </li>
                </ul>
            </section>
        );
    }
}

export default Author;