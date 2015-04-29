var koa = require('koa');
var app = koa();
var serve = require('koa-static');

//main processing file
var chat = require('./routes/chat');

// 指向静态文件文件夹
app.use(serve('./public'));

// 必须放在在所有app.user()之后
var server = require('http').Server(app.callback());

chat.initialize(server);

server.listen(3000);
