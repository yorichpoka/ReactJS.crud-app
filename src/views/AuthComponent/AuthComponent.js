import React, { Fragment, Component } from 'react';
import './AuthComponent.css';
import { UserModel } from '../../models/UserModel';
import * as Utils from '../../helpers/Utils';
import { Redirect } from 'react-router-dom';

class AuthComponent extends Component {

    state = {
        isLoading: false,
        isRedirected: false,
        user: new UserModel()
    }

    componentDidMount() {
        // Send to master component
        this.props.onSignin(
            this.state.user
        );
    }

    onSubmit = event => {
        // avoid default action
        event.preventDefault();
        // Get object from state
        let { user } = this.state;
        // Set loading mode
        this.setState({ isLoading: true });
        // Process to verify credential of user
        this.props.userService
                  .authentication(user)
                  .then(
                      (data) => {
                        // Send to master component
                        this.props.onSignin(data);
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
        if (inputName === 'login')
            user.login = event.currentTarget.value;
        else
            user.password = event.currentTarget.value;
        // Update state
        this.setState({ user: user });
    }

    render() {
        // Rediction à la route
        if (this.state.isRedirected)
            return <Redirect to={ '/datas' }></Redirect>

        return (
            <Fragment>
                <div className="py-5 d-none d-md-block"></div>
                <div className="py-2 d-none d-md-block"></div>

                <form className="form-signin" onSubmit={ this.onSubmit }>
                    <div className="text-center">
                        <img className="mb-4 text-center" src="images/bootstrap-solid.svg" alt="" width="72" height="72" />
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