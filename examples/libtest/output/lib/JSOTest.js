/* start module: JSOTest */
$pyjs.loaded_modules['JSOTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['JSOTest'].__was_initialized__) return $pyjs.loaded_modules['JSOTest'];
	var $m = $pyjs.loaded_modules["JSOTest"];
	$m.__repr__ = function() { return "<module: JSOTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'JSOTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'JSOTest.py, line 1:\n    try:';
		$m.__track_lines__[2] = 'JSOTest.py, line 2:\n    import pyjslib';
		$m.__track_lines__[4] = 'JSOTest.py, line 4:\n    import __builtin__ as pyjslib';
		$m.__track_lines__[5] = 'JSOTest.py, line 5:\n    from UnitTest import UnitTest';
		$m.__track_lines__[7] = 'JSOTest.py, line 7:\n    class Foo:pass';
		$m.__track_lines__[9] = 'JSOTest.py, line 9:\n    class JSOTest(UnitTest):';
		$m.__track_lines__[13] = 'JSOTest.py, line 13:\n    def testJSObject(self):';
		$m.__track_lines__[14] = 'JSOTest.py, line 14:\n    f1 = Foo()';
		$m.__track_lines__[15] = "JSOTest.py, line 15:\n    d = {'f1key': f1}";
		$m.__track_lines__[16] = 'JSOTest.py, line 16:\n    self.assertEqual(pyjslib.toJSObjects(d).f1key, f1)';
		$m.__track_lines__[18] = 'JSOTest.py, line 18:\n    f2 = Foo()';
		$m.__track_lines__[19] = "JSOTest.py, line 19:\n    d = {'x':1, 'y':[1,2,3], 'z':{'a':3}, 'f': f1}";
		$m.__track_lines__[20] = "JSOTest.py, line 20:\n    dd = {'d':d}";
		$m.__track_lines__[21] = 'JSOTest.py, line 21:\n    self.assertEqual(pyjslib.toJSObjects(dd).d.z.a, 3)';
		var $pyjs_try_err;
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		$pyjs.track.module='JSOTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
		try {
			$pyjs.track.lineno=2;
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			$m['pyjslib'] = $p['___import___']('pyjslib', null);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		} catch($pyjs_try_err) {
			$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
			$pyjs.__active_exception_stack__ = null;
			$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='JSOTest';
			if (true) {
				$pyjs.track.lineno=4;
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				$m['pyjslib'] = $p['___import___']('__builtin__', null, null, false);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			}
		}
		$pyjs.track.lineno=5;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=7;
		$m['Foo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'JSOTest';
			$cls_definition.__md5__ = '40cd7f073a2c8227747e124918250a5d';
			$pyjs.track.lineno=7;
			$pyjs.track.lineno=7;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Foo', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=9;
		$m['JSOTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'JSOTest';
			$cls_definition.__md5__ = 'da361d63b3083af7c69f1e19b4a405dd';
			$pyjs.track.lineno=13;
			$method = $pyjs__bind_method2('testJSObject', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'da361d63b3083af7c69f1e19b4a405dd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var f1,dd,d,f2;
				$pyjs.track={module:'JSOTest', lineno:13};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='JSOTest';
				$pyjs.track.lineno=13;
				$pyjs.track.lineno=14;
				f1 = $m['Foo']();
				$pyjs.track.lineno=15;
				d = $p['dict']([['f1key', f1]]);
				$pyjs.track.lineno=16;
				self['assertEqual']($p['getattr']($m['pyjslib']['toJSObjects'](d), 'f1key'), f1);
				$pyjs.track.lineno=18;
				f2 = $m['Foo']();
				$pyjs.track.lineno=19;
				d = $p['dict']([['x', $constant_int_1], ['y', $p['list']([$constant_int_1, $constant_int_2, $constant_int_3])], ['z', $p['dict']([['a', $constant_int_3]])], ['f', f1]]);
				$pyjs.track.lineno=20;
				dd = $p['dict']([['d', d]]);
				$pyjs.track.lineno=21;
				self['assertEqual']($p['getattr']($p['getattr']($p['getattr']($m['pyjslib']['toJSObjects'](dd), 'd'), 'z'), 'a'), $constant_int_3);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testJSObject'] = $method;
			$pyjs.track.lineno=9;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('JSOTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end JSOTest */


/* end module: JSOTest */


/*
PYJS_DEPS: ['pyjslib', '__builtin__', 'UnitTest.UnitTest', 'UnitTest']
*/
