
import { AppsettingsService } from './services/AppsettingService';
import { DataService } from './services/DataService';
import { SessionService } from './services/SessionService';
import { UsersService } from './services/UserService';

const ROOT_HTMLELEMENT = document.getElementById('root');
const DATA_SERVICE = new DataService();
const APPSETTING_SERVICE = new AppsettingsService();
const SESSION_SERVICE = new SessionService();
const USER_SERVICE = new UsersService();


export { 
    ROOT_HTMLELEMENT, 
    DATA_SERVICE, 
    APPSETTING_SERVICE, 
    SESSION_SERVICE,
    USER_SERVICE
};