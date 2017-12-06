export default class DbRef {
    private data;

    constructor(data) {
        this.data = data;
    }

    on(event, cb) {
        cb({
            val: () => {
                return this.data;
            }
        });
    }
}