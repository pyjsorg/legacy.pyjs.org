/* start module: AjaxTest */
$pyjs.loaded_modules['AjaxTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['AjaxTest'].__was_initialized__) return $pyjs.loaded_modules['AjaxTest'];
	var $m = $pyjs.loaded_modules["AjaxTest"];
	$m.__repr__ = function() { return "<module: AjaxTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'AjaxTest';
	$m.__name__ = __mod_name__;
	var $eq1,$eq2,$bool1;

	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['pyjslib'] = $p['___import___']('pyjslib', null);
	$m['dynamic'] = $p['___import___']('dynamic', null);
	$m['greet'] = function(sender) {


       test_fn();
    
	};
	$m['greet'].__name__ = 'greet';

	$m['greet'].__bind_type__ = 0;
	$m['greet'].__args__ = [null,null,['sender']];
	$m['AjaxTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'AjaxTest';
		$cls_definition['ClickMe'] = 'Click me';
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var b;
			b = $m['Button']($p['getattr'](self, 'ClickMe'), $m['greet']);
			$m['RootPanel']()['add'](b);
			$pyjs_kwargs_call($m['dynamic'], 'ajax_import', null, null, [{names:$p['list'](['test_fn'])}, 'test.cache.js']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('AjaxTest', $p['tuple']($bases), $data);
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
		$m['x'] = $m['AjaxTest']();
		$m['x']['onModuleLoad']();
	}
	return this;
}; /* end AjaxTest */


/* end module: AjaxTest */


/*
PYJS_DEPS: ['pyjamas.ui.Button.Button', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Button', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.Window', 'pyjamas.DOM', 'pyjslib', 'dynamic']
*/
