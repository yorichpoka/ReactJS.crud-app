import React, { Component, Fragment } from 'react';
import './App.css';
import { AppSettingModel } from '../../models/AppSettingModel';
import { UserModel } from '../../models/UserModel';
import HeaderComponent from '../_layout/HeaderComponent/HeaderComponent';
import FooterComponent from '../_layout/FooterComponent/FooterComponent';
import Routes from '../../routes/Routes';
// import DataComponent from './views/DataComponent/DataComponent';
// import AuthComponent from '../AuthComponent/AuthComponent';


class App extends Component {

  state = {
    appSetting: new AppSettingModel(),
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

  onProfil = (event) => {
    // Get value from state
    const { user } = this.state;
    // Alert value
    alert('The user connected is : ' + user.toString());
  }

  componentDidMount() {
    // Load setting of appication
    this.props.appSettingService.getAppSettings()
                                .then(
                                  (data) => {
                                    // Update state
                                    this.setState({ appSetting: data });
                                  }
                                );
  }

  render() {
    // Get value from state
    const { user, appSetting } = this.state;

    return (
      <Fragment>

        <header className="bg-white pt-2 pb-5">
          <HeaderComponent 
            user={ user } 
            onSignout={ this.onSignInOrOut }
            onProfil={ this.onProfil }></HeaderComponent>
        </header>

        <main className="bg-white">
          <Routes 
            userService={ this.props.userService }
            onSignin={ this.onSignInOrOut } />
        </main>

        <footer>
          <FooterComponent version={ appSetting.version }></FooterComponent>
        </footer>

      </Fragment>
    );
  }

}

export default App;