import React from 'react';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: props.open };
    }

    render() {
        if (this.state.open) {
            document.body.style.overflow = 'hidden';
        }

        return (
            <div className={`modal ${this.state.open ? 'in' : ''}`}>
                <div className="modal-inner">
                    <header>
                        <h3>{this.props.title}</h3>
                    </header>
                    <section>
                        {this.props.children}
                    </section>
                    <footer>
                        <button className="link" onClick={this._closeModal.bind(this)}>Cancel</button>
                        <button className="primary" onClick={this.props.onClick}>{this.props.buttonTitle}</button>
                    </footer>
                </div>
            </div>
        );
    }

    componentWillReceiveProps(props) {
        if (this.state.open !== props.open) {
            this.state.open = props.open;
            this.setState(this.state);

            if (!this.state.open) {
                document.body.style.overflow = null;
            }
        }
    }

    _closeModal() {
        this.state.open = false;
        this.setState(this.state);
        document.body.style.overflow = null;
        this.props.onClose();
    }
}

export default Modal;