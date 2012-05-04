/* start module: _importtimeerror */
$pyjs.loaded_modules['_importtimeerror'] = function (__mod_name__) {
	if($pyjs.loaded_modules['_importtimeerror'].__was_initialized__) return $pyjs.loaded_modules['_importtimeerror'];
	var $m = $pyjs.loaded_modules["_importtimeerror"];
	$m.__repr__ = function() { return "<module: _importtimeerror>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = '_importtimeerror';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = '_importtimeerror.py, line 1:\n    """';
		$m.__track_lines__[4] = '_importtimeerror.py, line 4:\n    raise Exception("Testing import-time exception")';


		$pyjs.track.module='_importtimeerror';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=4;
		$pyjs.__active_exception_stack__ = null;
		throw ($p['Exception']('Testing import-time exception'));
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end _importtimeerror */


/* end module: _importtimeerror */


