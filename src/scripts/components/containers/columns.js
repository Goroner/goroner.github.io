import Container from './base';

class Columns extends Container {
    render () {
        return super.render(this.eachArea((children, index) => {
            return <div key={'area_' + index} className={'col' + (this.props.single ? ' col--full': '')}>{children}</div>;
        }));
    }
}

export default Columns;