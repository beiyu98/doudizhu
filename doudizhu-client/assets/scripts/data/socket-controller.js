import defines from '../defines';

export default class SocketController{
    constructor(){
        this._socket = undefined;
    }
    init(){
        this._socket = io(defines.serverUrl);
    }
    login(uniqueID,nickname,avatar,cb){
        this._socket.emit('login',{
            uniqueID:uniqueID,
            nickname:nickname,
            avatar:avatar,
        });
    }
}