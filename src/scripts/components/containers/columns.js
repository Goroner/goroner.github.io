import Container from './base';

class Columns extends Container {
    render () {
        return super.render(
            <div className="row">
                {this.eachArea((children, index) => {
                    return <div key={'area_' + index} className={'col' + (this.props.single ? ' col--full': '')}>{children}</div>;
                })}
            </div>
        );
    }
}

export default Columns;