export class DataModel {

    id;
    type;
    value;

    constructor(type = '', value = '') {
        this.id = 0;
        this.type = type;
        this.value = value;
    }

    toString() {
        return JSON.stringify(this);
    }

    static cast(obj) {
        return new DataModel(obj.type, obj.value);
    }

}