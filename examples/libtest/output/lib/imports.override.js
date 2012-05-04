/* start module: imports.override */
$pyjs.loaded_modules['imports.override'] = function (__mod_name__) {
	if($pyjs.loaded_modules['imports.override'].__was_initialized__) return $pyjs.loaded_modules['imports.override'];
	if(typeof $pyjs.loaded_modules['imports'] == 'undefined' || !$pyjs.loaded_modules['imports'].__was_initialized__) $p['___import___']('imports', null);
	var $m = $pyjs.loaded_modules["imports.override"];
	$m.__repr__ = function() { return "<module: imports.override>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports.override';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['imports']['override'] = $pyjs.loaded_modules['imports.override'];
	try {
		$m.__track_lines__[1] = 'imports.override.py, line 1:\n    ';
		$m.__track_lines__[2] = 'imports.override.py, line 2:\n    import overrideme';


		$pyjs.track.module='imports.override';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=2;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['overrideme'] = $p['___import___']('overrideme', 'imports');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end imports.override */


/* end module: imports.override */


/*
PYJS_DEPS: ['overrideme']
*/
