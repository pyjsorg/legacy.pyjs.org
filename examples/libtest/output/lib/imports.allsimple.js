/* start module: imports.allsimple */
$pyjs.loaded_modules['imports.allsimple'] = function (__mod_name__) {
	if($pyjs.loaded_modules['imports.allsimple'].__was_initialized__) return $pyjs.loaded_modules['imports.allsimple'];
	if(typeof $pyjs.loaded_modules['imports'] == 'undefined' || !$pyjs.loaded_modules['imports'].__was_initialized__) $p['___import___']('imports', null);
	var $m = $pyjs.loaded_modules["imports.allsimple"];
	$m.__repr__ = function() { return "<module: imports.allsimple>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports.allsimple';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['imports']['allsimple'] = $pyjs.loaded_modules['imports.allsimple'];
	try {
		$m.__track_lines__[1] = 'imports.allsimple.py, line 1:\n    """';
		$m.__track_lines__[5] = 'imports.allsimple.py, line 5:\n    all_import2 = 3';
		$m.__track_lines__[6] = 'imports.allsimple.py, line 6:\n    all_import3 = 3';
		$m.__track_lines__[7] = 'imports.allsimple.py, line 7:\n    all_override = True';

		var $constant_int_3 = new $p['int'](3);
		$pyjs.track.module='imports.allsimple';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=5;
		$m['all_import2'] = $constant_int_3;
		$pyjs.track.lineno=6;
		$m['all_import3'] = $constant_int_3;
		$pyjs.track.lineno=7;
		$m['all_override'] = true;
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end imports.allsimple */


/* end module: imports.allsimple */


