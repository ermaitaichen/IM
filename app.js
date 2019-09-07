const express = require('express')
const pug = require('pug')


const app = express();

// 配置静态资源
app.use('/public', express.static('public'));
// 配置模板引擎
app.set('views','./pages');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
	res.render('login');
});
app.listen('3000', function() {
	console.log('程序启动成功');
})

