require(['config'], function() {
    require(['jquery','com'], function($) {
        $(document).ready(function() {
            $('.nav-tit,.menu-list').on('mouseenter', function() {
                $('.menu-list').show();
            }).on('mouseleave', function() {
                $('.menu-list').hide();
            })
        });
        let $indexlist = $('.commodity-list');
        let pageNo = 1;
        let qty = 15;
        $.ajax({

            url: '../api/list.php',
            dataType: 'json',
            data: {
                page: pageNo,
                qty: qty
            },
            success: function(res) {
                // console.log(data)
                // return;
                showList(res);
                var pageQty = Math.ceil(res.total / res.qty);
                var page_str = '';
                for (var i = 1; i <= pageQty; i++) {
                    page_str += `<a  ${res.pageNo==i ?'class="sel"' : ''} href="#">${i}</a>`
                }
                $('.page').html(page_str);
            }
        });
        $('.page').on('click', 'a', function() {
            // console.log(this)
            $(this).addClass('sel').siblings().removeClass('sel');

            pageNo = $(this).text();
            $.ajax({

                url: '../api/list.php',
                dataType: 'json',
                data: {
                    page: pageNo,
                    qty: qty
                },
                success: function(res) {
                    // console.log(data)
                    // return;
                    showList(res);
                }
            });
            return false;
        });
            $list = $('.commodity-list');
            
            $list.on('click', 'a', function() {
                $(location).attr('href', '../html/datapage.html?id=' + this.id);

            });
        function showList(res) {

            let html = res.data.map(item => {
                return `
										<li class="commodity-item">
			                <a class="commodity-item-link" href="#" id="${item.id}">
			                    <div class="item-pic">
			                        <div class="pic-img">
			                            <img class="lazy" src="../${item.imgurl}">
			                        </div>
			                    </div>
			                    <div class="item-info">
			                        <div class="item-desc">
			                            <p class="item-name">${item.name}</p>
			                            
			                        </div>
			                        <div class="item-detail clearfix">
			                            <div class="item-detail-left">
			                                <div class="item-price">
			                                    <span class="xj-price"><em>￥</em><span>${item.price}</span></span>
			                                    
			                                </div>
			                                
			                            </div>
			                            <div class="item-btn">
			                                <span class="item-btn-con">马上抢</span>
			                            </div>
			                        </div>
			                    </div>
			                    
			                </a>
			            </li>
            			`
            }).join('');
            $indexlist.html(html);

        
        }
         msg.onclick = function(e) {
            e = e || window.event;
            var target = e.target || e.srcElement;

            if (target.tagName.toLowerCase() === 'a') {
                var now = new Date('2017-5-9');

                document.cookie = 'username=null;expires=' + now.toUTCString();

                location.href = 'http://localhost/ztuan/src/html/list.html';
            }
        }

    });
});
