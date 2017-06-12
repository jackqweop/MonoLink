 
$(function(){

	$(".header-hover").on("mouseover",function(){
		$(this).addClass("active");
		$(this).find(".hover-box").show();
	})
	$(".header-hover").on("mouseout",function(){
		$(this).removeClass("active");
		$(this).find(".hover-box").hide();
	});

	$("#search-text").on("focus",function(){
		$("#text").hide();
	})
	$("#search-text").on("blur",function(){
		$("#text").show();
	})
	$("#text").on("click",function(){
		$(this).hide();
		$("#search-text").focus();
	});

	var showUI=$(".showUI");
	$(".nav-tit").hover(function(){
		$(this).css({cursor:"pointer"});
		showUI.show()
	},function(){
		showUI.hide()
	});
	showUI.hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	})
	
	
	
	if($("#suction-tip").length>0)
	{
		var Tip=$("#suction-tip");
		var Oposed=$("#occupy-position");
		var tipTop=Tip.offset().top;
		$(window).on("scroll",function(){
			if($(window).scrollTop()>=tipTop)
			{
				Tip.addClass("fixed");
				Tip.find(".good-classify").hide();
				Tip.find(".suction-tip").removeClass("marginT");
				Oposed.show();
			}
			else
			{
				Tip.removeClass("fixed")
				Tip.find(".good-classify").show();
				Tip.find(".suction-tip").addClass("marginT");
				Oposed.hide();
			}
            if($(window).scrollTop()>=$(".trailer-tit").offset().top-Tip.height())
			{
				Tip.removeClass("fixed");
				Tip.find(".good-classify").show();
				Tip.find(".suction-tip").addClass("marginT");
				Oposed.hide();
			}

		});
	}

	
	if($("#right-code").length>0)
	{
		$("#right-code").hover(
		function()
		{$("#code-pic").show()},
		function(){
		$("#code-pic").hide()	
		})
		$("#go-up").on("click",function(){
			$("body,html").animate({scrollTop:"0"},500)
		});
	
	}
	$('#search-text').focus(function(){
            $(this).val('');
        })
        
        
        $('.sorts').children('li').on('click',function(){
            $('.sorts').children('li').removeClass('active');
            $(this).addClass('active');
        })
})

