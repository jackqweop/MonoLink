require(['config'],function(){
	require(['jquery'],function($){
		$('#btnReg').on('click',function(){
			$.ajax({
				url:'../api/reg.php',
				data:{
					username:$('#username').val(),
					password:$('#password').val()
				},
				success:function(res){
					// console.log(res);
					if(res == 'ok'){
						alert('注册成功')
					}else if(res == 'no'){
						alert('注册失败')
					}
				}
			});
		});
		$('#btnLogin').on('click',function(){
			$.ajax({
				url:'../api/login.php',
				data:{
					username:$('#username').val(),
					password:$('#password').val()
				},
				success:function(data){
					// console.log(data);
					
					if(data == 'ok'){
						alert('登录成功');
						window.location.href='http://localhost/ztuan/src/index.html?username='+$('#username').val();
						
						
					}
					else if(data == 'no'){
						alert('登录失败')
					}
				}
			})
		})

		var username = document.getElementById('username');
        var password = document.getElementById('password');
        var btnLogin = document.getElementById('btnLogin');
        // var check = document.getElementById('check');

        btnLogin.onclick = function() {
            var _username = username.value;
            var _psw = password.value;

            var str1 = 'username=' + _username;
            var str2 = 'password=' + _psw;
            // if (check.checked) {
            //     var now = new Date();
            //     now.setDate(now.getDate() + 7);

            //     // 有效期1分钟
            //     // now.setMinutes(now.getMinutes()+1);

            //     str1 += ';expires=' + now.toUTCString();
            //     str2 += ';expires=' + now.toUTCString();
            // }

            // 把用户名和密码存入cookie
            document.cookie = str1+";path=/";
            document.cookie = str2+";path=/";

            //location.href = 'http://localhost/myproject/src/index.html';
        }

	});
}); 