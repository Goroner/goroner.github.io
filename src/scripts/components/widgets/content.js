import Widget from './base';

class Content extends Widget {
    render () {
        return super.render(
            this.props.content.text
        );
    }
}

export default Content;