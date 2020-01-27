import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DataComponent from '../views/DataComponent/DataComponent';
import AuthComponent from '../views/AuthComponent/AuthComponent';

const Routes = ({ userService, onSignin }) => {
    return (
        <BrowserRouter>
          <Switch>
              <Route exact  path='/'        render={(props) => <AuthComponent {...props} userService={ userService } onSignin={ onSignin } />} />
              <Route        path='/auth'    render={(props) => <AuthComponent {...props} userService={ userService } onSignin={ onSignin } />} />
              <Route                        render={(props) => <AuthComponent {...props} userService={ userService } onSignin={ onSignin } />} />
              <Route        path='/datas'   render={(props) => <DataComponent {...props} />} />
          </Switch>
        </BrowserRouter>
    );
}

export default Routes;