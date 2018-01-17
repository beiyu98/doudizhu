const config = {
    isDev:true,
    mysql:{
        host:'127.0.0.1',
        port:'3306',
        user:'root',
        password:'123456',
        database:'doudizhu',
        acquireTimeout:10000,
        connectionLimit : 10,
    }
};

module.exports = config;