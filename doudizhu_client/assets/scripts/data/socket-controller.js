import defines from '../defines';

// const SocketController = function(){
//     let that = {};
//     let _socket = undefined;
//     that.init = function(){
//         _socket = io(defines.serverUrl);
//     };
//     that.login = function(uniqueID,nickname,avatar){
//         _socket.emit('login',{
//             uniqueID:uniqueID,
//             nickname:nickname,
//             avatar:avatar,
//         });
//     }
//     return that;
// }
// let socketController = new SocketController();
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