import SocketController from './data/socket-controller';
import Tianba from './data/tianba';

const global = {};
global.socket = new SocketController();
global.tianba = new Tianba();

export default global;