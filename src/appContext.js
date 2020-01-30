import React from 'react';
import { UserModel } from './models/UserModel';

export default React.createContext({

    userConnected: new UserModel(),
    setUserConnected: (user) => { }

});