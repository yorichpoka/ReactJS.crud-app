export class AppSettingModel {

    version;
    apiUrl;

    constructor(version = '', apiUrl = '') {
        this.version = version;
        this.apiUrl = apiUrl;
    }

    toString() {
        return JSON.stringify(this);
    }

    static cast(obj) {
        return new AppSettingModel(obj.version, obj.apiUrl);
    }

}