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
                <Modal title="Send an Email" buttonTitle="Send" onClick={this._sendEmail.bind(this)} open={this.state.open} onClose={this._onClose.bind(this)}>
                    <div className="form-control">
                        <label>Email</label>
                        <input name="email" type="email" placeholder="Your email" value={this.state.email} onChange={this._fieldChange.bind(this)} />
                    </div>
                    <div className="form-control">
                        <label>Message {this._getError('message')}</label>
                        <textarea rows="10" name="message" placeholder="Your message" value={this.state.message} onChange={this._fieldChange.bind(this)}></textarea>
                    </div>
                </Modal>
                <button className={`contact__trigger ${this.state.visible ? 'visible' : ''} ${this.state.open ? 'remove' : ''}`} onClick={this._openEmailForm.bind(this)}><i className="icon-envelope-o"></i></button>
            </div>
        );
    }

    _getError(field) {
        if (this.state.errors && this.state.errors[field]) {
            return <span className="error">{this.state.errors[field]}</span>;
        }
    }

    componentDidMount() {
        emailStore.addChangeListener(this._onEmailSent.bind(this));
        emailStore.addErrorListener(this._onEmailError.bind(this));
        window.onscroll = this._onWindowScroll.bind(this);
    }

    componentWillUnmount() {
        emailStore.removeChangeListener(this._onEmailSent);
        emailStore.removeErrorListener(this._onEmailError);
    }

    _fieldChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    _sendEmail() {
        emailActions.sendEmail(this.state);
        this.state.loading = true;
        this.setState(this.state);
    }

    _onEmailSent(e) {
        this.setState({ loading: false, visible: false, open: false, email: '', message: '' });
        // email sent add message to the notifications store
    }

    _onEmailError(e) {
        this.state.loading = false;
        this.state.errors = {
            message: 'Required'
        };

        this.setState(this.state);
    }

    _openEmailForm() {
        this.state.open = true;
        this.setState(this.state);
    }

    _onClose() {
        this.state.open = false;
        this.setState(this.state);
    }

    _onWindowScroll() {
        clearTimeout(this.timeout);

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