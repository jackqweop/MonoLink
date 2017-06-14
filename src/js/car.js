require(['config'], function() {
	require(['common'],function(){

		var carList = document.getElementById('cardata');
		var btnClear = document.getElementById('cleargoods');
		var subPrice = document.getElementsByClassName('total-cart-price')[0];

		// 获取cookie商品信息
		var goodslist = getCookie('goodslist');

		// 把json字符串转换成数组/对象
		// JSON.parse(json)
		goodslist = goodslist ? JSON.parse(goodslist) : [];

		render();

		function render(){
			// 总价
			var totalPrice = 0;

			var tbody = document.createElement('tbody');

			tbody.innerHTML = goodslist.map(function(goods){
				// 计算总价
				totalPrice += goods.price*goods.qty;

				// return '<li data-guid="'+goods.guid+'"><img src="'+goods.imgurl+'"><h4>'+goods.name+'</h4><p class="price">'+goods.price+'&times;'+goods.qty+'</p><span class="btn-close">&times;</span></li>'
				return `
					<tr id="cardata" data-guid="${goods.guid}">
                            <td colspan="2" class="s-infor">
                                <input type="checkbox">
                                <a href="#" class="pic">
                                    <img width="80" height="80" src="${goods.imgurl}" alt="">
                                </a>
                                <div class="inforbox">
                                    <h3 class="tit">
									<a href="#">
										${goods.name}
									</a>
								</h3>
                                    <div class="info-con">
                                        <span>套装：官方标配</span>
                                    </div>
                                </div>
                            </td>
                            <td class="s-price">
                                <em>${goods.price}</em>
                            </td>
                            <td class="s-amount">
                                <div class="buy-num">
                                    <a href="#" class="minus">-</a>
                                    <input type="text" class="text-amount" name="" id="" value="${goods.qty}">
                                    <a href="#" class="plus">+</a>
                                </div>
                            </td>
                            <td class="s-agio">
                                <span class="icon">团购</span>
                            </td>
                            <td class="s-total">
                                
                            </td>
                            <td class="s-del">
                                <div class="s-delbox">
                                    <a href="#">移入收藏夹</a>
                                    <a href="#" class="btn-close">删除</a>
                                </div>
                            </td>
                        </tr>
				` 
			}).join('');

			carList.innerHTML = '';
			carList.appendChild(tbody);
			subPrice.innerText = totalPrice.toFixed(2);
		}


		// 清空购物车
		btnClear.onclick = function(e){
			removeCookie('goodslist');

			// 清空DOM节点
			carList.innerHTML = '';
			subPrice.innerHTML = '';

			e.preventDefault();
		}

		// 删除单个商品
		carList.onclick = function(e){
			e = e || window.event;
			var target = e.target || e.srcElement;

			if(target.className === 'btn-close'){
				console.log(target)
				var currentLi = target.parentNode.parentNode.parentNode;
				console.log(currentLi)
				var guid = currentLi.getAttribute('data-guid');

				for(var i=0;i<goodslist.length;i++){
					if(goodslist[i].guid === guid){

						// 删除数组中对应的商品
						goodslist.splice(i,1);

						// 重新写入cookie
						setCookie('goodslist',JSON.stringify(goodslist));

						break;
					}
				}


				// 删除DOM节点
				// removeChild
				// currentLi.parentNode.removeChild(currentLi);
				render();
			}
		}
	
	});
});