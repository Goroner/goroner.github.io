import React from 'react';

class Footer extends React.Component {
    render () {
        return (
            <footer>
                <h3>&copy; { new Date().getFullYear() } Stefan Mitev, All Rights Reserved</h3>
            </footer>
        );
    }
}

export default Footer;