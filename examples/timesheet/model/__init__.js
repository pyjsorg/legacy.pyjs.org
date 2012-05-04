/* start module: model */
$pyjs.loaded_modules['model'] = function (__mod_name__) {
	if($pyjs.loaded_modules['model'].__was_initialized__) return $pyjs.loaded_modules['model'];
	var $m = $pyjs.loaded_modules["model"];
	$m.__repr__ = function() { return "<module: model>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'model';
	$m.__name__ = __mod_name__;


	$m['puremvc'] = $p['___import___']('puremvc.patterns.proxy', 'model');
	return this;
}; /* end model */


/* end module: model */


/*
PYJS_DEPS: ['puremvc.patterns.proxy', 'puremvc', 'puremvc.patterns']
*/
