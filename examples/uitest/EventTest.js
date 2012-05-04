/* start module: EventTest */
$pyjs.loaded_modules['EventTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['EventTest'].__was_initialized__) return $pyjs.loaded_modules['EventTest'];
	var $m = $pyjs.loaded_modules["EventTest"];
	$m.__repr__ = function() { return "<module: EventTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'EventTest';
	$m.__name__ = __mod_name__;


	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['EventTest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'EventTest';
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $eq2,$eq1;
			self['assertTrue']((($eq1=sender)===($eq2=$p['getattr'](self, 'b'))&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2))))));
			self.buttonClickTestOccurred = true;
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('testButtonClick', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool2,$bool1;
			self.buttonClickTestOccurred = false;
			self.b = $m['Button']('Click Me', self);
			$m['RootPanel']('tests')['add']($p['getattr'](self, 'b'));
			self['write_test_output']('addButton');
			$m['DOM']['buttonClick'](self['b']['getElement']());
			if ((($bool2=!(($bool1=$m['RootPanel']('tests')['remove']($p['getattr'](self, 'b'))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['fail']('Button added but apparently not owned by RootPanel()');
			}
			self['write_test_output']('removeButton');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testButtonClick'] = $method;
		$method = $pyjs__bind_method2('lastTestChecks', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['assertTrue']($p['getattr'](self, 'buttonClickTestOccurred'), 'testButtonClick failed');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['lastTestChecks'] = $method;
		var $bases = new Array($m['UnitTest']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('EventTest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end EventTest */


/* end module: EventTest */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'UnitTest.UnitTest', 'UnitTest', 'pyjamas.DOM']
*/
