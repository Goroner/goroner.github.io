import BaseStore from '../base';
import mapper from '../mapper';

class ItemStore extends BaseStore {
    constructor() {
        super();

        this.items = [];

        this.db.ref('items').on('value', data => {
            this.items = data.val();
            this.emit('change');
        });
    }

    getItems() {
        return mapper.map(this.items);
    }
}

export default new ItemStore();