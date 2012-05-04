/* start module: OnClickTest */
$pyjs.loaded_modules['OnClickTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['OnClickTest'].__was_initialized__) return $pyjs.loaded_modules['OnClickTest'];
	var $m = $pyjs.loaded_modules["OnClickTest"];
	$m.__repr__ = function() { return "<module: OnClickTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'OnClickTest';
	$m.__name__ = __mod_name__;
	var $bool1,$eq2,$eq1;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['onButtonClick'] = function(sender) {

		$m['Window']['alert']('function called');
		return null;
	};
	$m['onButtonClick'].__name__ = 'onButtonClick';

	$m['onButtonClick'].__bind_type__ = 0;
	$m['onButtonClick'].__args__ = [null,null,['sender']];
	$m['Object'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'OnClickTest';
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Object', $p['tuple']($bases), $data);
	})();
	$m['OnClickTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'OnClickTest';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var obj,localFunc;
			localFunc = function(sender) {

				$m['Window']['alert']('anon object + local func called');
				return null;
			};
			localFunc.__name__ = 'localFunc';

			localFunc.__bind_type__ = 0;
			localFunc.__args__ = [null,null,['sender']];
			obj = $m['Object']();
			$p['setattr'](obj, 'onClick', localFunc);
			self.b = $m['Button']('function callback', $m['onButtonClick']);
			self.b2 = $m['Button']('object callback', self);
			self.b3 = $m['Button']('anon object + local func callback', obj);
			$m['RootPanel']()['add']($p['getattr'](self, 'b'));
			$m['RootPanel']()['add']($p['getattr'](self, 'b2'));
			$m['RootPanel']()['add']($p['getattr'](self, 'b3'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			$m['Window']['alert']('object called');
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('OnClickTest', $p['tuple']($bases), $data);
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
		$m['pyjd']['setup']('./OnClickTest.html');
		$m['app'] = $m['OnClickTest']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end OnClickTest */


/* end module: OnClickTest */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.Button.Button', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Button', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.Window']
*/
