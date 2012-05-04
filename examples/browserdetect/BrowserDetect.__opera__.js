/* start module: BrowserDetect */
$pyjs.loaded_modules['BrowserDetect'] = function (__mod_name__) {
	if($pyjs.loaded_modules['BrowserDetect'].__was_initialized__) return $pyjs.loaded_modules['BrowserDetect'];
	var $m = $pyjs.loaded_modules["BrowserDetect"];
	$m.__repr__ = function() { return "<module: BrowserDetect>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'BrowserDetect';
	$m.__name__ = __mod_name__;
	var $bool2,$eq1,$eq2;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['BrowserDetect'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'BrowserDetect';
		$method = $pyjs__bind_method2('i_am', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 'Opera';
		}
	, 1, [null,null,['self']]);
		$cls_definition['i_am'] = $method;
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.l = $m['Label']();
			$m['RootPanel']()['add']($p['getattr'](self, 'l'));
			self['display']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('display', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool1,i_am;
			i_am = self['i_am']();
			if ((($bool1=(i_am === null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['l']['setText']('Browser not detected/supported');
			}
			else {
				self['l']['setText']($p['sprintf']('%s detected. This is the %s version of the application.', $p['tuple']([i_am, i_am])));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['display'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('BrowserDetect', $p['tuple']($bases), $data);
	})();
	if ((($bool2=(($eq1=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq2='__main__')&&$eq1===null?true:
		($eq1===null?false:($eq2===null?false:
			((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
				((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
					$eq1==$eq2)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
			false :
			(typeof $bool2=='object'?
				(typeof $bool2.__nonzero__=='function'?
					$bool2.__nonzero__() :
					(typeof $bool2.__len__=='function'?
						($bool2.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) {
		$m['pyjd']['setup']('./BrowserDetect.html');
		$m['app'] = $m['BrowserDetect']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end BrowserDetect */


/* end module: BrowserDetect */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.Label.Label', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Label', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel']
*/
