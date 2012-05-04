/* start module: MainTest */
$pyjs.loaded_modules['MainTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['MainTest'].__was_initialized__) return $pyjs.loaded_modules['MainTest'];
	var $m = $pyjs.loaded_modules["MainTest"];
	$m.__repr__ = function() { return "<module: MainTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'MainTest';
	$m.__name__ = __mod_name__;
	var $bool1,$eq2,$eq1;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['log'] = function(text) {

		$m['Window']['alert'](text);
		return null;
	};
	$m['log'].__name__ = 'log';

	$m['log'].__bind_type__ = 0;
	$m['log'].__args__ = [null,null,['text']];
	$m['global_printable'] = function(text) {

		$m['log'](text);
		return null;
	};
	$m['global_printable'].__name__ = 'global_printable';

	$m['global_printable'].__bind_type__ = 0;
	$m['global_printable'].__args__ = [null,null,['text']];
	$m['MainTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'MainTest';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var s;
			s = (typeof StoringObject == "undefined"?$m.StoringObject:StoringObject)();
			s['save']($p['getattr'](self, 'printable'));
			s.message = 'called from storing object via self.printable';
			s['$$call']();
			s['save']($p['getattr'](self, 'printable'));
			s.message = "called from storing object using getattr(self, 'printable') ";
			s['$$call']();
			s['save']($m['global_printable']);
			s.message = 'called from storing object using global_printable';
			s['$$call']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('printable', function(text) {

			$m['log'](text);
			return null;
		}
	, 3, [null,null,['text']]);
		$cls_definition['printable'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('MainTest', $p['tuple']($bases), $data);
	})();
	$m['StoringObject'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'MainTest';
		$method = $pyjs__bind_method2('save', function(func) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				func = arguments[1];
			}

			self.func = func;
			return null;
		}
	, 1, [null,null,['self'],['func']]);
		$cls_definition['save'] = $method;
		$method = $pyjs__bind_method2('$$call', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['func']($p['getattr'](self, 'message'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['$$call'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('StoringObject', $p['tuple']($bases), $data);
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
		$m['pyjd']['setup']('MainTest.html');
		$m['app'] = $m['MainTest']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end MainTest */


/* end module: MainTest */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.Window', 'pyjamas']
*/
