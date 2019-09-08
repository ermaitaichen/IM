module.exports = function(app) {
	// 过滤 session 的中间件
	app.use(function(req, res, next) {
		var _user = req.session.user;
		app.locals.user = _user;
		next();
	});

	// 请求 login 页面
	app.get('/', function(req, res) {
		res.render('login');
	});

	// 请求注册页
	app.get('/register', function(req, res) {
		res.render('register');
	});
	
	// 用户登录
	app.post('/user/login', function(req, res) {
		
	});
	// 用户注册
	app.post('/user/register', function(req, res) {
		var userid = req.body.userid;

	});
}

































