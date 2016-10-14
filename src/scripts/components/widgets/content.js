import Widget from './base';

class Content extends Widget {
    render () {
        return super.render(
            <div className="content widget">{this.props.content.text}</div>
        );
    }
}

export default Content;