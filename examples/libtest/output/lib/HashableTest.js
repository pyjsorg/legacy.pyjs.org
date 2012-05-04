/* start module: HashableTest */
$pyjs.loaded_modules['HashableTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['HashableTest'].__was_initialized__) return $pyjs.loaded_modules['HashableTest'];
	var $m = $pyjs.loaded_modules["HashableTest"];
	$m.__repr__ = function() { return "<module: HashableTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'HashableTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'HashableTest.py, line 1:\n    from UnitTest import UnitTest';
		$m.__track_lines__[4] = 'HashableTest.py, line 4:\n    class Foo(object):';
		$m.__track_lines__[5] = 'HashableTest.py, line 5:\n    def __init__(self):';
		$m.__track_lines__[6] = 'HashableTest.py, line 6:\n    pass';
		$m.__track_lines__[7] = 'HashableTest.py, line 7:\n    def bar(self):';
		$m.__track_lines__[8] = 'HashableTest.py, line 8:\n    pass';
		$m.__track_lines__[11] = 'HashableTest.py, line 11:\n    class HashableTest(UnitTest):';
		$m.__track_lines__[12] = 'HashableTest.py, line 12:\n    def testMethods(self):';
		$m.__track_lines__[13] = 'HashableTest.py, line 13:\n    foo = Foo()';
		$m.__track_lines__[14] = 'HashableTest.py, line 14:\n    dMethodToInt = {}';
		$m.__track_lines__[15] = 'HashableTest.py, line 15:\n    dMethodToInt[foo.bar] = 5';
		$m.__track_lines__[16] = 'HashableTest.py, line 16:\n    dMethodToInt[foo.bar] = 6';
		$m.__track_lines__[17] = 'HashableTest.py, line 17:\n    dMethodToInt[foo.bar] = 7';
		$m.__track_lines__[18] = 'HashableTest.py, line 18:\n    self.assertEquals(1, len(dMethodToInt.keys()),';

		var $constant_int_1 = new $p['int'](1);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		$pyjs.track.module='HashableTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=4;
		$m['Foo'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'HashableTest';
			$cls_definition.__md5__ = '89373b80f08321c163654abf5f038fcd';
			$pyjs.track.lineno=5;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '89373b80f08321c163654abf5f038fcd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'HashableTest', lineno:5};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='HashableTest';
				$pyjs.track.lineno=5;
				$pyjs.track.lineno=6;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs.track.lineno=7;
			$method = $pyjs__bind_method2('bar', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '89373b80f08321c163654abf5f038fcd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs.track={module:'HashableTest', lineno:7};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='HashableTest';
				$pyjs.track.lineno=7;
				$pyjs.track.lineno=8;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['bar'] = $method;
			$pyjs.track.lineno=4;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Foo', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=11;
		$m['HashableTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'HashableTest';
			$cls_definition.__md5__ = 'cd23ffd1931ff834905db01843d39fec';
			$pyjs.track.lineno=12;
			$method = $pyjs__bind_method2('testMethods', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== 'cd23ffd1931ff834905db01843d39fec') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $len1,foo,dMethodToInt;
				$pyjs.track={module:'HashableTest', lineno:12};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='HashableTest';
				$pyjs.track.lineno=12;
				$pyjs.track.lineno=13;
				foo = $m['Foo']();
				$pyjs.track.lineno=14;
				dMethodToInt = $p['dict']([]);
				$pyjs.track.lineno=15;
				dMethodToInt.__setitem__($p['getattr'](foo, 'bar'), $constant_int_5);
				$pyjs.track.lineno=16;
				dMethodToInt.__setitem__($p['getattr'](foo, 'bar'), $constant_int_6);
				$pyjs.track.lineno=17;
				dMethodToInt.__setitem__($p['getattr'](foo, 'bar'), $constant_int_7);
				$pyjs.track.lineno=18;
				self['assertEquals']($constant_int_1, (($len1=dMethodToInt['keys']()) === null?$constant_int_0:
					(typeof $len1.__array != 'undefined' ? new $p['int']($len1.__array.length):
						(typeof $len1.__len__ == 'function'?$len1.__len__():
							(typeof $len1.length != 'undefined'? new $p['int']($len1.length):
								$p['len']($len1))))), 'Bug #656 Hashing class methods is not supported');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['testMethods'] = $method;
			$pyjs.track.lineno=11;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('HashableTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end HashableTest */


/* end module: HashableTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest']
*/
