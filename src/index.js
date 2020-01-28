import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './index.css';
import App from './views/App/App';
import * as serviceWorker from './serviceWorker';
import { ROOT_HTMLELEMENT, APPSETTING_SERVICE, SESSION_SERVICE }  from './module';


// Clear session
SESSION_SERVICE.init();
// Load setting of appication
APPSETTING_SERVICE.getAppSettings()
                    .then(
                        (data) => {
                            // Update in session
                            SESSION_SERVICE.setAppSetting(data);
                            // Load application
                            ReactDOM.render(
                                <App />, 
                                ROOT_HTMLELEMENT
                            );
                        }
                    );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();