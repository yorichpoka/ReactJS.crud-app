import { UserModel } from "../models/UserModel";

export class UsersService {

    urlResource = '/users/';
    dataSource = [
        new UserModel('admin', 'admin', 'Ulrich POKA', new Date().getTime()),
        new UserModel('user1', 'user1', 'User N°1', new Date().getTime()),
        new UserModel('admin', 'admin', 'User N°2', new Date().getTime())
    ];
  
    create(obj) {
        return new Promise(
            (resolve, reject) => {

            });
    }
  
    read(id) {
        return new Promise(
            (resolve, reject) => {
                
            });
    }
  
    authentication(obj) {
        return new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => {
                        // Get user object
                        const user = UserModel.cast(obj);
                        // Get users
                        const results = this.dataSource.find(l => l.login === user.login && l.password === user.password);
                        // Verify object
                        if (results !== null && results.id !== 0) {
                            // Send success
                            resolve(results);
                        } else {
                            // Send fail
                            reject('Login or password incorrect');
                        }
                    },
                    500
                );
            });
    }
  
    readAll() {
        return new Promise(
            (resolve, reject) => {
                
            });
    }
  
    update(obj) {
        return new Promise(
            (resolve, reject) => {
                
            });
    }
  
    delete(id) {
        return new Promise(
            (resolve, reject) => {
                
            });
    }
  
  }