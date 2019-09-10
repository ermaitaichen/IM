const User = require('../app/models/user');
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
		console.log('123');
		var userid = Number(req.body.userid);
		var username = req.body.username;
		var password = req.body.password;
		// 到数据库中查询是否有相同的 userid
		User.findOne({userid: userid}, function(err, obj) {
			console.log('err', err);
			console.log('obj', obj);
			if(obj == null) {
				console.log('123456');
				var user = new User({
                      userid: userid,
                      username: username,
                      password: password
               });
			   console.log('user', user);
			   console.log(user.save);
			   user.save(function(err, obj){
			   		console.log('保存');
			   		if(err) {
						console.log('保存时的错误代码', err);
					}

					else {
						res.send({
							state: 1,
							msg: '用户已经保存'
						});
					}
			   });
			}
			else {
				res.send({
                      state: 0,
                      msg: '用户已经存在'
                  })
			}
		});	
	});
}

































