/* start module: foo */
$pyjs.loaded_modules['foo'] = function (__mod_name__) {
	if($pyjs.loaded_modules['foo'].__was_initialized__) return $pyjs.loaded_modules['foo'];
	var $m = $pyjs.loaded_modules["foo"];
	$m.__repr__ = function() { return "<module: foo>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'foo';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'foo.py, line 1:\n    # this module is used in tests';
		$m.__track_lines__[3] = 'foo.py, line 3:\n    class Bar:';
		$m.__track_lines__[5] = 'foo.py, line 5:\n    X = 1';
		$m.__track_lines__[7] = 'foo.py, line 7:\n    bar = Bar()';
		$m.__track_lines__[9] = 'foo.py, line 9:\n    foo_value = 1';
		$m.__track_lines__[11] = 'foo.py, line 11:\n    def get_foo_value():';
		$m.__track_lines__[12] = 'foo.py, line 12:\n    return foo_value';

		var $constant_int_1 = new $p['int'](1);
		$pyjs.track.module='foo';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=3;
		$m['Bar'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition.__module__ = 'foo';
			$cls_definition.__md5__ = 'ee6e3a8e104a0e541553612a84370dcc';
			$pyjs.track.lineno=5;
			$cls_definition['X'] = $constant_int_1;
			$pyjs.track.lineno=3;
			var $bases = new Array(pyjslib.object);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
			return $p['_create_class']('Bar', $p['tuple']($bases), $data);
		})();
		$pyjs.track.lineno=7;
		$m['bar'] = $m['Bar']();
		$pyjs.track.lineno=9;
		$m['foo_value'] = $constant_int_1;
		$pyjs.track.lineno=11;
		$m['get_foo_value'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'foo',lineno:11};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='foo';
			$pyjs.track.lineno=11;
			$pyjs.track.lineno=12;
			$pyjs.track.lineno=12;
			var $pyjs__ret = $m['foo_value'];
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['get_foo_value'].__name__ = 'get_foo_value';

		$m['get_foo_value'].__bind_type__ = 0;
		$m['get_foo_value'].__args__ = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end foo */


/* end module: foo */


