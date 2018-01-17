const io = require('socket.io');
const app = io('3000');
let Logger = require('./untils/logger');
let logger = new Logger('app: ').info;
require('./unitily/db');//初始化数据库

let {checkPlayer,insertPlayerInfo}  = require('./models/playerModel');

app.on('connection', socket => {
    logger(`a user connection!`);
    socket.emit('welcome','helo');
    socket.on('login',data=>{
        logger('login data='+JSON.stringify(data,null,2));
        checkPlayer(data.uniqueID,(err,datas)=>{
            if(err){
                logger(`err: ${err}`);
            }
            if(datas.length===0){
                insertPlayerInfo({uniqueID:data.uniqueID,uid:989,nickname:"mary",avatar_url:"baidu.com",house_card_count:1},(err,d)=>{
                    if(err){
                        logger(`err: ${err}`);
                    }
                    logger(d);
                })
            }
        });
    });
});
app.on('disconnect', socket => {
    logger(`a user disconnection!`);
    socket.emit('login','bye');
});

logger(`socket is running at port 3000`);