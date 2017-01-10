import Widget from './base';
var ReactMarkdown = require('react-markdown');

class Content extends Widget {
    render () {
        if (this.props.type === 'md') {
            return super.render(
                <ReactMarkdown source={this.props.content.text} />
            );
        } else {
            return super.render(
                this.props.content.text
            );
        }
    }
}

export default Content;