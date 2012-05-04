/* start module: HangMan */
$pyjs.loaded_modules['HangMan'] = function (__mod_name__) {
	if($pyjs.loaded_modules['HangMan'].__was_initialized__) return $pyjs.loaded_modules['HangMan'];
	var $m = $pyjs.loaded_modules["HangMan"];
	$m.__repr__ = function() { return "<module: HangMan>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'HangMan';
	$m.__name__ = __mod_name__;
	var $bool1,$eq1,$eq2;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['HangManWidget'] = $p['___import___']('HangManWidget.HangManWidget', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['HangMan'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'HangMan';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.webspace = $m['HangManWidget']();
			$m['RootPanel']()['add']($p['getattr'](self, 'webspace'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HangMan', $p['tuple']($bases), $data);
	})();
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
		$m['pyjd']['setup']('public/HangMan.html');
		$m['app'] = $m['HangMan']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end HangMan */


/* end module: HangMan */


/*
PYJS_DEPS: ['pyjd', 'HangManWidget.HangManWidget', 'HangManWidget', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel']
*/
