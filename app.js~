const express = require('express')
const pug = require('pug')
const mongoose = require('mongoose')
const session = require('express-session')
const bodyParser = require('body-parser')
const app = express();

// 配置静态资源
app.use('/public', express.static('public'));
// 配置模板引擎
app.set('views','./app/pages');
app.set('view engine', 'pug');
// 配置session
app.use(session({
	secret: 'IM',
	resave: false
}));
// 配置 body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('./config/routers')(app);

// 连接数据库
mongoose.connect('mongodb://188.131.214.188:27017/IMdbs');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
	console.log('数据库连接成功');
});

app.listen('3000', function() {
	console.log('程序启动成功');
})














