import React, { Fragment, Component } from 'react';
import './AuthComponent.css';
import { UserModel } from '../../models/UserModel';
import * as Utils from '../../helpers/Utils';
import { Redirect } from 'react-router-dom';
import { SESSION_SERVICE, USER_SERVICE }  from '../../module';

class AuthComponent extends Component {

    state = {
        isLoading: false,
        isRedirected: false,
        user: new UserModel()
    }

    componentDidMount() {
        // Send to master component
        this.props.onSignin(new UserModel());
        // Set in session
        SESSION_SERVICE.setUser(new UserModel());
    }

    onSubmit = event => {
        // avoid default action
        event.preventDefault();
        // Get object from state
        let { user } = this.state;
        // Set loading mode
        this.setState({ isLoading: true });
        // Process to verify credential of user
        USER_SERVICE.authentication(user)
                    .then(
                        (data) => {
                            // Send to master component
                            this.props.onSignin(data);
                            // Set in session
                            SESSION_SERVICE.setUser(data);
                            // success
                            return true;
                        },
                        (error) => {
                            // Notification
                            Utils.notificationError(error);
                            // Fail
                            return false;
                        }
                    )
                    .then(
                        (isSuccess) => {
                            // Set loading mode
                            this.setState({ isLoading: false });
                            // Reset form
                            this.setState({ user: new UserModel() });
                            // If success redirect
                            if (isSuccess)
                                this.setState({ isRedirected: true });
                        }
                    );
    }

    isOnLoadingButton = () => {
        // Get object from state
        const { isLoading } = this.state;
        
        return isLoading ?  <button className="btn btn-lg btn-secondary btn-block mt-4 disabled" type="submit">
                                <i className="fa fa-spin fa-spinner"></i> Loading
                            </button>
                         :  <button className="btn btn-lg btn-secondary btn-block mt-4" type="submit">
                                <i className="fa fa-check"></i> Authentication
                            </button>
    }

    onInputChange = (event) => {
        // Get object from state
        const { user } = this.state;
        const inputName = event.currentTarget.name;
        // update objet
        user[inputName] = event.currentTarget.value;
        // Update state
        this.setState({ user: user });
    }

    render() {
        // Rediction à la route
        if (this.state.isRedirected)
            return <Redirect to='/users'></Redirect>

        return (
            <Fragment>
                <div className="py-5 d-none d-md-block"></div>
                <div className="py-2 d-none d-md-block"></div>

                <form className="form-signin" onSubmit={ this.onSubmit }>
                    <div className="text-center">
                        <img className="mb-4 text-center" src="images/logo_ainos_550x137.png" alt="" height="72" />
                    </div>

                    <input 
                        type="text" 
                        name="login"
                        minLength="3"
                        value={ this.state.user.login }
                        onChange={ this.onInputChange } className="form-control" placeholder="Login..." required autoFocus />
                    
                    <input 
                        type="password" 
                        name="password"
                        minLength="3"
                        value={ this.state.user.password }
                        onChange={ this.onInputChange } className="form-control" placeholder="Password..." required />

                    { this.isOnLoadingButton() }
                </form>

                <div className="py-5 d-none d-md-block"></div>
                <div className="py-5 d-none d-md-block"></div>
            </Fragment>
        );
    }

}

export default AuthComponent;