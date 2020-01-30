import React from 'react';
import './FooterComponent.css';
import { SESSION_SERVICE } from '../../../module';


function FooterComponent({ version }) {
    // Get object in session
    const appSetting = SESSION_SERVICE.getAppSetting();

    return (
        <div className="row bg-light">
            <div className="container">
                <p className="mt-3 text-muted">
                    © 2018-2019 <i>Version { appSetting.version }</i>, Crud app by <b>Ulrich POKA</b>
                </p>
            </div>
        </div>
    );
}

export default FooterComponent;