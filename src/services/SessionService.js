import ConnexionHelper from '../helpers/ConnexionHelper';

export class SessionService {

    keyConnexion = 'keyConnexion';

    init() {
        // Clear session
        sessionStorage.clear();
        // Initi new object session
        this.setConnexion(new ConnexionHelper());
    }

    getConnexion() {
        var connexion = JSON.parse(
            sessionStorage.getItem(this.keyConnexion)
        );

        if(connexion == null)
            connexion = new ConnexionHelper(); 

        return connexion;
    }

    setConnexion(connexion) {
        sessionStorage.setItem(
            this.keyConnexion,
            JSON.stringify(connexion)
        );
    }

    getAppSetting() {
        return this.getConnexion().appSetting;
    }

    setAppSetting(appSetting) {
        var connexion = new ConnexionHelper();
        connexion = this.getConnexion();
        connexion.appSetting = appSetting;

        this.setConnexion(connexion);
    }

    setUser(user) {
        var connexion = this.getConnexion();
        connexion.user = user;
        this.setConnexion(connexion);
    }

    isUserConnected() {
        const user = this.getConnexion().user;

        if (user === undefined || user === null || user.id === 0)
            return false;
        else
            return true;
    }

}