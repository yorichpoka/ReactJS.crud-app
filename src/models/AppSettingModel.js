export class AppSettingModel {

    version;
    apiUrl;

    constructor(version = null, apiUrl = null) {
        this.version = version;
        this.apiUrl = apiUrl;
    }

    static cast(obj) {
        return new AppSettingModel(obj.version, obj.apiUrl);
    }

}