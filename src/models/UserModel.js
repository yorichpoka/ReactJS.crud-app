export class UserModel {

    id;
    login;
    password;
    username;

    constructor(login = '', password = '', username = '') {
        this.id = 0;
        this.login = login;
        this.password = password;
        this.username = username;
    }

    toString() {
        return JSON.stringify(this);
    }

    static cast(obj) {
        return new UserModel(obj.login, obj.password);
    }

}