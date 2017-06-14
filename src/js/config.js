require.config({
	urlArgs:'v=' + Date.now(),
	paths:{
		"jquery":"../lib/jquery-3.2.1",
		"unslider":"../lib/unslider",
		"lazyload":"../lib/jquery.lazyload",
		"gdszoom":"../lib/jquery.gdszoom",
		"fly":"../lib/jquery.fly.min",
		"common":"../lib/common",
		"com":"../lib/com"
	},
	shim:{
		'unslider':['jquery'],
		'lazyload':['jquery'],
		'gdszoom':['jquery'],
		'fly':['jquery']
	}
});