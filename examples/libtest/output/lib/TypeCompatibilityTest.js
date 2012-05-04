/* start module: TypeCompatibilityTest */
$pyjs.loaded_modules['TypeCompatibilityTest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['TypeCompatibilityTest'].__was_initialized__) return $pyjs.loaded_modules['TypeCompatibilityTest'];
	var $m = $pyjs.loaded_modules["TypeCompatibilityTest"];
	$m.__repr__ = function() { return "<module: TypeCompatibilityTest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'TypeCompatibilityTest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'TypeCompatibilityTest.py, line 1:\n    from UnitTest import UnitTest';
		$m.__track_lines__[3] = 'TypeCompatibilityTest.py, line 3:\n    from write import write, writebr';
		$m.__track_lines__[6] = 'TypeCompatibilityTest.py, line 6:\n    def add(arg1, arg2):';
		$m.__track_lines__[7] = 'TypeCompatibilityTest.py, line 7:\n    return arg1 + arg2';
		$m.__track_lines__[10] = 'TypeCompatibilityTest.py, line 10:\n    class TypeCompatibilityTest(UnitTest):';
		$m.__track_lines__[12] = 'TypeCompatibilityTest.py, line 12:\n    def test_string_plus_number(self):';
		$m.__track_lines__[13] = 'TypeCompatibilityTest.py, line 13:\n    try:';
		$m.__track_lines__[14] = 'TypeCompatibilityTest.py, line 14:\n    add("string", 1)';
		$m.__track_lines__[16] = 'TypeCompatibilityTest.py, line 16:\n    pass';
		$m.__track_lines__[18] = 'TypeCompatibilityTest.py, line 18:\n    self.fail(\'adding "string" and 1 should fail\')';
		$m.__track_lines__[20] = 'TypeCompatibilityTest.py, line 20:\n    try:';
		$m.__track_lines__[21] = 'TypeCompatibilityTest.py, line 21:\n    add(1, "string")';
		$m.__track_lines__[23] = 'TypeCompatibilityTest.py, line 23:\n    pass';
		$m.__track_lines__[25] = 'TypeCompatibilityTest.py, line 25:\n    self.fail(\'adding 1 and "string" should fail\')';

		var $constant_int_1 = new $p['int'](1);
		$pyjs.track.module='TypeCompatibilityTest';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['UnitTest'] = $p['___import___']('UnitTest.UnitTest', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=3;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['write'] = $p['___import___']('write.write', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['writebr'] = $p['___import___']('write.writebr', null, null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=6;
		$m['add'] = function(arg1, arg2) {
			if ($pyjs.options.arg_count && arguments.length != 2) $pyjs__exception_func_param(arguments.callee.__name__, 2, 2, arguments.length);
			var $add2,$add1;
			$pyjs.track={module:'TypeCompatibilityTest',lineno:6};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='TypeCompatibilityTest';
			$pyjs.track.lineno=6;
			$pyjs.track.lineno=7;
			$pyjs.track.lineno=7;
			var $pyjs__ret = (typeof ($add1=arg1)==typeof ($add2=arg2) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2));
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['add'].__name__ = 'add';

		$m['add'].__bind_type__ = 0;
		$m['add'].__args__ = [null,null,['arg1'],['arg2']];
		$pyjs.track.lineno=10;
		$m['TypeCompatibilityTest'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'TypeCompatibilityTest';
			$cls_definition.__md5__ = '9f206d95b1a58226d3d24902d0db44b1';
			$pyjs.track.lineno=12;
			$method = $pyjs__bind_method2('test_string_plus_number', function() {
				if (this.__is_instance__ === true) {
					var self = this;
					if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
				} else {
					var self = arguments[0];
					if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
					if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
				}
				if ($pyjs.options.arg_instance_type) {
					if (self.prototype.__md5__ !== '9f206d95b1a58226d3d24902d0db44b1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs.track={module:'TypeCompatibilityTest', lineno:12};$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.module='TypeCompatibilityTest';
				$pyjs.track.lineno=12;
				$pyjs.track.lineno=13;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=14;
					$m['add']('string', $constant_int_1);
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=18;
						self['fail']('adding "string" and 1 should fail');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='TypeCompatibilityTest';
						if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
							$pyjs.track.lineno=16;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				$pyjs.track.lineno=20;
				var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
				try {
					$pyjs.track.lineno=21;
					$m['add']($constant_int_1, 'string');
					throw $p['TryElse'];
				} catch($pyjs_try_err) {
					$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
					$pyjs.__active_exception_stack__ = null;
					if ($pyjs_try_err.__name__ == 'TryElse') {
						$pyjs.track.lineno=25;
						self['fail']('adding 1 and "string" should fail');
					} else {
						$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
						var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
						$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
						if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
							$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
							$pyjs.track = $pyjs.trackstack.slice(-1)[0];
						}
						$pyjs.track.module='TypeCompatibilityTest';
						if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
							$pyjs.track.lineno=23;
						} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
					}
				}
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['test_string_plus_number'] = $method;
			$pyjs.track.lineno=10;
			var $bases = new Array($m['UnitTest']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('TypeCompatibilityTest', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end TypeCompatibilityTest */


/* end module: TypeCompatibilityTest */


/*
PYJS_DEPS: ['UnitTest.UnitTest', 'UnitTest', 'write.write', 'write', 'write.writebr']
*/
