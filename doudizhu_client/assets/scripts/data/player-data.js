// let PlayerData = function () {
//     let that = {};
//     that.uid = undefined;
//     that.uniqueID = 10000;
//     that.nickname = '小明'+Math.floor(Math.random()*10);
//     that.avatarUrl = 'http://img2.imgtn.bdimg.com/it/u=1881776517,987084327&fm=214&gp=0.jpg';
//     that.houseCardCount = 0;
//     for (let i = 0; i < 7; i++) {
//         that.uniqueID += Math.floor(Math.random() * 10);
//     }
//     that.wxLoginSuccess = function (data) {
//         that.uniqueID = data.uniqueID;
//         that.nickname = data.nickname;
//         that.avatarUrl = data.avatarUrl;
//     }
//     that.loginSuccess = function (data) {
//         console.log('data =', JSON.stringify(data, null, 2));
//     }
// }
// let playerData = new PlayerData();

export default class PlayerData{
    constructor(){
        this.uid = undefined;
        this.uniqueID = 10000;
        this.nickname = '小明'+Math.floor(Math.random()*10);
        this.avatarUrl = 'http://img2.imgtn.bdimg.com/it/u=1881776517,987084327&fm=214&gp=0.jpg';
        this.houseCardCount = 0;
    }
    wxLoginSuccess(data){
        this.uniqueID = data.uniqueID;
        this.nickname = data.nickname;
        this.avatarUrl = data.avatarUrl;
    }
    loginSuccess(data) {
        console.log('data =', JSON.stringify(data, null, 2));
    }
}