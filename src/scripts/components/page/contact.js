import React from 'react';
import emailStore from '../../stores/impl/email';
import emailActions from '../../actions/email';
import Modal from '../common/modal';

class Contact extends React.Component {
    constructor() {
        super();
        this.state = { visible: false, open: false, email: '', message: '' };
    }

    render() {
        return (
            <div class="contact">
                <Modal title="Send an Email" buttonTitle="Send" onClick={this._sendEmail.bind(this)} open={this.state.open}>
                    <div className="form-control">
                        <label>Email</label>
                        <input name="email" type="email" placeholder="Your email" value={this.state.email} onChange={this._fieldChange.bind(this)} />
                    </div>
                    <div className="form-control">
                        <label>Message</label>
                        <textarea rows="10" name="message" placeholder="Your message" value={this.state.message} onChange={this._fieldChange.bind(this)}></textarea>
                    </div>
                </Modal>
                <button className={`contact__trigger ${this.state.visible ? 'visible' : ''}`} onClick={this._openEmailForm.bind(this)}><i className="icon-envelope-o"></i></button>
            </div>
        );
    }

    componentDidMount() {
        emailStore.addChangeListener(this._onEmailSent.bind(this));
        window.onscroll = this._onWindowScroll.bind(this);
    }

    componentWillUnmount() {
        emailStore.removeChangeListener(this._onEmailSent);
    }

    _fieldChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    _sendEmail() {
        emailActions.sendEmail(this.state);
    }

    _onEmailSent() {
        this.setState({ visible: false, open: false, email: '', message: '' });
        // email sent add message to the notifications store
    }

    _openEmailForm() {
        this.state.open = true;
        this.setState(this.state);
    }

    _onWindowScroll() {
        clearTimeout(this.timeout);

        if (!document.body.style.overflow) {
            this.state.open = false;
        }

        if (!this.state.open) {
            this.state.visible = true; 
            this.setState(this.state);

            this.timeout = setTimeout(() => {
                this.state.visible = false;
                this.setState(this.state);
            }, 1200);
        }
    }
}

export default Contact;