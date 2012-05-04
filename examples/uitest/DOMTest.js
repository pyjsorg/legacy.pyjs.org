/* start module: DOMTest */
$pyjs.loaded_modules['DOMTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['DOMTest'].__was_initialized__) return $pyjs.loaded_modules['DOMTest'];
	var $m = $pyjs.loaded_modules["DOMTest"];
	$m.__repr__ = function() { return "<module: DOMTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'DOMTest';
	$m.__name__ = __mod_name__;


	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
	$m['DOMTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'DOMTest';
		$method = $pyjs__bind_method2('testDivHTML', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var e,div;
			e = $m['DOM']['getElementById']('tests');
			div = $m['DOM']['createElement']('div');
			$m['DOM']['appendChild'](e, div);
			$m['DOM']['setInnerHTML'](div, 'hello world\n');
			self['write_test_output']('addDiv');
			$m['DOM']['removeChild'](e, div);
			self['write_test_output']('removeDiv');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testDivHTML'] = $method;
		$method = $pyjs__bind_method2('testDivText', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var e,div,div2;
			e = $m['DOM']['getElementById']('tests');
			div = $m['DOM']['createElement']('div');
			$m['DOM']['appendChild'](e, div);
			div2 = $m['DOM']['createElement']('div');
			$m['DOM']['appendChild'](div, div2);
			$m['DOM']['setInnerText'](div2, 'hello world\n');
			self['write_test_output']('addDiv');
			$m['DOM']['removeChild'](e, div);
			self['write_test_output']('removeDiv');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testDivText'] = $method;
		var $bases = new Array($m['UnitTest']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DOMTest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end DOMTest */


/* end module: DOMTest */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.DOM', 'UnitTest.UnitTest', 'UnitTest']
*/
