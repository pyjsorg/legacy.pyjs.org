/* start module: imports.enum.super */
$pyjs.loaded_modules['imports.enum.super'] = function (__mod_name__) {
	if($pyjs.loaded_modules['imports.enum.super'].__was_initialized__) return $pyjs.loaded_modules['imports.enum.super'];
	if(typeof $pyjs.loaded_modules['imports.enum'] == 'undefined' || !$pyjs.loaded_modules['imports.enum'].__was_initialized__) $p['___import___']('imports.enum', null);
	var $m = $pyjs.loaded_modules["imports.enum.super"];
	$m.__repr__ = function() { return "<module: imports.enum.super>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports.enum.super';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['imports.enum']['$$super'] = $pyjs.loaded_modules['imports.enum.super'];
	try {
		$m.__track_lines__[1] = 'imports.enum.super.py, line 1:\n    var = 1';
		$m.__track_lines__[3] = 'imports.enum.super.py, line 3:\n    def function():';
		$m.__track_lines__[4] = 'imports.enum.super.py, line 4:\n    export = 2';
		$m.__track_lines__[5] = 'imports.enum.super.py, line 5:\n    return export';

		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		$pyjs.track.module='imports.enum.super';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=1;
		$m['$$var'] = $constant_int_1;
		$pyjs.track.lineno=3;
		$m['$$function'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);
			var $$export;
			$pyjs.track={module:'imports.enum.super',lineno:3};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='imports.enum.super';
			$pyjs.track.lineno=3;
			$pyjs.track.lineno=4;
			$$export = $constant_int_2;
			$pyjs.track.lineno=5;
			$pyjs.track.lineno=5;
			var $pyjs__ret = $$export;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		};
		$m['$$function'].__name__ = 'function';

		$m['$$function'].__bind_type__ = 0;
		$m['$$function'].__args__ = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end imports.enum.super */


/* end module: imports.enum.super */


