/* start module: NameTest */
$pyjs.loaded_modules['NameTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['NameTest'].__was_initialized__) return $pyjs.loaded_modules['NameTest'];
	var $m = $pyjs.loaded_modules["NameTest"];
	$m.__repr__ = function() { return "<module: NameTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'NameTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'NameTest.py, line 1:\n    from UnitTest import UnitTest';
		$m.__track_lines__[3] = 'NameTest.py, line 3:\n    class Handler:';
		$m.__track_lines__[5] = 'NameTest.py, line 5:\n    def __init__(self, x):';
		$m.__track_lines__[6] = 'NameTest.py, line 6:\n    self._x = x';
		$m.__track_lines__[8] = 'NameTest.py, line 8:\n    def get_name(self):';
		$m.__track_lines__[9] = 'NameTest.py, line 9:\n    return self.__class__.__name__';
		$m.__track_lines__[11] = 'NameTest.py, line 11:\n    def aProcedure():';
		$m.__track_lines__[12] = 'NameTest.py, line 12:\n    return aProcedure.__name__';
		$m.__track_lines__[14] = 'NameTest.py, line 14:\n    class NameTest(UnitTest):';
		$m.__track_lines__[16] = 'NameTest.py, line 16:\n    def testClassName(self):';
		$m.__track_lines__[17] = 'NameTest.py, line 17:\n    self.assertEqual(Handler.__name__, "Handler")';
		$m.__track_lines__[18] = 'NameTest.py, line 18:\n    self.assertEqual(Handler.get_name.__name__, "get_name")';
		$m.__track_lines__[19] = 'NameTest.py, line 19:\n    x = Handler(5)';
		$m.__track_lines__[20] = 'NameTest.py, line 20:\n    self.assertEqual(x.__class__.__name__, "Handler")';
		$m.__track_lines__[21] = 'NameTest.py, line 21:\n    self.assertEqual(x.get_name.__name__, "get_name")';
		$m.__track_lines__[23] = 'NameTest.py, line 23:\n    def testProcedureName(self):';
		$m.__track_lines__[24] = 'NameTest.py, line 24:\n    self.assertEqual(aProcedure.__name__, "aProcedure")';
		$m.__track_lines__[25] = 'NameTest.py, line 25:\n    self.assertEqual(aProcedure(), "aProcedure")';
		$m.__track_lines__[27] = 'NameTest.py, line 27:\n    def testModuleName(self):';
		$m.__track_lines__[28] = 'NameTest.py, line 28:\n    self.assertEqual(__name__, "NameTest")';
		$m.__track_lines__[30] = 'NameTest.py, line 30:\n    def testImportName(self):';
		$m.__track_lines__[31] = 'NameTest.py, line 31:\n    import foo as a';
		$m.__track_lines__[32] = "NameTest.py, line 32:\n    self.assertEqual(a.__name__, 'foo')";
		$m.__track_lines__[36] = 'NameTest.py, line 36:\n    foo = object()';
		$m.__track_lines__[37] = 'NameTest.py, line 37:\n    import foo';
		$m.__track_lines__[38] = "NameTest.py, line 38:\n    self.assertEqual(foo.__name__, 'foo')";

		var $constant_int_5 = new $p['int'](5);
		$pyjs.track.module='NameTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=3;
		$m['Handler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'NameTest';
			$cls_definition.__md5__ = '895e8820b6183e125d70c583be7e72c0';
			$pyjs.track.lineno=5;
			$method = $pyjs__bind_method2('__init__', function(x) {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '895e8820b6183e125d70c583be7e72c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'NameTest', lineno:5};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NameTest';
				$pyjs.track.lineno=5;
				$pyjs.track.lineno=6;
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_x', x) : $p['setattr'](self, '_x', x); 
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self'],['x']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=8;
			$method = $pyjs__bind_method2('get_name', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '895e8820b6183e125d70c583be7e72c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'NameTest', lineno:8};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NameTest';
				$pyjs.track.lineno=8;
				$pyjs.track.lineno=9;
				$pyjs.track.lineno=9;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, '__class__'), '__name__');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_name'] = $method;
			$pyjs.track.lineno=3;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Handler', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=11;
		$m['aProcedure'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'NameTest',lineno:11};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='NameTest';
			$pyjs.track.lineno=11;
			$pyjs.track.lineno=12;
			$pyjs.track.lineno=12;
			var $pyjs__ret = $p['getattr']($m['aProcedure'], '__name__');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['aProcedure'].__name__ = 'aProcedure';

		$m['aProcedure'].__bind_type__ = 0;
		$m['aProcedure'].__args__ = [null,null];
		$pyjs.track.lineno=14;
		$m['NameTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'NameTest';
			$cls_definition.__md5__ = '5c966cc1b3c528bbeca43f63f3e28c6a';
			$pyjs.track.lineno=16;
			$method = $pyjs__bind_method2('testClassName', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '5c966cc1b3c528bbeca43f63f3e28c6a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var x;
				$pyjs.track={module:'NameTest', lineno:16};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NameTest';
				$pyjs.track.lineno=16;
				$pyjs.track.lineno=17;
				self['assertEqual']($p['getattr']($m['Handler'], '__name__'), 'Handler');
				$pyjs.track.lineno=18;
				self['assertEqual']($p['getattr']($p['getattr']($m['Handler'], 'get_name'), '__name__'), 'get_name');
				$pyjs.track.lineno=19;
				x = $m['Handler']($constant_int_5);
				$pyjs.track.lineno=20;
				self['assertEqual']($p['getattr']($p['getattr'](x, '__class__'), '__name__'), 'Handler');
				$pyjs.track.lineno=21;
				self['assertEqual']($p['getattr']($p['getattr'](x, 'get_name'), '__name__'), 'get_name');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testClassName'] = $method;
			$pyjs.track.lineno=23;
			$method = $pyjs__bind_method2('testProcedureName', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '5c966cc1b3c528bbeca43f63f3e28c6a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'NameTest', lineno:23};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NameTest';
				$pyjs.track.lineno=23;
				$pyjs.track.lineno=24;
				self['assertEqual']($p['getattr']($m['aProcedure'], '__name__'), 'aProcedure');
				$pyjs.track.lineno=25;
				self['assertEqual']($m['aProcedure'](), 'aProcedure');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testProcedureName'] = $method;
			$pyjs.track.lineno=27;
			$method = $pyjs__bind_method2('testModuleName', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '5c966cc1b3c528bbeca43f63f3e28c6a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'NameTest', lineno:27};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NameTest';
				$pyjs.track.lineno=27;
				$pyjs.track.lineno=28;
				self['assertEqual']((typeof __name__ == "undefined"?$m.__name__:__name__), 'NameTest');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testModuleName'] = $method;
			$pyjs.track.lineno=30;
			$method = $pyjs__bind_method2('testImportName', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '5c966cc1b3c528bbeca43f63f3e28c6a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var a,foo;
				$pyjs.track={module:'NameTest', lineno:30};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='NameTest';
				$pyjs.track.lineno=30;
				$pyjs.track.lineno=31;
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				a = $p['___import___']('foo', null, null, false);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.lineno=32;
				self['assertEqual']($p['getattr'](a, '__name__'), 'foo');
				$pyjs.track.lineno=36;
				foo = $p['object']();
				$pyjs.track.lineno=37;
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				foo = $p['___import___']('foo', null);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.lineno=38;
				self['assertEqual']($p['getattr'](foo, '__name__'), 'foo');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testImportName'] = $method;
			$pyjs.track.lineno=14;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('NameTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end NameTest */


/* end module: NameTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'foo']
*/
