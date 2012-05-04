/* start module: imports.allwith__all__ */
$pyjs.loaded_modules['imports.allwith__all__'] = function (__mod_name__) {
	if($pyjs.loaded_modules['imports.allwith__all__'].__was_initialized__) return $pyjs.loaded_modules['imports.allwith__all__'];
	if(typeof $pyjs.loaded_modules['imports'] == 'undefined' || !$pyjs.loaded_modules['imports'].__was_initialized__) $p['___import___']('imports', null);
	var $m = $pyjs.loaded_modules["imports.allwith__all__"];
	$m.__repr__ = function() { return "<module: imports.allwith__all__>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'imports.allwith__all__';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['imports']['allwith__all__'] = $pyjs.loaded_modules['imports.allwith__all__'];
	try {
		$m.__track_lines__[8] = 'imports.allwith__all__.py, line 8:\n    all_masked = True';
		$m.__track_lines__[1] = 'imports.allwith__all__.py, line 1:\n    """';
		$m.__track_lines__[4] = "imports.allwith__all__.py, line 4:\n    __all__ = ['all_import1', 'all_import2']";
		$m.__track_lines__[6] = 'imports.allwith__all__.py, line 6:\n    all_import1 = 1';
		$m.__track_lines__[7] = 'imports.allwith__all__.py, line 7:\n    all_import2 = 2';

		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		$pyjs.track.module='imports.allwith__all__';
		$pyjs.track.lineno=1;
		$pyjs.track.lineno=4;
		$m['__all__'] = $p['list'](['all_import1', 'all_import2']);
		$pyjs.track.lineno=6;
		$m['all_import1'] = $constant_int_1;
		$pyjs.track.lineno=7;
		$m['all_import2'] = $constant_int_2;
		$pyjs.track.lineno=8;
		$m['all_masked'] = true;
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end imports.allwith__all__ */


/* end module: imports.allwith__all__ */


