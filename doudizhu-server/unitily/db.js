const mysql = require('mysql');
const Logger = require('../untils/logger');
let logger = new Logger('db: ').info;

class DB {
    constructor(dbConfig) {
        this.client = undefined;
        if (!this.client) {
            this.client = mysql.createPool(dbConfig);
        }
    }
    query(sql,callback){
        this.client.getConnection((err, connection) => {
            if (err) {
                logger(`db getConnection err: ${err}`);
                callback(err);
                return;
            }
            connection.query(sql, (e, res, fileds) => {
                if (e) {
                    logger(`db query err: ${e} \n sql: ${sql}`);
                    callback(e);
                    return;
                }
                logger(`================================================================================================`);
                logger(`db query success: ${JSON.stringify(res, null, 2)} \nsql: ${sql}`);
                logger(`================================================================================================`);
                callback(null, res);
                connection.release();
            });
        });
    }
}
const mysqlConfig = require('../config').mysql;
let db = new DB(mysqlConfig);
module.exports = db;