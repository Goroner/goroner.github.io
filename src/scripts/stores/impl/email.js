import BaseStore from '../base';
import $ from 'jquery';

class EmailStore extends BaseStore {
    constructor() {
        super();
    }

    sendEmail() {
    }
}

export default new EmailStore()