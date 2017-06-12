require(['config'], function() {
	require(['jquery'], function() {
			$(document).ready(function() {
	        $('.nav-tit,.menu-list').on('mouseenter', function() {
	            $('.menu-list').show();
	        }).on('mouseleave', function() {
	            $('.menu-list').hide();
	        })
	    });
	});
});