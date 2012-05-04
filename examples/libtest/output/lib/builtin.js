/* start module: builtin */
$pyjs.loaded_modules['builtin'] = function (__mod_name__) {
	if($pyjs.loaded_modules['builtin'].__was_initialized__) return $pyjs.loaded_modules['builtin'];
	var $m = $pyjs.loaded_modules["builtin"];
	$m.__repr__ = function() { return "<module: builtin>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'builtin';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[8] = 'builtin.py, line 8:\n    def get_value():';
		$m.__track_lines__[1] = 'builtin.py, line 1:\n    # This module is used in builtin test';
		$m.__track_lines__[6] = 'builtin.py, line 6:\n    value = 1';
		$m.__track_lines__[9] = 'builtin.py, line 9:\n    return value';

		var $constant_int_1 = new $p['int'](1);
		$pyjs.track.module='builtin';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=6;
		$m['value'] = $constant_int_1;
		$pyjs.track.lineno=8;
		$m['get_value'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'builtin',lineno:8};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='builtin';
			$pyjs.track.lineno=8;
			$pyjs.track.lineno=9;
			$pyjs.track.lineno=9;
			var $pyjs__ret = $m['value'];
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['get_value'].__name__ = 'get_value';

		$m['get_value'].__bind_type__ = 0;
		$m['get_value'].__args__ = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end builtin */


/* end module: builtin */


