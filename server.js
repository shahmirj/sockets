/**
 * This simple server recieves messages and broadcasts
 * the messages back to every one else
 */

var server = require('http').createServer();
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

/**
 * For each connection that comes in
 */
io.on('connection', function(socket){

    // When we connect we tell everyone else we have connected
    console.log(socket.id + " joined the room.")
    socket.broadcast.emit('server_info', socket.id + " joined the room")

    /**
     * On each event, broadcast to other clients
     * and log the data
     */
    socket.on('event', function(data){
        message = data['username'] + ": " + data['message']
        socket.broadcast.emit('server_info', message)
        console.log(message)
    });

    /**
     * When we disconnect, we tell every one we have disconnected
     */
    socket.on('disconnect', function(){
        console.log(socket.id + " disconnected!")
        io.sockets.emit('server_info', socket.id + " disconnected!")

    });
});

// Start the server on this port
server.listen(port, function(){
    console.log("Server started on " + port)
});