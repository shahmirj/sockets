# Sockets.io
My little websocket playground. It has a server which listens to
messages and transmits the messages back to other clients. It runs on port `3000`.


## Getting started
Simply do

```
$ npm install
```

And then to get the server running

```
$ node server.js
```

For the client you can connect using

```
$ node client.js <username>
```

For example connecting two clients after the server is running

```
$ node client.js batman
```

```
$ node client.js joker
```

Enjoy :)