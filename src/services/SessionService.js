import ConnexionHelper from '../helpers/ConnexionHelper';

export class SessionService {

    keyConnexion = 'keyConnexion';

    init() {
        sessionStorage.clear();
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

}