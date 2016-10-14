class Widget extends React.Component {
    render(body) {
        var header;

        if (this.icon) {
            header = <header><h2 className="widget__title"><i className={'icon-' + this.icon}></i> {this.title}</h2></header>;
        } else if (this.title) {
            header = <header><h2 className="widget__title">{this.title}</h2></header>
        }

        return (
            <div className={'widget ' + this.constructor.name.toLowerCase()}>
                {header}
                <section className="widget__body">{body}</section>
            </div>
        );
    }
}

export default Widget;