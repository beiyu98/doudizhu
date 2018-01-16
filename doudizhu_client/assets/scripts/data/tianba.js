import PlayerData from "./player-data";

// const Tianba = function () {
//     let that = {};
//     that.playerData = playerData;
//     return that;
// }
// let tianba = new Tianba();
export default class Tianba{
    constructor(){
        this.playerData = new PlayerData();
    }
}