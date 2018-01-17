import global from "../global";

cc.Class({
    extends: cc.Component,

    properties: {

    },
    onLoad() {
        global.socket.init();
    },
    btnClick(event, customData) {
        console.log('custom data=', customData);
        switch (customData) {
            case 'wxLogin':
                global.socket.login(global.tianba.playerData.uniqueID,global.tianba.playerData.nickname,global.tianba.playerData.avatarUrl,(err,data)=>{
                    if(err){
                        console.log('login err:',err);
                    }
                    console.log('login data:',JSON.stringify(data,null,2));
                });
                break;
            default:
                break;
        }
    },
    start() {

    },
    update() {

    },
});
