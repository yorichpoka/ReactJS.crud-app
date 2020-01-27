import { UserModel } from "../models/UserModel";
import { AppSettingModel } from "../models/AppSettingModel";

class ConnexionHelper {

    user;
    appSetting;

    constructor(user = new UserModel(), appSetting = new AppSettingModel()) {
        this.user = user;
        this.appSetting = appSetting;
    }

}

export default ConnexionHelper;