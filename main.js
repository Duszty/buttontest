const io = require('socket.io')(3000, {
    cors: { origin: "*" } 
});

io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('send-ping', () => {
        // io.emit sends to EVERY connected person, INCLUDING the sender
        io.emit('receive-ping'); 
        console.log('Global Alert Dispatched');
    });
});
