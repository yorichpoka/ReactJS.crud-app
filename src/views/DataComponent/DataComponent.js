import React, { Component } from 'react';
import './DataComponent.css';
import { Redirect } from 'react-router-dom';
import { SESSION_SERVICE }  from '../../module';

class DataComponent extends Component {

    state = {
        isRedirected: false
    }

    componentDidMount() {
        console.warn('DataComponent: ' + new Date().getTime());
        // Chck user connection
        if (SESSION_SERVICE.isUserConnected() === false)
            // Redirect
            this.setState({ isRedirected: true });
    }

    render() {
        // Rediction à la route
        if (this.state.isRedirected)
            return <Redirect to='/auth'></Redirect>

        return (
            <div className="container pt-3 pb-5 bg-white">
                <h1>
                    DataComponent
                </h1>
            </div>
        );
    }

}

export default DataComponent;