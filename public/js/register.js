(function() {
	window.onload = function() {
		$('button').on('click', function() {
			// 获取到 用户注册的值
			var username = $('#user_name').val().trim();
			var userid = $('#user_id').val().trim();
			var password = $('#pass_word').val().trim();
			$.ajax({
				url: '/user/register',
				data: {
					username: username,
					userid: userid,
					password: password
				},
				type: 'POST',
				success: function(res) {
					console.log('服务器返回的消息: ', res);
					// window.location.href = '/';
				}
			});
		});
	}
})();
