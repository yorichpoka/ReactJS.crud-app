import { DataModel } from "../models/DataModel";

export class DataService {

    create(obj) {
        return obj;
    }

    read(id) {
        return new DataModel();
    }

    readAll() {
        return [];
    }

    delete(id) {

    }

}