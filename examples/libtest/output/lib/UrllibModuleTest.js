/* start module: UrllibModuleTest */
$pyjs.loaded_modules['UrllibModuleTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['UrllibModuleTest'].__was_initialized__) return $pyjs.loaded_modules['UrllibModuleTest'];
	var $m = $pyjs.loaded_modules["UrllibModuleTest"];
	$m.__repr__ = function() { return "<module: UrllibModuleTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'UrllibModuleTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'UrllibModuleTest.py, line 1:\n    # Testing time module';
		$m.__track_lines__[3] = 'UrllibModuleTest.py, line 3:\n    import sys';
		$m.__track_lines__[4] = 'UrllibModuleTest.py, line 4:\n    import UnitTest';
		$m.__track_lines__[5] = 'UrllibModuleTest.py, line 5:\n    import urllib';
		$m.__track_lines__[8] = 'UrllibModuleTest.py, line 8:\n    class UrllibModuleTest(UnitTest.UnitTest):';
		$m.__track_lines__[10] = 'UrllibModuleTest.py, line 10:\n    def test_quote(self):';
		$m.__track_lines__[11] = 'UrllibModuleTest.py, line 11:\n    self.assertEqual(urllib.quote("hey"), "hey")';
		$m.__track_lines__[12] = 'UrllibModuleTest.py, line 12:\n    self.assertEqual(urllib.quote("$%&/?/+ s", safe=""),';
		$m.__track_lines__[15] = 'UrllibModuleTest.py, line 15:\n    def test_urlencode(self):';
		$m.__track_lines__[16] = 'UrllibModuleTest.py, line 16:\n    self.assertEqual(urllib.urlencode({"a": 34, "bbb": "ccc"}),';
		$m.__track_lines__[18] = 'UrllibModuleTest.py, line 18:\n    self.assertEqual(urllib.urlencode({"a": 34}), "a=34")';
		$m.__track_lines__[19] = 'UrllibModuleTest.py, line 19:\n    self.assertEqual(urllib.urlencode({}), "")';
		$m.__track_lines__[20] = 'UrllibModuleTest.py, line 20:\n    self.assertEqual(urllib.urlencode({"a": 34, "bbb": "$%&s"}),';

		var $constant_int_34 = new $p['int'](34);
		$pyjs.track.module='UrllibModuleTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=3;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=4;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=5;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['urllib'] = $p['___import___']('urllib', null);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=8;
		$m['UrllibModuleTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'UrllibModuleTest';
			$cls_definition.__md5__ = '19858cde8aef66b6ab2dd26344efb15b';
			$pyjs.track.lineno=10;
			$method = $pyjs__bind_method2('test_quote', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '19858cde8aef66b6ab2dd26344efb15b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'UrllibModuleTest', lineno:10};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UrllibModuleTest';
				$pyjs.track.lineno=10;
				$pyjs.track.lineno=11;
				self['assertEqual']($m['urllib']['quote']('hey'), 'hey');
				$pyjs.track.lineno=12;
				self['assertEqual']($pyjs_kwargs_call($m['urllib'], 'quote', null, null, [{safe:''}, '$%&/?/+ s']), '%24%25%26%2F%3F%2F%2B%20s');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_quote'] = $method;
			$pyjs.track.lineno=15;
			$method = $pyjs__bind_method2('test_urlencode', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '19858cde8aef66b6ab2dd26344efb15b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'UrllibModuleTest', lineno:15};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='UrllibModuleTest';
				$pyjs.track.lineno=15;
				$pyjs.track.lineno=16;
				self['assertEqual']($m['urllib']['urlencode']($p['dict']([['a', $constant_int_34], ['bbb', 'ccc']])), 'a=34&bbb=ccc');
				$pyjs.track.lineno=18;
				self['assertEqual']($m['urllib']['urlencode']($p['dict']([['a', $constant_int_34]])), 'a=34');
				$pyjs.track.lineno=19;
				self['assertEqual']($m['urllib']['urlencode']($p['dict']([])), '');
				$pyjs.track.lineno=20;
				self['assertEqual']($m['urllib']['urlencode']($p['dict']([['a', $constant_int_34], ['bbb', '$%&s']])), 'a=34&bbb=%24%25%26s');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_urlencode'] = $method;
			$pyjs.track.lineno=8;
			var $bases = new Array($p['getattr']($m['UnitTest'], 'UnitTest'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('UrllibModuleTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end UrllibModuleTest */


/* end module: UrllibModuleTest */


/*
PYJS_DEPS: ['sys', 'UnitTest', 'urllib']
*/
