/* start module: pyjd */
$pyjs.loaded_modules['pyjd'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjd'].__was_initialized__) return $pyjs.loaded_modules['pyjd'];
	var $m = $pyjs.loaded_modules["pyjd"];
	$m.__repr__ = function() { return "<module: pyjd>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjd';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = "pyjd.py, line 1:\n    # Flag indicating we're not in desktop";
		$m.__track_lines__[2] = 'pyjd.py, line 2:\n    is_desktop = False';
		$m.__track_lines__[5] = 'pyjd.py, line 5:\n    def setup(application, appdir=None, width=800, height=600):';
		$m.__track_lines__[6] = 'pyjd.py, line 6:\n    pass';
		$m.__track_lines__[7] = 'pyjd.py, line 7:\n    def run():';
		$m.__track_lines__[8] = 'pyjd.py, line 8:\n    pass';

		var $constant_int_800 = new $p['int'](800);
		var $constant_int_600 = new $p['int'](600);
		$pyjs.track.module='pyjd';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=2;
		$m['is_desktop'] = false;
		$pyjs.track.lineno=5;
		$m['setup'] = function(application, appdir, width, height) {
			if ($pyjs.options.arg_count && (arguments.length < 1 || arguments.length > 4)) $pyjs__exception_func_param(arguments.callee.__name__, 1, 4, arguments.length);
			if (typeof appdir == 'undefined') appdir=arguments.callee.__args__[3][1];
			if (typeof width == 'undefined') width=arguments.callee.__args__[4][1];
			if (typeof height == 'undefined') height=arguments.callee.__args__[5][1];

			$pyjs.track={module:'pyjd',lineno:5};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjd';
			$pyjs.track.lineno=5;
			$pyjs.track.lineno=6;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['setup'].__name__ = 'setup';

		$m['setup'].__bind_type__ = 0;
		$m['setup'].__args__ = [null,null,['application'],['appdir', null],['width', $constant_int_800],['height', $constant_int_600]];
		$pyjs.track.lineno=7;
		$m['run'] = function() {
			if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 0, 0, arguments.length);

			$pyjs.track={module:'pyjd',lineno:7};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjd';
			$pyjs.track.lineno=7;
			$pyjs.track.lineno=8;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		};
		$m['run'].__name__ = 'run';

		$m['run'].__bind_type__ = 0;
		$m['run'].__args__ = [null,null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjd */


/* end module: pyjd */


