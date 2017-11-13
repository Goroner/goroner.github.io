export default class DbRef {
    private cbs: Array<() => void>;
    private data;

    constructor(data) {
        this.data = data;
        this.cbs = [];
    }

    on(event, cb) {
        this.cbs.push(cb);

        cb({
            val: () => {
                return this.data;
            }
        });
    }
}