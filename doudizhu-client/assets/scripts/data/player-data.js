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