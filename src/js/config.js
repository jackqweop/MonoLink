require.config({
	urlArgs:'v=' + Date.now(),
	paths:{
		"jquery":"../lib/jquery-3.2.1",
		"unslider":"../lib/unslider",
		"lazyload":"../lib/jquery.lazyload"
	},
	shim:{
		'unslider':['jquery'],
		'lazyload':['jquery']
	}
});