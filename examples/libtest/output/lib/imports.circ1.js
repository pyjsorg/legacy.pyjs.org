/* start module: imports.circ1 */
$pyjs.loaded_modules['imports.circ1'] = function (__mod_name__) {
	if($pyjs.loaded_modules['imports.circ1'].__was_initialized__) return $pyjs.loaded_modules['imports.circ1'];
	if(typeof $pyjs.loaded_modules['imports'] == 'undefined' || !$pyjs.loaded_modules['imports'].__was_initialized__) $p['___import___']('imports', null);
	var $m = $pyjs.loaded_modules["imports.circ1"];
	$m.__repr__ = function() { return "<module: imports.circ1>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports.circ1';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['imports']['circ1'] = $pyjs.loaded_modules['imports.circ1'];
	try {
		$m.__track_lines__[1] = 'imports.circ1.py, line 1:\n    ';
		$m.__track_lines__[2] = 'imports.circ1.py, line 2:\n    import imports';
		$m.__track_lines__[4] = "imports.circ1.py, line 4:\n    imports.exec_order.append('circ1-1')";
		$m.__track_lines__[5] = 'imports.circ1.py, line 5:\n    import imports.circ2';
		$m.__track_lines__[6] = "imports.circ1.py, line 6:\n    imports.exec_order.append('circ1-2')";


		$pyjs.track.module='imports.circ1';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=2;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['imports'] = $p['___import___']('imports', 'imports');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=4;
		$m['imports']['exec_order']['append']('circ1-1');
		$pyjs.track.lineno=5;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['imports'] = $p['___import___']('imports.circ2', 'imports');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=6;
		$m['imports']['exec_order']['append']('circ1-2');
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end imports.circ1 */


/* end module: imports.circ1 */


/*
PYJS_DEPS: ['imports', 'imports.circ2']
*/
