/* start module: Hello */
$pyjs.loaded_modules['Hello'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Hello'].__was_initialized__) return $pyjs.loaded_modules['Hello'];
	var $m = $pyjs.loaded_modules["Hello"];
	$m.__repr__ = function() { return "<module: Hello>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Hello';
	$m.__name__ = __mod_name__;
	var $bool1,$eq1,$eq2;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['pygwt'] = $p['___import___']('pygwt', null);
	$m['greet'] = function(fred) {

		fred['setText']('No, really click me!');
		$m['Window']['alert']('Hello, AJAX!');
		return null;
	};
	$m['greet'].__name__ = 'greet';

	$m['greet'].__bind_type__ = 0;
	$m['greet'].__args__ = [null,null,['fred']];
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
		$m['pyjd']['setup']('public/Hello.html?fred=foo#me');
		$m['b'] = $pyjs_kwargs_call(null, $m['Button'], null, null, [{StyleName:'teststyle'}, 'Click me', $m['greet']]);
		$m['h'] = $pyjs_kwargs_call(null, $m['HTML'], null, null, [{StyleName:'teststyle'}, '<b>Hello World</b> (html)']);
		$m['l'] = $pyjs_kwargs_call(null, $m['Label'], null, null, [{StyleName:'teststyle'}, 'Hello World (label)']);
		$m['base'] = $pyjs_kwargs_call(null, $m['HTML'], null, null, [{StyleName:'teststyle'}, $p['sprintf']('Hello from %s', $m['pygwt']['getModuleBaseURL']())]);
		$m['RootPanel']()['add']($m['b']);
		$m['RootPanel']()['add']($m['h']);
		$m['RootPanel']()['add']($m['l']);
		$m['RootPanel']()['add']($m['base']);
		$m['pyjd']['run']();
	}
	return this;
}; /* end Hello */


/* end module: Hello */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.Window', 'pygwt']
*/
