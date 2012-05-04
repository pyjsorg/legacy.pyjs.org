/* start module: LabelTest */
$pyjs.loaded_modules['LabelTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['LabelTest'].__was_initialized__) return $pyjs.loaded_modules['LabelTest'];
	var $m = $pyjs.loaded_modules["LabelTest"];
	$m.__repr__ = function() { return "<module: LabelTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'LabelTest';
	$m.__name__ = __mod_name__;


	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
	$m['LabelTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'LabelTest';
		$method = $pyjs__bind_method2('testLabelAdd', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool2,$bool1;
			self.l = $pyjs_kwargs_call(null, $m['Label'], null, null, [{StyleName:'teststyle'}, 'Hello World (label)']);
			$m['RootPanel']('tests')['add']($p['getattr'](self, 'l'));
			self['write_test_output']('addlabel');
			if ((($bool2=!(($bool1=$m['RootPanel']('tests')['remove']($p['getattr'](self, 'l'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
				false :
				(typeof $bool1=='object'?
					(typeof $bool1.__nonzero__=='function'?
						$bool1.__nonzero__() :
						(typeof $bool1.__len__=='function'?
							($bool1.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				self['fail']('Label added but apparently not owned by RootPanel()');
			}
			self['write_test_output']('removelabel');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testLabelAdd'] = $method;
		var $bases = new Array($m['UnitTest']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('LabelTest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end LabelTest */


/* end module: LabelTest */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'UnitTest.UnitTest', 'UnitTest']
*/
