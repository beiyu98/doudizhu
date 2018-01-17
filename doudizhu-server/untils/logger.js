const debug = require('debug');
const isShowLog = require('../config').isDev;

class logger {
    constructor(namespace){
        this.info = debug(namespace);
        this.info.enabled = isShowLog;
    }
    info(logStr){
        this.info(logStr);
    }
}

module.exports = logger;