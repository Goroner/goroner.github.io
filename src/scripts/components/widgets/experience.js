import Widget from './base';

class Experience extends Widget {
    constructor() {
        super();
        this.title = 'Experience';
    }

    render() {
        return super.render(this._renderExperienceItems());
    }
    
    _renderExperienceItems() {
        var items = [];

        if (this.props.items) {
            this.props.items.forEach(item => {
                items.push(
                    <div key={'exp_' + item.id} className="experience__item">
                        <h3>{item.title}</h3>
                        <p>{item.company}</p>
                        <div>
                            <div><i></i> {item.dates}</div>
                            <div><i></i> {item.location}</div>
                        </div>
                        <p>{item.description}</p>
                    </div>
                );
            });
        }

        return items;
    }
}

export default Experience;