const io = require('socket.io');
const app = io('3000');
app.on('connection', socket => {
    console.log(`a user connection!`);
    socket.emit('welcome','helo');
    socket.on('login',data=>{
        console.log('login data=',JSON.stringify(data,null,2));
    });
});
app.on('disconnect', socket => {
    console.log(`a user disconnection!`);
    socket.emit('login','bye');
});

console.log(`socket is running at port 3000`);