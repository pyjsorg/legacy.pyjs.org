/* start module: DockPanelTest */
$pyjs.loaded_modules['DockPanelTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['DockPanelTest'].__was_initialized__) return $pyjs.loaded_modules['DockPanelTest'];
	var $m = $pyjs.loaded_modules["DockPanelTest"];
	$m.__repr__ = function() { return "<module: DockPanelTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'DockPanelTest';
	$m.__name__ = __mod_name__;


	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
	$m['DockPanelTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'DockPanelTest';
		$method = $pyjs__bind_method2('testDockAdd', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool2,$bool1;
			self.d = $m['DockPanel']();
			$m['RootPanel']('tests')['add']($p['getattr'](self, 'd'));
			self['write_test_output']('adddockpanel');
			if ((($bool2=!(($bool1=$m['RootPanel']('tests')['remove']($p['getattr'](self, 'd'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['fail']('DockPanel added but apparently not owned by RootPanel()');
			}
			self['write_test_output']('removedockpanel');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testDockAdd'] = $method;
		$method = $pyjs__bind_method2('testDockAddCentre', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool3,l2,l,$bool4;
			self.d = $m['DockPanel']();
			$m['RootPanel']('tests')['add']($p['getattr'](self, 'd'));
			l = $pyjs_kwargs_call(null, $m['Label'], null, null, [{StyleName:'teststyle'}, 'Hello World (label)']);
			self['d']['add'](l, $p['getattr']($m['DockPanel'], 'CENTER'));
			self['write_test_output']('addcentrelabel');
			self['d']['remove'](l);
			self['write_test_output']('removecentrelabel');
			l2 = $pyjs_kwargs_call(null, $m['Label'], null, null, [{StyleName:'teststyle'}, 'Hello World 2 (label)']);
			self['d']['add'](l2, $p['getattr']($m['DockPanel'], 'CENTER'));
			self['write_test_output']('addcentrelabel2');
			if ((($bool4=!(($bool3=$m['RootPanel']('tests')['remove']($p['getattr'](self, 'd'))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3.__nonzero__=='function'?
						$bool3.__nonzero__() :
						(typeof $bool3.__len__=='function'?
							($bool3.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4.__nonzero__=='function'?
							$bool4.__nonzero__() :
							(typeof $bool4.__len__=='function'?
								($bool4.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['fail']('DockPanel added but apparently not owned by RootPanel()');
			}
			self['write_test_output']('removedock');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testDockAddCentre'] = $method;
		var $bases = new Array($m['UnitTest']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DockPanelTest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end DockPanelTest */


/* end module: DockPanelTest */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'UnitTest.UnitTest', 'UnitTest']
*/
