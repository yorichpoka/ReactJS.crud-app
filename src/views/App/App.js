import React, { Component } from 'react';
import './App.css';
import { UserModel } from '../../models/UserModel';
import HeaderComponent from '../_layout/HeaderComponent/HeaderComponent';
import FooterComponent from '../_layout/FooterComponent/FooterComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DataComponent from '../DataComponent/DataComponent';
import AuthComponent from '../AuthComponent/AuthComponent';
import UserComponent from '../UserComponent/UserComponent';


class App extends Component {

  state = {
    user: new UserModel(),
  }

  onSignInOrOut = (userConnected) => {
    // Get value from state
    let { user } = this.state;
    // Update value
    user = userConnected;
    // Update state
    this.setState({ user: user });
  }

  onProfil = () => {
    // Get value from state
    const { user } = this.state;
    // Alert value
    alert('The user connected is : ' + user.toString());
  }

  render() {
    // Get value from state
    const { user } = this.state;

    return (
      <BrowserRouter>
        <header className="bg-white pt-2 pb-3">
          <HeaderComponent 
            userConnected={ user } 
            onSignout={ this.onSignInOrOut.bind(this) }
            onProfil={ this.onProfil }></HeaderComponent>
        </header>
        <div className="container py-5">
          <Switch>
              <Route exact path='/'        render={(props) => <AuthComponent {...props} onSignin={ this.onSignInOrOut.bind(this) } />} />
              <Route exact path='/auth'    render={(props) => <AuthComponent {...props} onSignin={ this.onSignInOrOut.bind(this) } />} />
              <Route       path='/datas'   render={(props) => <DataComponent {...props}                                            />} />
              <Route       path='/users'   render={(props) => <UserComponent {...props}                                            />} />
              <Route                       render={(props) => <AuthComponent {...props} onSignin={ this.onSignInOrOut.bind(this) } />} />
          </Switch>
        </div>
        <footer>
          <FooterComponent />
        </footer>
      </BrowserRouter>
    );
  }

}

export default App;