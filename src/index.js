import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './index.css';
import App from './views/App/App';
import * as serviceWorker from './serviceWorker';
import { rootHtmlElement, dataService, appSettingService, sessionService, userService }  from './module';


ReactDOM.render(
    <App 
        dataService={ dataService } 
        appSettingService={ appSettingService }
        sessionService={ sessionService }
        userService={ userService } />, 
    rootHtmlElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();