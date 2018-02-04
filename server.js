'use strict'

/**
 * Web framework for NodeJs
 */
var express = require('express');
var app = express();

/**
 * Start new server use express app
 */
var http = require('http').createServer(app);
/**
 *Enables real-time bidirectional event-based communication. 
 */
const io = require('socket.io')(http);


/**
 * JavaScript date library for parsing, validating, manipulating, and formatting dates.
 */
const moment = require('moment');

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));

var userInfo = {};

http.listen(PORT,()=>{
    console.log("Server started on PORT "+PORT+"!!!");
});

io.on('connection',(socket)=>{

    socket.emit('message',{

        name :'System',
        text :'Welcome to the Chat Application!!!',
        timestamp : moment().valueOf()
    });

    socket.on('joinroom',(req)=>{

        userInfo[socket.id] = req;
        socket.join(req.room);
        socket.broadcast.to(req.room).emit('message',{
                name :'System',
                text :req.name+' has join!!!',
                timestamp : moment().valueOf()
        });
    });

    socket.on('message',(message)=>{

        if(message.text === '@currentUsers')
        {

        }
        else{
            message.timestamp = moment().valueOf();
            io.to(userInfo[socket.id].room).emit('message',message);
        }
    });

    socket.on('disconnect',()=>{

        var userData = userInfo[socket.id];
        if(typeof userData !== undefined)
        {
            socket.leave(userData.room);
            io.to(userData.room).emit('message',{
                name :'System',
                text :userData.name+' has left!!!',
                timestamp : moment().valueOf()
            });

            delete userInfo[socket.id];
        }
    });
});

const _sendMessageToCurrentUsers = (socket)=>{

    var info = userInfo[socket.id];
    var users =[];
    
    if(typeof info === 'undefined')
    {
        return;
    }
    Object.keys(userInfo).forEach((socketId)=>{

        var userData = userInfo[socketId];

        if(info.room == userData.room)
        {
            users.push(userData.name);
        }
    });

    socket.emit('message',{
        name :'System',
        text :'Current users: '+ users.join(', '),
        timestamp : moment().valueOf()
    });
};