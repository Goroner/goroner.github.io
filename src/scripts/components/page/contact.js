import React from 'react';
import $ from 'jquery';

class Contact extends React.Component {
    constructor() {
        super();
        this.state = {email: '', message: ''};
    }

    render() {
        return (
            <form>
                <input name="email" type="email" placeholder="Your email" value={this.state.email} onChange={this._fieldChange.bind(this)}/>
                <textarea name="message" placeholder="Your message" value={this.state.message} onChange={this._fieldChange.bind(this)}></textarea>
                <button onClick={this._submitForm.bind(this)}>Send</button>
            </form>
        );
    }

    _fieldChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    _submitForm(e) {
        e.preventDefault();

        $.ajax({
            url: "https://formspree.io/stefomitev@gmail.com",
            method: "POST",
            data: this.state, 
            dataType: "json",
            crossDomain: true
        }).then(() => {
            // notification system to send message that message was sent successfully :)
            this.setState({email: '', message: ''});
        }).fail((e) => {
            console.log(e);
        });
    }
}

export default Contact;