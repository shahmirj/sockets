/**
 * This is a simple client that talks to the server and
 * communicates the messages back and forth
 */

var io = require('socket.io-client')
var socket = io.connect('http://localhost:3000', {reconnect: false});
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Set the username from the arguments
 */
if (process.argv.length > 2) {
    username = process.argv[2]
} else {
    username = "Unknown"
}

/**
 * For when the user establishes a connection to
 * the server
 */
socket.on('connect', function(data){
    console.log("Connected to http://localhost:3000")
})

/**
 * This is helpful info transmitted back from the server
 * to tell the client an event on the server happened. We
 * just log it into the client so each client knows what
 * is going on
 */
socket.on('server_info', function(data){
    console.log(data)
})

/**
 * For each line emit the message back to the server
 */
rl.on('line', function(message){
    socket.emit(
        "event",
        {
            "username": username,
            "message": message
        }
    )
});
