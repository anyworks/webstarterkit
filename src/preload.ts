const storage = require("electron-json-storage")

const myglobal:any = global;

class Common {
    storage : any;
    constructor() {
        this.storage = storage;
    }

    getDefault(){
        return this.storage.version;
    }
}
myglobal.common = new Common();
console.log("initialized preload");