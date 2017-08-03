require(['config'], function() {
	require(['jquery','gdszoom','fly','common','com'], function() {
			
		        $('.nav-tit,.menu-list').on('mouseenter', function() {
		            $('.menu-list').show();
		        }).on('mouseleave', function() {
		            $('.menu-list').hide();
		        });

		        

		        var a = location.search.split('=')[1];
				// var $car = $('#main .car');

				$.ajax({
					url:'../api/datapage.json',
						dataType:'json',
						data:{
							id:a
					},success: function(data) {
						let $indexlist = $('.zs-wrapper');
	                    let html =data.map(item => {
	                        return `
	                        <div  class="zs-inner clearfix">
								<div class="zs-deal-detail" data-guid="${item.id}">
							            <div class="zs-focus">
							                <div class="goods">
							                    <img class="fly" src="../${item.imgurl}" data-big="../${item.imgurl}">
							                </div>
							                <div class="smallList">
							                    <img src="../${item.imgurl}" alt="">
							                    <img src="../img/bj.jpg" alt="">
							                    <img src="../img/bj1.jpg" alt="">

							                </div>
							            </div>
							            <div class="zs-deal-wrap">
							                <h3 class="zs-commodity-title">${item.name}</h3>
							                <div class="zs-price-panel">
							                    <dl class="zs-sale-price">
							                        <dt>团&nbsp;&nbsp;购&nbsp;&nbsp;价：</dt>
							                        <dd class="clearfix">
							                            <span class="zs-price">
							                                ¥ <em id="zp-goods-price">${item.price}</em>
							                            </span>
							                        </dd>
							                    </dl>
							                </div>
							                <div class="zs-detail-infor">
							                    <dl class="zs-freight-a">
							                        <dt>配&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;送：</dt>
							                        <dd class="clearfix">
							                            <div class="zs-freight-area">
							                                <div class="area-selected-wrap clearfix">
							                                    <div class="area-selected">
							                                        <span class="area-name">广东</span>
							                                    </div>
							                                    <div class="area-selected-infor" style="display: block;">可送达，<strong class="bold">快递包邮</strong>
							                                    </div>
							                                </div>
							                            </div>
							                        </dd>
							                    </dl>
							                    <div class="zs-skin-inner">
							                        <dl class="zs-suit">
							                            <dt>套&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;装：</dt>
							                            <dd>
							                                <ul class="zs-options clearfix" id="zp-choose-set">
							                                    <li fn="44-0-0,45-0-0,46-0-0" class="cur" num="1">
							                                        <span class="can-buy">官方标配<i></i></span>
							                                    </li>
							                                </ul>
							                                <div class="zs-suit-infor" id="zp-suit-desc">官方标配</div>
							                            </dd>
							                        </dl>
							                        <form action="#" id="confirmOrderSubmit">
							                            <dl class="zs-quantity">
							                                <dt>购买数量：</dt>
							                                <dd class="clearfix">
							                                    <div class="amount-widget">
							                                        <span class="zs-decrease zs-no-decrease"></span>
							                                        <input  type="text" title="请输入购买量" value="1" class="zs-goods-number" >
							                                        <span class="zs-increase"></span>
							                                    </div>
							                                </dd>
							                            </dl>
							                            <div class="zs-deal-btn clearfix">
							                                <a href ="javascript:volid(0);" style="cursor:pointer;" class="zs-buy-now">立即购买</a>
							                                <a href ="javascript:volid(0);" style="cursor:pointer;" class="zs-store-buy">加入购物车</a>
															
							                            </div>
							                        </form>
							                    </div>
							                </div>
							            </div>
							    </div>
							</div>    
	                        `
	                    }).join('');
	                    $indexlist.html(html);
	                    $(function(){
							$('.goods').gdszoom({
								width:400,height:300,position:'right'
							});

							$('.smallList img').click(function(){
								$('.goods img').attr({
									'src':this.src,
									'data-big':this.src
								});
							})
						});

						$(function() {
								var offset = $(".ico").offset();
								$(".zs-store-buy").click(function(event){
									var addcar = $(this);
									var img = addcar.parents().find('.fly').attr('src');
									var flyer = $('<img class="u-flyer" src="'+img+'">');
									flyer.fly({
										start: {
											left: event.pageX,
											top: event.pageY
										},
										end: {
											left: offset.left+10,
											top: offset.top+10,
											width: 10,
											height: 10
										},onEnd: function() {
						                    ////成功加入购物车动画效果 
						                    this.destory(); //销毁抛物体 
						                }
										
									});
								});				  
						});
					}

				});			
		
			
			
			
			var goods = document.getElementsByClassName('zs-wrapper')[0];

			//Unexpected end of JSON input
			//JSON.parse中的字符串不符合规则
			var goodslist = getCookie('goodslist')
			goodslist = goodslist ? JSON.parse(goodslist) : [];

			// 给button绑定点击事件
			// 利用事件委托
			goods.onclick = function(e){
				e = e || window.event;
				var target = e.target || e.srcElement;

				if(target.tagName.toLowerCase() === 'a'){
					// 获取当前li
					var currentLi = target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
					// console.log(currentLi)

					// 获取当前商品的guid
					var guid = currentLi.getAttribute('data-guid');

					// 关键：判断当前商品是否存在cookie
					for(var i=0;i<goodslist.length;i++){
						if(goodslist[i].guid === guid){
							goodslist[i].qty++;
							break;
						}
					}

					// 商品不存cookie中
					if(i===goodslist.length){
						// 获取<当前>商品的信息
						var goods = {
							guid:guid,
							imgurl:currentLi.children[0].children[0].children[0].src,
							name:currentLi.children[1].children[0].innerText,
							price:currentLi.children[1].children[1].children[0].children[1].children[0].children[0].innerText,
							qty:1
						};

						// 往数组中添加当前商品
						goodslist.push(goods);
					}

					

					// 设置cookie
					// cookie保存的是字符串
					// JSON.stringify()：把对象/数组转成json字符串
					setCookie('goodslist',JSON.stringify(goodslist));
				}
			}
			msg.onclick = function(e) {
	            e = e || window.event;
	            var target = e.target || e.srcElement;

	            if (target.tagName.toLowerCase() === 'a') {
	                var now = new Date('2017-5-9');

	                document.cookie = 'username=null;expires=' + now.toUTCString();

	                location.href = 'http://localhost/ztuan/src/html/datapage.html';
	            }
	        }
	});
});