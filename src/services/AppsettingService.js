//import { AppSettingModel } from "../models/AppSettingModel";

// Present service to join appsettings.json file
export class AppsettingsService {

    urlResource = 'appsettings.json';

    getAppSettings() {
        return new Promise(
            (resolve, reject) => {
                const headers = new Headers();
                headers.append("Content-Type", "application/json");

                const requestInit = {
                    method: 'GET',
                    headers: headers
                };

                fetch(this.urlResource, requestInit)
                    .then(
                        (response) => {
                            if (response.ok) {
                                response.json()
                                        .then(
                                            (value) => {
                                                resolve(value);
                                            },
                                            (error) => {
                                                reject(error);
                                            }
                                        );
                            } else {
                                reject(response.statusText);
                            }
                        },
                        (error) => {
                            reject(error);
                        }
                    );
            });
    }

}