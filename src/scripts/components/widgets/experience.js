import Widget from './base';

class Experience extends Widget {
    constructor(props) {
        super('experience', props);
        this.title = 'Experience';
        this.icon = 'suitcase';
    }

    render() {
        return super.render(this._renderExperienceItems());
    }
    
    _renderExperienceItems() {
        var items = [];

        if (this.props.items) {
            this.props.items.forEach(item => {
                let location;

                if (item.location) {
                    location = <li><i className="icon-map-marker"></i> {item.location}</li>;
                }

                items.push(
                    <div key={'exp_' + item.id} className="experience__item">
                        <h4 className="experience__title">{item.title}</h4>
                        <h5 className="experience__sub">{item.company}</h5>
                        <ul className="experience__details">
                            <li><i className="icon-calendar"></i> <time>{item.dates}</time></li>
                            {location}
                        </ul>
                        <p className="experience__desc">{item.description}</p>
                    </div>
                );
            });
        }

        return items;
    }
}

export default Experience;