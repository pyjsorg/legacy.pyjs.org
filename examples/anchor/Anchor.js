/* start module: Anchor */
$pyjs.loaded_modules['Anchor'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Anchor'].__was_initialized__) return $pyjs.loaded_modules['Anchor'];
	var $m = $pyjs.loaded_modules["Anchor"];
	$m.__repr__ = function() { return "<module: Anchor>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Anchor';
	$m.__name__ = __mod_name__;
	var $bool1,$eq2,$eq1;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
	$m['Anchor'] = $p['___import___']('pyjamas.ui.Anchor.Anchor', null, null, false);
	if ((($bool1=(($eq1=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq2='__main__')&&$eq1===null?true:
		($eq1===null?false:($eq2===null?false:
			((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
				((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
					$eq1==$eq2)))))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
			false :
			(typeof $bool1=='object'?
				(typeof $bool1.__nonzero__=='function'?
					$bool1.__nonzero__() :
					(typeof $bool1.__len__=='function'?
						($bool1.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) {
		$m['pyjd']['setup']('public/Anchor.html');
		$m['root'] = $m['RootPanel']();
		$m['image'] = $m['Image']('http://pyjs.org/img/pyjamas.128x128.png');
		$m['anchor'] = $pyjs_kwargs_call(null, $m['Anchor'], null, null, [{Widget:$m['image'], Href:'http://pyjs.org', Title:'Pyjs website'}]);
		$m['root']['add']($m['anchor']);
		$m['pyjd']['run']();
	}
	return this;
}; /* end Anchor */


/* end module: Anchor */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.Anchor.Anchor', 'pyjamas.ui.Anchor']
*/
