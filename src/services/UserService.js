import { UserModel } from "../models/UserModel";

export class UsersService {

    urlResource = '/users/';
  
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
                        // Verify object
                        if (user.login === 'admin' && user.password === 'admin') {
                            user.username = 'Ulrich POKA';
                            resolve(user);
                        } else {
                            reject('Login or password incorrect');
                        }
                    },
                    2000
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