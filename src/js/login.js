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
	});
}); 