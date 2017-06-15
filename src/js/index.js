require(['config'], function() {
    require(['jquery','unslider','lazyload','com'], function() {
        $(document).ready(function() {
            //轮播图插件
            var chajian = $('#banner').unslider({
                    dots: true,
                }, 300),
                data = chajian.data('unslider');

            $('.unslider-arrow').click(function() {
                var fn = this.className.split(' ')[1];
                data[fn]();
            });

            //吸顶
            if ($("#suction-tip").length > 0) {
                var Tip = $("#suction-tip");
                var Oposed = $("#occupy-position");
                var tipTop = Tip.offset().top;
                $(window).on("scroll", function() {
                    if ($(window).scrollTop() >= tipTop) {
                        Tip.addClass("fixed");
                        Tip.find(".good-classify").hide();
                        Tip.find(".suction-tip").removeClass("marginT");
                        Oposed.show();
                    } else {
                        Tip.removeClass("fixed")
                        Tip.find(".good-classify").show();
                        Tip.find(".suction-tip").addClass("marginT");
                        Oposed.hide();
                    }


                });
            };
            //点击置顶
            if ($("#right-code").length > 0) {
                $("#right-code").hover(
                    function() {
                        $("#code-pic").show()
                    },
                    function() {
                        $("#code-pic").hide()
                    })
                $("#go-up").on("click", function() {
                    $("body,html").animate({
                        scrollTop: "0"
                    }, 500)
                });
            }
            //拖动显示底部右侧
            $(window).scroll(function() {
                if ($(window).scrollTop() > 1000) {
                    $(".widget").fadeIn('slow');
                } else {
                    $(".widget").fadeOut('slow');
                }
            });
            let pageNo = 1;
            let qty = 10;
            $.ajax({

                url: '../src/api/indexs.php',
                dataType: 'json',
                data: {
                    page: pageNo,
                    qty: 21
                },
                success: function(data) {

                    let $indexlist = $('.commodity-list');
                    let html = data.map(item => {
                        return `
                              <li class="commodity-item">
                                <a class="commodity-item-link" href="#" id="${item.id}">
                                    <div class="item-pic">
                                        <div class="pic-img">
                                            <img class="lazy" data-original="http://localhost/ztuan/src/${item.imgurl}" src="${item.imgurl}">
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
                    //懒加载
                    $("img.lazy").lazyload({
                        effect: "fadeIn"
                    });

                }

            });
            $list = $('.commodity-list');

            $list.on('click', 'a', function() {
                $(location).attr('href', 'html/datapage.html?id=' + this.id);

            });

        });
        msg.onclick = function(e) {
            e = e || window.event;
            var target = e.target || e.srcElement;

            if (target.tagName.toLowerCase() === 'a') {
                var now = new Date('2017-1-19');

                document.cookie = 'username=null;expires=' + now.toUTCString();

                location.href = 'http://localhost/ztuan/src/index.html';
            }
        }
    });
});
