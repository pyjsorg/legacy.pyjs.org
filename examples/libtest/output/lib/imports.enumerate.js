/* start module: imports.enumerate */
$pyjs.loaded_modules['imports.enumerate'] = function (__mod_name__) {
	if($pyjs.loaded_modules['imports.enumerate'].__was_initialized__) return $pyjs.loaded_modules['imports.enumerate'];
	if(typeof $pyjs.loaded_modules['imports'] == 'undefined' || !$pyjs.loaded_modules['imports'].__was_initialized__) $p['___import___']('imports', null);
	var $m = $pyjs.loaded_modules["imports.enumerate"];
	$m.__repr__ = function() { return "<module: imports.enumerate>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports.enumerate';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['imports']['enumerate'] = $pyjs.loaded_modules['imports.enumerate'];
	try {
		$m.__track_lines__[1] = 'imports.enumerate.py, line 1:\n    list = 1';
		$m.__track_lines__[3] = 'imports.enumerate.py, line 3:\n    def dict():';
		$m.__track_lines__[4] = 'imports.enumerate.py, line 4:\n    tuple = (1,2)';
		$m.__track_lines__[5] = 'imports.enumerate.py, line 5:\n    return tuple';

		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		$pyjs.track.module='imports.enumerate';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$m['list'] = $constant_int_1;
		$pyjs.track.lineno=3;
		$m['dict'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var tuple;
			$pyjs.track={module:'imports.enumerate',lineno:3};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='imports.enumerate';
			$pyjs.track.lineno=3;
			$pyjs.track.lineno=4;
			tuple = $p['tuple']([$constant_int_1, $constant_int_2]);
			$pyjs.track.lineno=5;
			$pyjs.track.lineno=5;
			var $pyjs__ret = tuple;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['dict'].__name__ = 'dict';

		$m['dict'].__bind_type__ = 0;
		$m['dict'].__args__ = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end imports.enumerate */


/* end module: imports.enumerate */


