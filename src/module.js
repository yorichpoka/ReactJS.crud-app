
import { AppsettingsService } from './services/AppsettingService';
import { DataService } from './services/DataService';
import { SessionService } from './services/SessionService';
import { UsersService } from './services/UserService';

const rootHtmlElement = document.getElementById('root');
const dataService = new DataService();
const appSettingService = new AppsettingsService();
const sessionService = new SessionService();
const userService = new UsersService();


export { 
    rootHtmlElement, 
    dataService, 
    appSettingService, 
    sessionService,
    userService
};