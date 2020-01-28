import React from 'react';
import './FooterComponent.css';


function FooterComponent({ version }) {
    return (
        <div className="row bg-light">
            <div className="container">
                <p className="mt-3 text-muted">
                    © 2018-2019 <i>Version { version }</i>, Crud app by <b>Ulrich POKA</b>
                </p>
            </div>
        </div>
    );
}

export default FooterComponent;